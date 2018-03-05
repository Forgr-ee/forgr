   <template>
    <!-- Masthead -->
    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <img src="../assets/logo.png" class="brand-logo"><br/>
                  <h1 class="mb-5">
                    <b>{{ $t("value_proposition.third") }}</b>
                  </h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-5">
                        <a href="https://calendly.com/forgr/30min" class="button btn btn-lg btn-primary animated-button victoria-four" target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>

          <!-- Image Showcases -->
          <section class="showcase">
            <div class="container-fluid p-0">
              <div class="row no-gutters">
                <div class="col-lg-6 text-white showcase-img tile2"></div>
                <div class="col-lg-6 my-auto showcase-text">
                  <h1>{{ $t("showcase.2.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.2.subtitle") }}</h3>
                  <br>
                  <p class="lead mb-0 space">
                      {{ $t("showcase.2.content") }}
                  </p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2 text-white showcase-img tile3"></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h1>{{ $t("showcase.3.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.3.subtitle") }}</h3>
                  <br>
                  <p class="lead mb-0 space">
                      {{ $t("showcase.3.content") }}
                  </p>
                </div>
              </div>

              <div class="row no-gutters">

                  <div class="col-lg-6 text-white showcase-img tile4"></div>
                  <div class="col-lg-6 my-auto showcase-text">
                    <h2>{{ $t("showcase.4.title") }}</h2>
                    <h3 class="quote">{{ $t("showcase.4.subtitle") }}</h3>
                    <br>
                    <p class="lead mb-0 space">
                        {{ $t("showcase.4.content") }}
                      </p>
                  </div>
                </div>
              <div class="row no-gutters">
                  <div class="col-lg-6 order-lg-2 text-white showcase-img">
                      <div style="background: #272822; height: 100%; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em; font-size: 1.6rem;">
                        <br/><table>
                          <tr>
                          <td style="margin: 0;line-height: 210%;width: 20px; border-style: solid; border-color: #a6e22e; border-width: 0px 2px 0px 0px;">
                          1
                          2
                          3
                          4
                          5
                          6
                          7
                          </td>
                      <td>
                        <pre style="margin: 0; line-height: 200%"><span style="color: #ca0256">private</span> <span style="color: #ca0256">static</span> <span style="color: #66d9ef">int</span> <span style="color: #a6e22e">updateDesktop</span> <span style="color: #f92672">(</span><span style="color: #66d9ef">Image</span> <span style="color: #f8f8f2">wallpaper</span><span style="color: #f92672">)</span> <span style="color: #f92672">{</span>
                        <span style="color: #66d9ef">int</span> <span style="color: #f8f8f2">happyness</span><span style="color: #f92672">;</span>
                        <span style="color: #66d9ef">MyDesktop</span> <span style="color: #f8f8f2">desktop</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">MyDesktop</span><span style="color: #f92672">();</span>
                        <span style="color: #f8f8f2">desktop</span><span style="color: #f92672">.</span><span style="color: #a6e22e">apply</span><span style="color: #f92672">(</span><span style="color: #f8f8f2">wallpaper</span><span style="color: #f92672">);</span>
                        <span style="color: #f8f8f2">happyness</span> <span style="color: #f92672">=</span> <span style="color: #6b06d4">INFINITY</span><span style="color: #f92672">;</span>
                        <span style="color: #f92672">return</span> <span style="color: #f8f8f2">happyness</span><span style="color: #f92672">;</span>
                        <span style="color: #f92672;">}</span>
                      </pre></td>
                      </tr>
                      </table>
                    </div>
                  </div>
                  <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h1>{{ $t("showcase.5.title") }}</h1>
                    <h3 class="quote">{{ $t("showcase.5.subtitle") }}</h3>
                    <br>
                    <p class="lead mb-0 space">
                        {{ $t("showcase.5.content") }}
                      </p>
                  </div>
                </div>
              <div class="row no-gutters">
                  <div class="col-lg-6 text-white showcase-img tile5"></div>
                  <div class="col-lg-6 my-auto showcase-text">
                      <h1>{{ $t("showcase.6.title") }}</h1>
                    <h3 class="quote">{{ $t("showcase.6.subtitle") }}</h3>
                    <br>
                      <p class="lead mb-0 space">
                        {{ $t("showcase.6.content") }}
                        </p>
                  </div>
              <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img tile6"></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h1>{{ $t("showcase.7.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.7.subtitle") }}</h3>
                <br>
                  <p class="lead mb-0 space">
                      {{ $t("showcase.7.content") }}
                    </p>
              </div>
            </div>

          </div>

            </div>
          </section>

          <!-- Testimonials -->
          <section class="testimonials text-center">
            <h2 class="mb-5 light-forgr-text">{{ $t("common.faq") }}</h2>
              <div class="container">
                <div class="row">
                  <div class="col-12" v-for="item in faqs" :key="item.id">
                    <div class="card" v-on:click="item.collapse()">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-12">
                          <h5 class="mb-0" >
                              {{item.title}}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div :class="item.isCollapsed()">
                      <div class="card-body" v-html="item.content.join(' ')">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Call to Action -->
          <section class="text-white text-center">
            <div class="skycloud">
              <div class="row rawcloud">
                <div class="col-xl-9 mx-auto">
                    <h2 class="mb-5">{{ $t("cta.first") }} <br/>
                      <b>{{ $t("cta.second") }}</b>
                    </h2>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-5">
                        <a href="https://calendly.com/forgr/30min" class="button btn btn-lg btn-primary animated-button victoria-four" target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          </div>
</template>

<script>
import { i18n, translations } from "../setup/i18n";
import { three } from "../setup/dotcloud";

export default {
  name: "Home",
  metaInfo() {
    return {
      meta: [
        { property: "og:title", content: this.og_title },
        { property: "og:description", content: this.og_description },
        { property: "og:locale", conten: this.og_locale }
      ]
    };
  },
  data() {
    return {
      loaded: false,
      og_title: translations[i18n.locale].meta.og_title,
      og_description: translations[i18n.locale].meta.og_description,
      og_locale: translations[i18n.locale].meta.og_locale
    };
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
    dialowflow_url() {
      const url = `https://app.talky.cards/?api=${
        translations[i18n.locale].common.dialogflow_id
      }`;
      return url;
    },
    faqs() {
      const faqs = [];
      const parent = this;
      const faqLen = Number(i18n.t("faqLen"));
      for (let index = 0; index < faqLen; index += 1) {
        faqs.push({
          id: i18n.t(`faq.${index + 1}.id`),
          collapsed: "collapse",
          isCollapsed() {
            return this.collapsed;
          },
          collapse() {
            faqs.forEach(element => {
              if (element.id !== this.id) {
                element.collapsed = "collapse";
              } else {
                if (element.collapsed === "collapse") {
                  element.collapsed = "collapse show";
                } else {
                  element.collapsed = "collapse";
                }
              }
            });
            parent.$forceUpdate();
          },
          title: i18n.t(`faq.${index + 1}.title`),
          content: i18n.t(`faq.${index + 1}.content`)
        });
      }
      return faqs;
    }
  },
  mounted() {
    this.loaded = true;
    three();
  }
};
</script>
