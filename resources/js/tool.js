import {Tab, Tabs} from 'vue-tabs-component'
import vUploader from 'v-uploader';

// v-uploader plugin global config
const uploaderConfig = {
    // file uploader service url
    uploadFileUrl: '/nova-vendor/nova-settings-tool/upload-file',
    // file delete service url
    deleteFileUrl: '/nova-vendor/nova-settings-tool/delete-file',
    // set the way to show upload message(upload fail message)
    showMessage: (vue, message) => {
        //using v-dialogs to show message
        vue.$toasted.show(message, { type: 'error' });
    },
    language : 'en'
};

Nova.booting((Vue, router) => {
    Vue.use(vUploader, uploaderConfig);
    Vue.component('tabs', Tabs);
    Vue.component('tab', Tab);
    router.addRoutes([
        {
            name: 'nova-settings-tool',
            path: '/nova-settings-tool',
            component: require('./components/Tool'),
        },
    ])
})
