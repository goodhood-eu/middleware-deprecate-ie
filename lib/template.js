const { version } = require('../package');

const render = ({ assetsPath }, lang) => `
  <script type="text/javascript">
    (function() {
      if (!/MSIE|Trident/.test(window.navigator.userAgent)) return;

      window.__MIDDLEWARE_DEPRECATE_IE_LOCALE__ = ${JSON.stringify(lang)};
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '${assetsPath}/script.js?ver=${version}';
      document.head.appendChild(script);
    }());
  </script>
`;

module.exports = render;
