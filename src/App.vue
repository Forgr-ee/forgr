<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-light bg-forgr static-top">
      <div class="container">
        <img src="./img/logo-forgr.png" class="brand-logo">
        <a class="navbar-brand" href="#">Forgr</a>
        <a class="typeform-share button btn btn-lg btn-primary" :href="typeform_url" data-mode="popup" data-hide-headers=true data-hide-footer=true target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
      </div>
    </nav>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

     <footer class="footer bg-forgr">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <a href="mailto:digitalshift.ee@gmail.com" target="_top">{{ $t("footer.contact") }}</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link to="/privacy">{{ $t("footer.privacy") }}</router-link>
                <!-- <a href="pages/privacypolicy.html" target="_blanc">{{ $t("footer.privacy") }}</a> -->
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSegXHjwus5qdwwlB2PfsegpMGXhAA8jYmFRSvd0VweoD7IH4A/viewform" target="_blank">{{ $t("footer.jobs") }}</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item fa-2x" v-if="locale() !== 'fr'">
                <a href="#" v-on:click="switchLocale('fr')">🇫🇷</a>
              </li>
              <li class="list-inline-item fa-2x" v-if="locale() !== 'en'">
                <a href="#" v-on:click="switchLocale('en')">🇬🇧</a>
              </li>
              <li class="list-inline-item fa-2x" v-if="locale() !== 'ee'">
                <a href="#" v-on:click="switchLocale('ee')">🇪🇪</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">&copy; Forgr 2017. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="fa fa-medium fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="icon-social-twitter fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
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
      const url = `https://riderx.typeform.com/to/${translations[i18n.locale]
        .common.typeform_id}`;
      return url;
    },
    dialowflow_url() {
      const url = `https://app.talky.cards/?api=${translations[i18n.locale]
        .common.dialogflow_id}`;
      // console.log(url);
      return url;
    }
  },
  mounted() {
    // i18n.locale = locale;
    // console.log('lang', locale);
    this.loaded = true;
  }
};
</script>

<style lang="scss">
@import "scss/landing-page.scss";
</style>
