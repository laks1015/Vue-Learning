import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

// this resters the components globally
// so they can be used in any component without importing them again
// this is useful for components that are used frequently across the app

// it becomes redundant if you are only using the component in one place but you are registering it globally e.g header component 
// app.component('the-header', TheHeader);
// let's register this hader component locally in the actual file that we want to use it in ( App.vue).

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
