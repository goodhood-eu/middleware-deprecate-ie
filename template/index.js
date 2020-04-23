const { name, version } = require('../package');

const render = ({ assetsPath, lang }) => `
  <script type="text/javascript">
    (function() {
      if (!/MSIE|Trident/.test(window.navigator.userAgent)) return;

      window.__MODAL_DEPRECATE_IE_LOCALE__ = ${JSON.stringify(lang)};
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '${assetsPath}/script.js?pkg=${name}@${version}';
      document.head.appendChild(script);
    }());
  </script>
`;

module.exports = render;
