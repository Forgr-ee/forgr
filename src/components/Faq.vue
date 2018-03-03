<template>
<div class="bg-forgr container">

    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <img src="../assets/logo.png" class="brand-logo"><br/>
                  <!-- <img src="./assets/logo.png"> -->
                  <h1 class="mb-5">
                    <b>{{ $t("value_proposition.third") }}</b>
                  </h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-5">
                        <a href="https://calendly.com/forgr/30min" class="button btn btn-lg btn-primary animated-button victoria-four" target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
                          <!-- <a class="typeform-share button btn btn-lg btn-primary animated-button victoria-four" :href="typeform_url" data-mode="popup" data-hide-headers=true data-hide-footer=true target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a> -->
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>
            </div>
  <div>
    <div>
    <div class="card" v-for="item in faqs" :key="item.id">
    <div class="card-header">
      <h5 class="mb-0" v-on:click="collapse(item)">
          {{item.title}}
      </h5>
    </div>
    <div :class="item.collapsed">
      <div class="card-body">
          {{item.content}}
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
import { i18n } from "../setup/i18n";

export default {
  name: "FAQ",
  data() {
    return {
      faqs: [],
      loaded: false
    };
  },
  methods: {
    locale() {
      return i18n.locale;
    },
    faq() {
      return i18n.getLocaleMessage("faq");
    },
    switchLocale(loc) {
      i18n.locale = loc;
    },
    collapse(item) {
      if (item.collapsed === "collapse") {
        item.collapsed = "collapse show";
      } else {
        item.collapsed = "collapse";
      }
    }
  },
  computed: {
    // faq() {
    //   const faqLen = Number(i18n.t("faqLen"));
    //   const faqs = [];
    //   for (let index = 0; index < faqLen; index += 1) {
    //     faqs.push(i18n.t(`faq.${index + 1}`));
    //   }
    //   return faqs;
    // }
  },
  ready() {
    this.faqs = [];
  },
  beforeDestroy() {},
  mounted() {
    // console.log("faqLen", i18n.t("faqLen"));
    // console.log("faqs", i18n.t("faq"));
    const faqLen = Number(i18n.t("faqLen"));
    // this.faqs = [];
    for (let index = 0; index < faqLen; index += 1) {
      this.faqs.push({
        id: i18n.t(`faq.${index + 1}.id`),
        collapsed: "collapse",
        title: i18n.t(`faq.${index + 1}.title`),
        content: i18n.t(`faq.${index + 1}.content`)
      });
    }
    // console.log("faqs", this.faqs);
    this.loaded = true;
  }
};
</script>
