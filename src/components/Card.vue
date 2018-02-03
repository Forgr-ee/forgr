<template>
    <!-- Masthead -->
    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <img :src="twitterImg(usr().twitter)" class="user-icon"><br/>
                  <h2 class="mb-5">
                    {{usr().firstName}} {{usr().lastName}}</br>
                    {{usr().mobile}}</br>
                    {{usr().email}}</br>
                  </h2>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-5">
                        <a @click="vcard()" class="button btn btn-lg btn-primary animated-button victoria-four" style="z-index: 1;"> {{$t("card.addme")}} </a>
                      </div>
                    </div>
                  </form>
                </div>
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
import FileSaver from "file-saver";
import vCard from "vcards-js";
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
    },
    usr() {
      const index = this.$route.params.id || 0;
      const users = [
        {
          firstName: "Martin",
          lastName: "DONADIEU",
          twitter: "martindonadieu",
          mobile: "+33651316427",
          email: "hello@forgr.ee"
        },
        {
          firstName: "Nicolas",
          lastName: "BANNIER DUCROS",
          twitter: "Nbannierducros",
          mobile: "+33650910815",
          email: "hello@forgr.ee"
        },
        {
          firstName: "Victorien",
          lastName: "SANMARTY",
          twitter: "Nbannierducros",
          mobile: "+33‭0658468730‬",
          email: "hello@forgr.ee"
        }
      ];
      return users[index];
    },
    vcard() {
      console.log("click v card");
      const card = vCard();
      card.firstName = this.usr().firstName;
      card.lastName = this.usr().lastName;
      card.cellPhone = this.usr().mobile;
      card.photo.attachFromUrl(this.twitterImg(this.usr().twitter), "JPEG");
      card.logo.attachFromUrl(
        "http://forgr.ee/static/img/logo.18d6563.png",
        "PNG"
      );
      card.organization = "FORGR";
      card.title = "Less code, more business";
      console.log("card", card);
      // card.saveToFile("./martin-donadieu.vcf");
      var blob = new Blob([card.getFormattedString()], {
        type: "text/x-vcard;charset=utf-8"
      });
      FileSaver.saveAs(blob, "martindonadieu.vcf");
      // return card.getFormattedString();
    }
  },
  computed: {},
  ready() {},
  beforeDestroy() {},
  mounted() {
    this.loaded = true;
  }
};
</script>
