// import { createVuetify } from 'vuetify';
// import 'vuetify/styles'; 

// const vuetify = createVuetify(); 

// export default vuetify;

// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Adjust the path as necessary
import { createVuetify } from 'vuetify'; // Import createVuetify

// Import Vuetify styles
import 'vuetify/styles';

const app = createApp(App);
app.use(createVuetify()); // Use Vuetify
app.mount('#app');
