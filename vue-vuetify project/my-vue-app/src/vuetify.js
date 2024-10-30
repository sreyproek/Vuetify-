import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Specify the default icon set
  },
});
