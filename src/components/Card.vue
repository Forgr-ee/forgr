<template>
    <!-- Masthead -->
    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <img src="../assets/logo.png" class="brand-logo"><br/>
                  <h1 class="mb-5">
                    <b>{{name}}</b> </br>
                    {{mobile}}</br>
                    {{email}}</br>
                  </h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-4">
                        <a href="/" class="button btn btn-lg btn-primary animated-button victoria-four" style="z-index: 1;"> Visitez notre site </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>

      </div>


</template>

<script>
import { i18n } from "../setup/i18n";

export default {
  name: "Card",
  data() {
    return {};
  },
  methods: {
    locale() {
      return i18n.locale;
    },
    switchLocale(loc) {
      i18n.locale = loc;
    }
  },
  computed: {
    name() {
      return this.$route.query.name;
    },
    mobile() {
      return this.$route.query.mobile;
    },
    email() {
      return this.$route.query.email || "hello@forgr.ee";
    }
  },
  mounted() {
    this.loaded = true;
  }
};
</script>
