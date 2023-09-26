import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff';

createApp(App).mount('#app')
liff.init({
    liffId: '2000904850-8nYxV5dd', // Use own liffId
});
console.log(liff.getLanguage());
console.log(liff.getVersion());
console.log(liff.isInClient());
console.log(liff.isLoggedIn());
console.log(liff.getOS());
console.log(liff.getLineVersion());