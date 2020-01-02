<?php
/**
 * Created by PhpStorm.
 * User: willi
 * Date: 10/12/2018
 * Time: 18:53
 */

namespace Bab55z\NovaSettingsTool\Http\Controllers;

use Unisharp\Setting\SettingFacade as Setting;

class BaseController
{
    public function settingsArray() : array
    {
        return config('novasettings.settings');
    }

    public function localeSettings() : array
    {
        return config('novasettings.translation');
    }

    public function getDefaultLocale() : string
    {
        return config('novasettings.translation.default_locale');
    }

    public function getLocales() : array
    {
        return config('novasettings.translation.locales');
    }

    public function normalizedSettings()
    {
        try {
            $this->validateKeysUniqueness();
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

        $this->syncSettings();
        $settings = $this->settingsArray();
        for ($i=0; $i < count($settings); $i++) {
            for ($j=0; $j < count($settings[$i]['items']); $j++) {
                $key = $settings[$i]['items'][$j]['key'];

                if ($settings[$i]['items'][$j]['type'] == 'text' && $settings[$i]['items'][$j]['translate'] == true) {
                    //set value for translate enabled

                    foreach ($this->getLocales() as $locale => $localeName) {
                        if (Setting::lang($locale)->has($key)) {
                            $settings[$i]['items'][$j]['value'][$locale] = Setting::lang($locale)->get($key);

                            if (!array_key_exists('currentLocale', $settings[$i]['items'][$j])) {
                                $settings[$i]['items'][$j]['currentLocale'] =  $locale;
                            }
                        }
                        else{
                            $settings[$i]['items'][$j]['value'][$locale] = '';
                        }
                    }
                    if (!array_key_exists('currentLocale', $settings[$i]['items'][$j])) {
                        $settings[$i]['items'][$j]['currentLocale'] =  $this->getDefaultLocale();
                    }
                }
                else{
                    //set others settings type value
                    $settings[$i]['items'][$j]['value'] =  Setting::get($key);
                }

            }
        }
        return response()->json($settings);
    }

    public function syncSettings($forceReset = false)
    {
        //get settings defined in config
        $configSettings = $this->settingsArray();

        //check if each settings in config exists in db,
        // we ignore settings available in db and not in config, it is advised to define all your settings in the config file before
        for ($i=0; $i < count($configSettings); $i++) {
            for ($j=0; $j < count($configSettings[$i]['items']); $j++) {
                $key = $configSettings[$i]['items'][$j]['key'];

                $defaultValue = $configSettings[$i]['items'][$j]['default'];

                if ($defaultValue || ($defaultValue === false || $defaultValue === 0)) {
                    //if a setting defined in config doesn't exists in db we add it to the db with the default value
                    if ($configSettings[$i]['items'][$j]['type'] == 'text' && $configSettings[$i]['items'][$j]['translate'] == true) {
                        //translation enabled
                        if (is_array($defaultValue)) {
                            //multiple languages default values
                            foreach ($this->getLocales() as $locale => $localeName) {
                                if (array_key_exists($locale, $defaultValue)) {
                                    if ($forceReset) {
                                        Setting::lang($locale)->set($key, $defaultValue[$locale]);
                                    }
                                    else{
                                        if(!Setting::lang($locale)->has($key)) Setting::lang($locale)->set($key, $defaultValue[$locale]);
                                    }
                                }
                            }
                        }
                        else {
                            //single language default value
                            if ($forceReset) {
                                Setting::lang($this->getDefaultLocale())->set($key, $defaultValue);
                            }
                            else{
                                if(!Setting::lang($this->getDefaultLocale())->has($key)) Setting::lang($this->getDefaultLocale())->set($key, $defaultValue);
                            }
                        }
                    }
                    else{
                        //translation not enabled
                        if ($forceReset) {
                            Setting::set($key, $defaultValue);
                        }
                        else{
                            if(!Setting::has($key)) Setting::set($key, $defaultValue);
                        }
                    }
                }

            }
        }
    }

    public function getSettingValidation($tabName, $key)
    {
        $configSettings = $this->settingsArray();
        $validation = false;
        $items = [];

        foreach ($configSettings as $tab) {
            if ($tab['tab_name'] == $tabName) {
                $items = $tab['items'];
                break;
            }
        }

        foreach ($items as $setting) if ($setting['key'] == $key) $validation = strlen($setting['validation']) ? $setting['validation'] : false;
        return $validation;
    }

    public function getSettingConfig($key)
    {
        $configSettings = $this->settingsArray();
        $config = false;
        $found = false;

        foreach ($configSettings as $tab) {
            foreach ($tab['items'] as $setting) {
                if ($setting['key'] == $key) {
                    $config = $setting;
                    $found = true;
                }
            }
            if($found) break;
        }

        return $config;
    }

    public function configIsImage($key)
    {
        $config = $this->getSettingConfig($key);
        if(!$config) return false;
        return $config['type'] == 'image';
    }

    public function configExists($key)
    {
        $config = $this->getSettingConfig($key);
        return $config != false;
    }

    public function validateKeysUniqueness()
    {
        $keys = [];
        $duplicateFound = false;
        $message = '';
        $configSettings = $this->settingsArray();

        foreach ($configSettings as $tab) {
            foreach ($tab['items'] as $item) {
                if (array_key_exists($item['key'],$keys)) {
                    $keys[$item['key']]++;
                }
                else{
                    $keys[$item['key']] = 1;
                }
            }
        }

        foreach ($keys as $key => $count) {
            if ($count > 1) {
                $duplicateFound = true;
                $message .= strlen($message) ? ' --> ' . $key . '( ' . $count . ') ' : 'duplicated key(s) found, package won\'t function properly :  --> ' . $key . '( ' . $count . ') ';
            }
        }

        if ($duplicateFound) {
            throw new \Exception($message);
        }

    }

    public function formatErrors($errors)
    {
        $str = '';
        foreach ($errors as $key => $messages) {
            $lStr = '';
            foreach ($messages as $message) {
                $prefix = strlen($str) ? ' | ' : '';;
                $lStr .= $prefix . $message;
            }
            $str .= $lStr;
        }
        return $str;
    }
}
