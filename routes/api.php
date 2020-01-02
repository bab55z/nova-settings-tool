<?php

use Bab55z\NovaSettingsTool\Http\Controllers\SettingsManager;
use Bab55z\NovaSettingsTool\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

// Route::get('/endpoint', function (Request $request) {
//     //
// });

Route::get('/settings',SettingsManager::class.'@getSettings');
Route::get('/localeSettings',BaseController::class.'@localeSettings');
Route::get('/tabs',SettingsManager::class.'@getSettingTabs');
Route::post('/save',SettingsManager::class.'@updateSettings');
Route::post('/upload-file',SettingsManager::class.'@uploadFile');
Route::post('/delete-file',SettingsManager::class.'@deleteFile');
Route::get('/reset',SettingsManager::class.'@resetSettings');
