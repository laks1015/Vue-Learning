import { createApp } from 'vue';
// combine different JS files and export a feature to be used in a another
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

// createApp(App).mount('#app');

const app= createApp(App);
app.component('friend-contact', FriendContact)
app.mount('#app');
