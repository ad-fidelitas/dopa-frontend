import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light:{
        primary: '#008940',
        accent: '#0279D7',
        secondary: '#9F9F9F',
        info: '#0279D7',
        warning: '#B71C1C',
        error: '#B71C1C',
        success: '#4CAf50',
      },
    },
  },
});
