<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

    <footer class="footer bg-forgr">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <a href="mailto:hello@forgr.ee" target="_top">{{ $t("footer.contact") }}</a>
              </li>
              <li class="list-inline-item" v-if="path !== '/'">&sdot;</li>
              <li class="list-inline-item" v-if="path !== '/'">
                <router-link to="/">{{ $t("footer.home") }}</router-link>
              </li>
              <li class="list-inline-item" v-if="path !== '/privacy'">&sdot;</li>
              <li class="list-inline-item" v-if="path !== '/privacy'">
                <router-link to="/privacy">{{ $t("footer.privacy") }}</router-link>
              </li>
              <li class="list-inline-item" v-if="path !== '/nda'">&sdot;</li>
              <li class="list-inline-item" v-if="path !== '/nda'">
                <router-link to="/nda">{{ $t("footer.nda") }}</router-link>
              </li>
              <li class="list-inline-item" v-if="path !== '/terms'">&sdot;</li>
              <li class="list-inline-item" v-if="path !== '/terms'">
                <router-link to="/terms">{{ $t("footer.terms") }}</router-link>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSegXHjwus5qdwwlB2PfsegpMGXhAA8jYmFRSvd0VweoD7IH4A/viewform" target="_blank">{{ $t("footer.jobs") }}</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item fa-1x" v-if="locale() !== 'fr'">
                <a href="#" class="lang-icons" v-on:click="switchLocale('fr')">🇫🇷</a>
              </li>
              <li class="list-inline-item fa-1x" v-if="locale() !== 'en'">
                <a href="#" class="lang-icons" v-on:click="switchLocale('en')">🇬🇧</a>
              </li>
              <li class="list-inline-item fa-1x" v-if="locale() !== 'ee'">
                <a href="#" class="lang-icons" v-on:click="switchLocale('ee')">🇪🇪</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">&copy; Forgr 2018. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-3">
                <a href="https://medium.com/forgr">
                  <i class="fab fa-medium-m fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="https://twitter.com/Forgr_ee">
                  <i class="icon-social-twitter fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="https://www.facebook.com/forgr.ee">
                  <i class="icon-social-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/Forgr_ee">
                  <i class="icon-social-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { i18n, translations } from "./setup/i18n";

export default {
  name: "app",
  methods: {
    locale() {
      return i18n.locale;
    },
    switchLocale(loc) {
      i18n.locale = loc;
    }
  },
  computed: {
    typeform_url() {
      const url = `https://riderx.typeform.com/to/${
        translations[i18n.locale].common.typeform_id
      }`;
      return url;
    },
    dialowflow_url() {
      const url = `https://app.talky.cards/?api=${
        translations[i18n.locale].common.dialogflow_id
      }`;
      // console.log(url);
      return url;
    },
    path() {
      return this.$route.path;
    }
  },
  mounted() {
    // i18n.locale = locale;
    // console.log('lang', locale);
    this.loaded = true;
    if (this.$route.query.lang) {
      this.switchLocale(this.$route.query.lang);
    }
  }
};
</script>

<style lang="scss">
@import "scss/landing-page.scss";
</style>
