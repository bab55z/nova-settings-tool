<template>
    <form action="" v-on:submit="save">
        <div>

        <div class="flex mb-6 items-center justify-between">
            <heading class="mb-6">Nova Settings Tool</heading>
            <button class="btn btn-default btn-primary" type="submit">Update Settings</button>
            <button class="btn btn-default btn-primary" @click="resetSettings" type="button">Reset Settings To Default Values</button>
        </div>

        <tabs ref="settingTabs">
            <tab v-for="(tab, tabIndex) in settingTabs" :name="tab.tab_name" :key="tabIndex" :id="tab.tab_name.split(' ').join('')" :ref="tab.tab_name.split(' ').join('')">
                    <div>
                        <div v-for="(field, itemIndex) in tab.items" :key="field.key" class="flex border-b border-40">
                            <div class="w-1/4 px-8 py-6">
                                <label class="inline-block text-80 h-9 pt-2">{{field.label}}</label>
                                <p class="text-sm leading-normal text-80 italic"></p>
                            </div>
                            <div :class="field.type === 'image' ? 'w-2/4 px-8 py-6' : 'w-3/4 px-8 py-6'">
                                <a
                                    v-if="typeof field.translate !== 'undefined' && field.translate === true"
                                    class="inline-block font-bold cursor-pointer mr-2 animate-text-color select-none border-primary mb-4"
                                    :class="{ 'text-60': locale !== field.currentLocale, 'text-primary border-b-2': locale === field.currentLocale }"
                                    :key="`a-${locale}`"
                                    v-for="(value, locale) in field.value"
                                    @click="changeLangTab(tabIndex,itemIndex,locale)"
                                >
                                    {{ localeSettings.locales[locale] }}
                                </a>

                                <input v-model="field.translate ? field.value[field.currentLocale] : field.value" v-if="field.type === 'text' && ((typeof field.multiline === 'undefined') || field.multiline === false) "
                                       v-on:input.capture="handleInput($event, field)"
                                       type="text" class="w-full form-control form-input form-input-bordered">
                                <textarea  v-model="field.translate ? field.value[field.currentLocale] : field.value"
                                           v-on:input.capture="handleInput($event, field)"
                                           class="w-full form-control form-input form-input-bordered min-h-textarea"
                                           v-if="field.type === 'text' && ((typeof field.multiline !== 'undefined') && field.multiline === true)"
                                ></textarea>
                                <v-uploader
                                    v-bind:upload-file-url="'/nova-vendor/nova-settings-tool/upload-file?_token=' + getToken()"
                                    v-if="field.type === 'image'"
                                    @done="uploadDone" :preview-img="field.value" :upload-file-obj-name="field.key"
                                    :image-max-height ="typeof field.maxHeight !== 'undefined' ? field.maxHeight  : ''"
                                    :image-min-height ="typeof field.minHeight !== 'undefined' ? field.minHeight  : ''"
                                    :image-max-width ="typeof field.maxWidth !== 'undefined' ? field.maxWidth  : ''"
                                    :image-min-width ="typeof field.minWidth !== 'undefined' ? field.minWidth  : ''"
                                >
                                </v-uploader>
                                <select v-model="field.value" v-if="field.type === 'boolean'" class="w-full form-control form-input form-input-bordered">
                                    <option value="1" :selected="field.value === 1">Yes</option>
                                    <option value="0" :selected="field.value === 0">No</option>
                                </select>
                                <p v-if="(typeof field.help !== 'undefined') && field.help.length" class="text-grey-dark text-xs italic"><br> {{field.help}}</p>
                            </div>
                        </div>
                    </div>
            </tab>
        </tabs>
    </div>
    </form>
</template>

<script>
//import { FormField, HandlesValidationErrors } from 'laravel-nova';
export default {
    //mixins: [FormField, HandlesValidationErrors],
    data : () =>({
        settingTabs : [],
        localeSettings : [],
    }),
    methods : {
        getToken() {
            return document.head.querySelector("meta[name='csrf-token']").content;
        },
        uploadDone(files){
            if(files && Array.isArray(files) && files.length){
            }
        },
        changeLangTab(tabIndex,itemIndex,locale) {
            this.settingTabs[tabIndex].items[itemIndex].currentLocale = locale;
        },
        save(event) {
            let toaster = this.$toasted;

            event.preventDefault();
            window.axios.post('/nova-vendor/nova-settings-tool/save', this.settingTabs)
                .then(function (response) {toaster.show(response.data, { type: 'success' })})
                .catch(function (error) {toaster.show(error.response.data, { type: 'error' });});
        },
        getSettingTabs() {
            let toaster = this.$toasted;
            window.axios.get('/nova-vendor/nova-settings-tool/tabs')
                .then(response => {
                    this.settingTabs = response.data;
                    console.log(response.data);
                })
                .catch(function (error) {toaster.show(error, { type: 'error' })
            });
        },
        getLocaleSettings() {
            window.axios.get('/nova-vendor/nova-settings-tool/localeSettings')
                .then(response => {
                    this.localeSettings = response.data;
                    console.log(this.localeSettings);
                })
                .catch(function (error) {
                    console.log(error);
            });
        },
        resetSettings() {
            let toaster = this.$toasted;
            window.axios.get('/nova-vendor/nova-settings-tool/reset')
                .then(response => {
                    toaster.show(response.data, { type: 'success' });
                    window.location.reload(true);
                })
                .catch(function (error) {
                    console.log(error);
            });
        },
        handleInput(event, field) {
            event.stopImmediatePropagation();
            if (event.target.composing) {
                return
            }
            this.$set(
                field.translate ? field.value : field,
                field.translate ? field.currentLocale : 'value',
                event.target.value
            );
        },
    },
    created() {
        this.getLocaleSettings();
    },
    mounted() {
        this.getSettingTabs();
    },
    updated() {
        let firstTabRef = this.settingTabs[0].tab_name.split(' ').join('');
        this.$refs.settingTabs.selectTab('#'+firstTabRef, event);
    },
}
</script>

<style>
/* Scoped Styles */
</style>
