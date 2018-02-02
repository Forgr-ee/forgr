/* eslint-disable */
import { i18n } from "./i18n";

const fbSrc = `https://connect.facebook.net/${i18n.locale === 'en' ? 'en_US' : 'fr_FR'}/sdk.js`;

window.fbAsyncInit = () => {
  FB.init({
    appId: '1954598607889653',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  });

  FB.getLoginStatus((response) => {
    console.log(response);
  });
};

(function (d, s, id) {
  let js;
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = fbSrc;
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
