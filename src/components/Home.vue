   <template>
    <!-- Masthead -->
    <div class="home">
    <header class="masthead text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <h1 class="mb-5">{{ $t("value_proposition.first") }} <br/>
                    <b>{{ $t("value_proposition.second") }}</b>
                  </h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-3">
                          <a class="typeform-share button btn btn-lg btn-primary" :href="typeform_url" data-mode="popup" data-hide-headers=true data-hide-footer=true target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>

          <!-- Icons Grid -->
          <section class="features-icons bg-light text-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-screen-smartphone m-auto text-primary"></i>
                    </div>
                    <h3>{{ $t("grid.1.title") }}</h3>
                    <p class="lead mb-0">
                        {{ $t("grid.1.subtitle") }}
                  </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-rocket m-auto text-primary"></i>
                    </div>
                    <h3>{{ $t("grid.2.title") }}</h3>
                    <p class="lead mb-0">
                        {{ $t("grid.2.subtitle") }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-mustache m-auto text-primary"></i>
                    </div>
                    <h3>{{ $t("grid.3.title") }}</h3>
                    <p class="lead mb-0">
                        {{ $t("grid.3.subtitle") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Image Showcases -->
          <section class="showcase">
            <div class="container-fluid p-0">
              <div class="row no-gutters">

                <div class="col-lg-6 order-lg-2 text-white showcase-img tile1"></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h1>{{ $t("showcase.1.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.1.subtitle") }}</h3>
                  <br>
                  <p class="lead mb-0">
                      {{ $t("showcase.1.content") }}
                  </p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-lg-6 text-white showcase-img tile2"></div>
                <div class="col-lg-6 my-auto showcase-text">
                  <h1>{{ $t("showcase.2.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.2.subtitle") }}</h3>
                  <br>
                  <p class="lead mb-0">
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
                  <p class="lead mb-0">
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
                    <p class="lead mb-0">
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
                    <p class="lead mb-0">
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
                      <p class="lead mb-0">
                        {{ $t("showcase.6.content") }}
                        </p>
                  </div>
              <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img tile6"></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h1>{{ $t("showcase.7.title") }}</h1>
                  <h3 class="quote">{{ $t("showcase.7.subtitle") }}</h3>
                <br>
                  <p class="lead mb-0">
                      {{ $t("showcase.7.content") }}
                    </p>
              </div>
            </div>

          </div>

            </div>
          </section>

          <!-- Testimonials -->
          <section class="testimonials text-center bg-light">
              <div class="container">
                <h2 class="mb-5">{{ $t("common.faq") }}</h2>
                <iframe
                v-if="loaded && locale() === 'en'"
                width="100%"
                height="430"
                style="border: none;"
                :src="dialowflow_url"></iframe>
                <a v-else href="https://www.messenger.com/t/Forgr-2054932541405651" target="_blanc">
                <i class="icon-social-facebook fa-4x fa-fw" aria-hidden="true"></i>
                </a>
              </div>
            </section>

          <!-- Call to Action -->
          <section class="call-to-action text-white text-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                    <h2 class="mb-5">{{ $t("cta.first") }} <br/>
                      <b>{{ $t("cta.second") }}</b>
                    </h2>
                  <!-- <h2 class="mb-4">{{ $t("common.signup_sentence") }}</h2> -->
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div class="form-row center-content">
                      <div class="col-12 col-md-3">
                          <a class="typeform-share button btn btn-lg btn-primary" :href="typeform_url" data-mode="popup" data-hide-headers=true data-hide-footer=true target="_blank" style="z-index: 1;">{{ $t("common.signup") }}</a>
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

export default {
  name: "Home",
  // props: [i18n],
  data() {
    return {
      loaded: false
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
    this.loaded = true;
  }
};
</script>
