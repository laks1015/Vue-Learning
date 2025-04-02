import { createApp } from 'vue';
// combine different JS files and export a feature to be used in a another
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

// createApp(App).mount('#app');

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend); //this is what the html tag will be called

app.mount('#app');
