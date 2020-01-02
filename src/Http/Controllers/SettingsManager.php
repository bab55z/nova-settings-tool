<?php
/**
 * Created by PhpStorm.
 * User: willi
 * Date: 10/12/2018
 * Time: 21:04
 */

namespace Bab55z\NovaSettingsTool\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Unisharp\Setting\SettingFacade as Setting;

class SettingsManager extends BaseController
{
    public function uploadFile(Request $request)
    {
        $files = $request->allFiles();
        if(empty($files)) return response()->json(["success" => false, "error" => 'no file received', "url" => null], 400);

        foreach ($files as $configKey => $fileData) {
            //return error if setting is not an image type
            if(!$this->configExists($configKey)) return response()->json(["success" => false, "error" => 'this setting does not exists', "url" => null],400);
            if(!$this->configIsImage($configKey)) return response()->json(["success" => false, "error" => 'this setting type is not image', "url" => null], 400);

            //get setting config parameters
            $settingConfig = $this->getSettingConfig($configKey);

            //validate setting
            if (!empty($settingConfig['validation'])) {
                $validator = Validator::make($request->all(), [$configKey . ':' . $settingConfig['validation'],]);
                if ($validator->fails()) {
                    if(!$this->configExists($configKey)) return response()->json(["success" => false, "error" => 'image validation failed', "url" => null], 400);
                }
            }

            //store file
            $disk = config('nova-settings.storage.disk');
            $path = $request->file($configKey)->store('/',$disk );
            $path = Storage::disk($disk)->url($path);

            //store file link
            Setting::set($configKey, $path);

            return response()->json(["success" => true, "error" => null,  "url" => $path]);
        }
        return response()->json('no file received', 400);
    }

    public function deleteFile(Request $request)
    {
        //dump($request->all());
    }

    public function updateSettings(Request $request)
    {
        //validate fields
        try {
            $this->validateSettingsForUpdate($request);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

        //get settings to update
        $tabs = $request->all();

        //for each setting get the type
        foreach ($tabs as $tab) {
            foreach ($tab["items"] as $setting) {
                if ($setting['type'] != 'image') {
                    $settingConfig = $this->getSettingConfig($setting['key']);
                    if ($settingConfig) { // process only settings defined in config file
                        //save setting
                        if ($settingConfig['type'] == 'text') { //text type
                            if (array_key_exists('translate', $settingConfig) && $settingConfig['translate'] == true) {
                                //translation enabled
                                foreach ($this->getLocales() as $locale => $localeName) {
                                    //dump($setting['value']);
                                    if(array_key_exists($locale,$setting['value']) && !empty($setting['value'][$locale])){
                                        Setting::lang($locale)->set($setting['key'], $setting['value'][$locale]);
                                    }
                                }
                            }
                            else {
                                //translation not enabled
                                Setting::set($setting['key'], $setting['value']);
                            }
                        }
                        else{
                            Setting::set($setting['key'], $setting['value']);
                        }
                    }
                }
            }
        }
        //return result
        return response()->json('settings updated');
    }

    public function getSettingTabs(Request $request)
    {
        return $this->normalizedSettings();
    }

    private function validateSettingsForUpdate(Request $request)
    {
        $tabs = $request->all();
        $validationRules = [];
        $validationData = [];
        foreach ($tabs as $tab) {
            foreach ($tab["items"] as $setting) {

                //process non image setting
                if ($setting['type'] != 'image') {

                    //validate new value using each field validation data
                    $settingValidationRule = $this->getSettingValidation($tab['tab_name'], $setting['key']);

                    if ($settingValidationRule) {
                        $validationRules[$setting['key']] = $settingValidationRule;
                        $validationData[$setting['key']] = $setting['value'];
                    }
                }

                //process image setting
                else{

                }
            }
        }
        $validator = Validator::make($validationData, $validationRules);
        if ($validator->fails()) {
            throw new \ErrorException($this->formatErrors($validator->getMessageBag()->toArray()));
        }
    }

    public function resetSettings(Request $request)
    {
        $this->syncSettings(true);
        return response()->json('settings have been reset.');
    }
}
