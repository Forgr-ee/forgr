<template>
    <!-- Masthead -->
    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <!-- <h1 class="mb-5">
                    <b>FORGR</b></br>
                    Less code, more business
                  </h1> -->
                  <img :src="twitterImg(usr.twitter)" class="user-icon"><br/>
                  <h2 class="mb-5">
                    {{usr.name}}</br>
                    {{usr.mobile}}</br>
                    {{usr.email}}</br>
                  </h2>
                </div>
                <!-- <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-4">
                        <a href="/" class="button btn btn-lg btn-primary animated-button victoria-four" style="z-index: 1;"> Visitez notre site </a>
                      </div>
                    </div>
                  </form>
                </div> -->
              </div>
            </div>
          </header>
  <div class="container tiles">
    <div class="row justify-content-center">
      <div class="col-sm-3 col-6 text-center tile-right">
        <div>
          <a class="white-text" href="https://calendly.com/forgr/30min">
          <i class="fa fa-calendar-plus fa-4x fa-fw"></i>
          </a>
        </div>
        </br> {{$t("card.meet")}}
      </div>
      <div class="col-sm-3 col-6 text-center tile-left">
          <div>
            <a class="white-text" href="/">
            <img src="../assets/logo.png" class="brand-logo-icon"></img>
            </a>
          </div>
          {{$t("card.visit")}}
      </div>
      <div class="col-sm-3 col-6 text-center tile-left">
        <div >
          <a class="white-text" :href="'tel:' + usr.mobile">
          <i class="fa fa-phone fa-4x fa-fw"></i>
          </a>
        </div>
        </br>{{$t("card.call")}}
      </div>
      <div class="col-sm-3 col-6 text-center tile-right">
        <div >
          <a class="white-text" :href="'mailto:' + usr.email">
          <i class="fa fa-envelope-open fa-4x fa-fw"></i>
          </a>
        </div>
        </br>{{$t("card.email")}}
      </div>
    </div>

  </div>

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
    },
    twitterImg(id) {
      return `https://avatars.io/twitter/${id}`;
    }
  },
  computed: {
    usr() {
      const index = this.$route.query.usr || 0;
      const users = [
        {
          name: "Martin DONADIEU",
          twitter: "martindonadieu",
          mobile: "+33651316427",
          email: "hello@forgr.ee"
        },
        {
          name: "Nicolas BANNIER DUCROS",
          twitter: "Nbannierducros",
          mobile: "+33650910815",
          email: "hello@forgr.ee"
        }
      ];
      return users[index];
    }
  },
  ready() {},
  beforeDestroy() {},
  mounted() {
    this.loaded = true;
  }
};
</script>
