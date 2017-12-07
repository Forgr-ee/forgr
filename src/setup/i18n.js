import Vue from 'vue';
import VueI18n from 'vue-i18n';
import fr from '../lang/fr';
import en from '../lang/en';
import ee from '../lang/ee';

export const translations = { fr, en, ee };

Vue.use(VueI18n);


const browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const availableLanguages = ['fr', 'ee', 'en'];
const getLangs = () => {
  let langs = [];
  for (let index = 0; index < browserLanguagePropertyKeys.length; index += 1) {
    const element = browserLanguagePropertyKeys[index];
    if (window.navigator[element]) {
      if (typeof window.navigator[element] === 'string') {
        if (window.navigator[element].indexOf('_') > -1) {
          langs.push(window.navigator[element].split('_')[0]);
        } else if (window.navigator[element].indexOf('-') > -1) {
          langs.push(window.navigator[element].split('-')[0]);
        } else {
          langs.push(window.navigator[element]);
        }
      } else {
        langs = langs.concat(window.navigator[element]);
      }
    }
  }
  return langs;
};
const langs = getLangs();
function isLocal(element) {
  return availableLanguages[availableLanguages.indexOf(element)];
}
const detectedLocale = langs.find(isLocal);
const locale = detectedLocale || 'en';
console.log("lang", locale);
export const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages: translations,
});

