import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Adjust path if necessary

const app = createApp(App);
app.use(vuetify); // Use the configured Vuetify instance
app.mount('#app');
