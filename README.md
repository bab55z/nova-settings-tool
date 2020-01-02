# nova-settings-tool
This package helps you manage settions in your app. It's based on **unisharp/laravel-settings** package

# Installation
```composer require bab55z/nova-settings-tool```
```php artisan publish``` and choose **nova-settings-tool** to publish config file (**config/novasettings.php**)

# configuration
Here is a sample configuration with commented lines. The config


```'menu-name' => 'Nova Settings',
'storage' => [
    'disk' => 'public',
],
'translation' =>[
    'default_locale' => 'en',                  // should exists in translation.locales
    'locales' => [                             // locales for translation
        'en' => 'English',
        'pl' => 'Polish',
    ],  
],
'settings' => [
    [
        'tab_name' => 'Main',                  // tab name, settings with no tab name are displayed in "others" tab
        'items' => [                           // settings array
            [
                'key' => 'site-title-1',       // setting key
                'label' => 'Site title 1',     // text, image, boolean
                'type' => 'text',              // text, image, boolean
                'validation' => 'string',      // laravel validation rules
                'default' => 'Default text',         // default value
                // NOTICE : for 'text' setting type with translation enabled,
                // if default value is string, it will
                // be stored in default language defined in translation.default_locale parameter
                // to set default values in different languages, use array instead of string like below
                // 'default' => ['en' => 'Monday', 'fr' => 'Lundi'] use languages keys you defined in translation.locales
                'translate' => false,          // true : enable translation, false disables it (text field only)
                'help' => '',                  // help message or instructions
                'multiline' => false,          // display as text area instead of single line
                'minHeight'  => '',            // sizes for image type setting (frontend validation)
                'maxHeight'  => '',            // sizes for image type setting (frontend validation)
                'minWidth'  => '',             // sizes for image type setting (frontend validation)
                'maxWidth'  => '',             // sizes for image type setting (frontend validation)
            ],
            [
                'key' => 'site-intro-text',    // setting key
                'label' => 'Site intro text',  // text, image, boolean
                'type' => 'text',              // text, image, boolean
                'validation' => '',            // laravel validation rules
                'default' => 'Mini intro',     // default value if
                'translate' => true,           // true : enable translation, false disables it (text field only)
                'help' => 'help text.',        // help message or instructions
                'multiline' => true,           // display as text area instead of single line
                'minHeight'  => '',            // sizes for image type setting (frontend validation)
                'maxHeight'  => '',            // sizes for image type setting (frontend validation)
                'minWidth'  => '',             // sizes for image type setting (frontend validation)
                'maxWidth'  => '',             // sizes for image type setting (frontend validation)
            ],
            [
                'key' => 'site-intro-text-2',    // setting key
                'label' => 'Site intro text 2',  // text, image, boolean
                'type' => 'text',              // text, image, boolean
                'validation' => '',            // laravel validation rules
                'default' => ['en' => 'En text.', 'pl' => 'pl text.', ],     // default value if
                'translate' => true,           // true : enable translation, false disables it (text field only)
                'multiline' => false,           // display as text area instead of single line
                'minHeight'  => '',            // sizes for image type setting (frontend validation)
                'maxHeight'  => '',            // sizes for image type setting (frontend validation)
                'minWidth'  => '',             // sizes for image type setting (frontend validation)
                'maxWidth'  => '',             // sizes for image type setting (frontend validation)
            ],
            [
                'key' => 'site-title-img',
                'label' => 'Site title Image',
                'type' => 'image',
                'validation' => 'string',
                'default' => 'http://example.com/img/image.png',
                'translate' => false,
                'help' => 'required image size : 500px * 500px',
                'minHeight' => 500,
                'maxHeight' => '',
                'minWidth' => 500,
                'maxWidth' => '',
            ],
        ],
    ],
    [
        'tab_name' => 'Home Ads',
        'items' => [
            [
                'key' => 'enable-home-ads-1',
                'label' => 'Enable Home Ads #1',
                'type' => 'boolean',
                'validation' => 'string',
                'default' => true,
                'translate' => false,
                'help' => '',
            ],
            [
                'key' => 'enable-home-ads-2',
                'label' => 'Enable Home Ads #2',
                'type' => 'boolean',
                'validation' => 'string',
                'default' => false,
                'translate' => false,
                'help' => '',
            ],
            [
                'key' => 'home-ads-1',
                'label' => 'Home ads 1',
                'type' => 'text',
                'validation' => 'string',
                'default' => 'Ads Title',
                'translate' => false,
                'help' => '',
            ],
            [
                'key' => 'home-ads-2',
                'label' => 'Home ads 2',
                'type' => 'text',
                'validation' => 'string',
                'default' => 'Ads Title',
                'translate' => false,
                'help' => '',
            ],
        ],
    ],
],
```

# Usage
After settings your settings data in config file, head to the settings menu in Laravel Nova dashoarb and set desired values, use it in your code according to  [**UniSharp/laravel-settings**](https://github.com/UniSharp/laravel-settings) documentation.



