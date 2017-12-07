// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import * from 'font-awesome/css/font-awesome.css';
// import * from 'simple-line-icons/css/simple-line-icons.css';
// import VueI18n from 'vue-i18n';
import { i18n, translations } from "./setup/i18n";
import App from './App';
import router from './router';


// require('font-awesome/css/font-awesome.css');

// import "font-awesome/scss/font-awesome.scss";
// import "simple-line-icons/scss/simple-line-icons.scss";

// import 'vuetify/dist/vuetify.min.css';
// import fr from './lang/fr';
// import en from './lang/en';
// import ee from './lang/ee';
// import BootstrapVue from 'bootstrap-vue';


// const messages = { fr, ee, en };

Vue.config.productionTip = false;
// Vue.use(VueI18n);
// Vue.use(BootstrapVue);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    locale() {
      return i18n.locale;
    },
    switchLocale(loc) {
      i18n.locale = loc;
    },
  },
  computed: {
    typeform_url() {
      const url = `https://riderx.typeform.com/to/${translations[i18n.locale].common.typeform_id}`;
      return url;
    },
    dialowflow_url() {
      const url = `https://app.talky.cards/?api=${translations[i18n.locale].common.dialogflow_id}`;
      // console.log(url);
      return url;
    },
  },
  mounted() {
    // i18n.locale = locale;
    // console.log('lang', locale);
    this.loaded = true;
  },
  template: '<App/>',
  components: { App },
});
