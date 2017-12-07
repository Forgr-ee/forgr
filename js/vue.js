requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'js',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
      app: '../app'
  }
});

var home = requirejs('@/pages/home');
var privacy = requirejs('@/pages/privacypolicy');

const browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const availableLanguages = ['fr', 'ee', 'en'];
var getLangs = function () {
  var langs = []
  for (let index = 0; index < browserLanguagePropertyKeys.length; index++) {
    const element = browserLanguagePropertyKeys[index];
    if (window.navigator[element]) {
      if (typeof window.navigator[element] === 'string') {
        if (window.navigator[element].indexOf('_') > -1) {
          langs.push(window.navigator[element].split('_')[0])
        } else if (window.navigator[element].indexOf('-') > -1) {
          langs.push(window.navigator[element].split('-')[0])
        } else {
          langs.push(window.navigator[element])
        }
      } else {
        langs = langs.concat(window.navigator[element])
      }
    }
  }
  return langs;
}
const langs = getLangs();
function isLocal(element) {
  return availableLanguages[availableLanguages.indexOf(element)]
}
const detectedLocale = langs.find(isLocal)
const locale = detectedLocale || 'en';
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: window.landing,
})
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/privacy', component: privacy },
  { path: '/', component: home }
]
const router = new VueRouter({routes})

new Vue({
  router,
  i18n,
  data: function(){
        return {
          loaded: false
        }
      },
  methods: {
    locale: function () {
      return i18n.locale;
    },
    switchLocale: function (locale) {
      i18n.locale = locale;
    }
  },
  computed: {
    typeform_url: function () {
      const url = 'https://riderx.typeform.com/to/' + window.landing[locale].common.typeform_id
      return url;
    },
    dialowflow_url: function () {
      const url = 'https://app.talky.cards/?api=' + window.landing[locale].common.dialogflow_id
      console.log(url)
      return url;
    }
  },
  mounted() { 
    i18n.locale = locale;
    console.log('lang', locale)
    this.loaded = true;            
  }
}).$mount('#app')