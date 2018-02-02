// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { i18n, translations } from "./setup/i18n";
import App from './App';
import router from './router';

require("./setup/fb");

Vue.config.productionTip = false;

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
