import Vue from 'vue';
import * as GoogleMaps from 'vue2-google-maps';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyCsfPRsRQKE9pnVV-M9rb7IjYrDWJLRdAU',
    libraries: 'places',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
