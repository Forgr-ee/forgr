<template>
<div class="bg-forgr container">
<h2><strong>{{$t("nda.title")}}</strong></h2>
<p><span style="font-weight: 400;">Forgr, {{$t("nda.one")}}</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.two")}}</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.three")}}</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.four")}}</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.five")}}</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.six")}}</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">{{$t("nda.seven")}}</span></li>
</ol>
<!-- <p><span style="font-weight: 400;">{{$t("nda.terms")}} </span><router-link to="/terms">{{ $t("footer.terms") }}</router-link></p> -->
<p><span style="font-weight: 400;">{{$t("nda.questions")}} </span><a href="mailto:hello@forgr.ee"><span style="font-weight: 400;">hello@forgr.ee</span></a><span style="font-weight: 400;"> .</span></p>
<h2><br /><br /></h2>
</div>
</template>

<script>
import { i18n } from "../setup/i18n";

export default {
  name: "NDA",
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
  computed: {},
  ready() {},
  beforeDestroy() {},
  mounted() {
    this.loaded = true;
  }
};
</script>
