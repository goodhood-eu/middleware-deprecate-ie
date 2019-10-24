const BROWSER_LINKS = {
  'Google Chrome': 'https://www.google.com/chrome',
  Opera: 'https://www.opera.com',
  Firefox: 'https://www.mozilla.org/firefox',
  'Microsoft Edge': 'https://www.microsoft.com/windows/microsoft-edge',
};

const renderLinks = () => Object.keys(BROWSER_LINKS).map((key) => (
  `<li><a href="${BROWSER_LINKS[key]}" target="_blank" rel="noopener noreferrer">${key}</a></li>`
)).join('');

const render = (options, dict) => (`
<!DOCTYPE html>
<html lang="${dict.lang}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${dict.title}</title>
    <meta name="description" content="${dict.description}">
    <meta name="Generator" content="Microsoft FrontPage 2.3">
    <style>
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        background: #edede9;
        font: normal 14px/16px Arial, sans-serif;
        color: #757575;
      }

      body {
        max-width: 600px;
        margin: 0 auto;
        padding: 30px;
      }

      h1 {
        margin-top: 30px;
        text-align: center;
      }

      a {
        color: #799189;
        cursor: pointer;
      }

      a:visited {
        color: #799189;
      }

      a:active,
      a:hover {
        color: #575757;
      }

      .controls {
        text-align: right;
      }

      .button {
        padding: 0 15px;
        display: inline-block;
        font-weight: 600;
        line-height: 40px;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background: #b2ca06;
        color: #fff;
      }
      .button:hover {
        background: #c1d538;
      }
      .button:active {
        box-shadow: none;
        background: #b2ca06;
      }
    </style>
  </head>
  <body>
    <h1>${dict.headline}</h1>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 300"><defs><style>.cls-1,.cls-15,.cls-16,.cls-3{fill:none;}.cls-2{fill:#a2c20d;opacity:0.6;}.cls-10,.cls-12,.cls-13,.cls-17,.cls-18,.cls-3,.cls-8,.cls-9{stroke:#545454;}.cls-10,.cls-13,.cls-16,.cls-3,.cls-8,.cls-9{stroke-linecap:round;stroke-linejoin:round;}.cls-10,.cls-12,.cls-13,.cls-15,.cls-16,.cls-17,.cls-18,.cls-3,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:2px;}.cls-4{fill:#555;}.cls-5{fill:#90a818;}.cls-5,.cls-6,.cls-7{stroke:#555;}.cls-6{fill:#ebf1c2;}.cls-12,.cls-20,.cls-7,.cls-8{fill:#fff;}.cls-9{fill:#dfe689;}.cls-10{fill:#a4c30c;}.cls-11,.cls-17{fill:#778f88;}.cls-11,.cls-21{opacity:0.4;}.cls-12,.cls-15,.cls-17,.cls-18{stroke-miterlimit:10;}.cls-13{fill:url(#Unbenannter_Verlauf_6);}.cls-14{fill:#d2d2d0;}.cls-15,.cls-16{stroke:#fff;}.cls-18{fill:#a2c20e;}.cls-19{fill:#545454;}.cls-22{clip-path:url(#clip-path);}.cls-23{fill:#0b8ca3;}.cls-24{clip-path:url(#clip-path-2);}</style><linearGradient id="Unbenannter_Verlauf_6" x1="274.04" y1="15.95" x2="276.65" y2="256.2" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.09" stop-color="#fbfdf6"/><stop offset="0.24" stop-color="#f2f6dc"/><stop offset="0.42" stop-color="#e2ecb3"/><stop offset="0.64" stop-color="#cbdd79"/><stop offset="0.89" stop-color="#afcb31"/><stop offset="1" stop-color="#a2c20e"/></linearGradient><clipPath id="clip-path"><circle class="cls-1" cx="235.83" cy="116.22" r="30.91"/></clipPath><clipPath id="clip-path-2"><circle class="cls-1" cx="314.52" cy="116.22" r="30.91"/></clipPath></defs><title>190214_Illu_sad-PC01-x2</title><g id="Background"><path class="cls-2" d="M164.94,172.07a62.13,62.13,0,1,0-111.21,0Z"/><path class="cls-2" d="M481.46,172.07a75.6,75.6,0,1,0-135.36,0Z"/><path class="cls-2" d="M529,172.07a46.45,46.45,0,1,0-83.16,0Z"/><line class="cls-3" x1="3.29" y1="172.08" x2="535.71" y2="172.08"/><g id="Flower-2"><path id="Rectangle-10" class="cls-4" d="M479.06,203.07h46a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1h-46a1,1,0,0,1-1-1h0A1,1,0,0,1,479.06,203.07Z"/><rect id="Rectangle-11" class="cls-4" x="512.06" y="179.07" width="2" height="24"/><rect id="Rectangle-12" class="cls-4" x="503.06" y="191.07" width="20" height="2"/><path id="Rectangle-13" class="cls-5" d="M526.06,182.07h4v4a6,6,0,0,1-6,6h-4v-4A6,6,0,0,1,526.06,182.07Z"/><path id="Rectangle-14" class="cls-5" d="M496.06,182.07h4a6,6,0,0,1,6,6v4h-4a6,6,0,0,1-6-6Z"/><circle id="Oval-3" class="cls-6" cx="513.06" cy="168.07" r="12"/><circle id="Oval-4" class="cls-7" cx="513.06" cy="168.07" r="4"/></g><g id="Flower-3"><path id="Rectangle-4" class="cls-4" d="M35.88,202.76h48a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1h-48a1,1,0,0,1-1-1h0A1,1,0,0,1,35.88,202.76Z"/><rect id="Rectangle-3" class="cls-4" x="73.88" y="178.08" width="2" height="25"/><rect id="Rectangle-8" class="cls-4" x="74.88" y="189.76" width="10" height="2"/><path id="Rectangle-9" class="cls-5" d="M92.54,189.35,94,190.76l-1.41,1.41a8,8,0,0,1-11.31,0l-1.42-1.41,1.42-1.41A8,8,0,0,1,92.54,189.35Z"/><rect id="Rectangle-6" class="cls-4" x="60.88" y="184.76" width="14" height="2"/><path id="Rectangle-9-2" data-name="Rectangle-9" class="cls-5" d="M68.54,184.35,70,185.76l-1.41,1.41a8,8,0,0,1-11.31,0l-1.42-1.41,1.42-1.41A8,8,0,0,1,68.54,184.35Z"/><path id="Star" class="cls-6" d="M71.49,177.09l-2.3.37A3,3,0,0,1,65.74,175a4.26,4.26,0,0,1,0-.71l.18-2.33L64,170.6a3,3,0,0,1-.69-4.19,3.43,3.43,0,0,1,.48-.53l1.77-1.51-.38-2.3a3,3,0,0,1,2.47-3.45,2.9,2.9,0,0,1,.72,0l2.32.18,1.36-1.9a3,3,0,0,1,4.18-.68,3,3,0,0,1,.53.48l1.52,1.76,2.29-.37A3,3,0,0,1,84,160.53a2.84,2.84,0,0,1,0,.71l-.17,2.33,1.89,1.35a3,3,0,0,1,.69,4.19,3.05,3.05,0,0,1-.49.53l-1.76,1.51.38,2.3a3,3,0,0,1-2.48,3.45,2.8,2.8,0,0,1-.71,0l-2.32-.18-1.36,1.9a3,3,0,0,1-4.19.68,3,3,0,0,1-.52-.48Z"/><circle id="Oval-2" class="cls-7" cx="74.88" cy="167.76" r="4"/></g><path class="cls-8" d="M115,113.25H44.19a5.81,5.81,0,0,0-5.81,5.8h0a5.81,5.81,0,0,0,5.81,5.81H73.64a5.8,5.8,0,0,1,5.8,5.8h0a5.81,5.81,0,0,1-5.8,5.81H23a5.81,5.81,0,0,0-5.8,5.81h0a5.8,5.8,0,0,0,5.8,5.8h89.57a5.81,5.81,0,0,0,5.81-5.8h0a5.81,5.81,0,0,0-5.81-5.81H91.27a5.81,5.81,0,0,1-5.8-5.81h0a5.8,5.8,0,0,1,5.8-5.8H115a5.81,5.81,0,0,0,5.81-5.81h0A5.81,5.81,0,0,0,115,113.25Z"/><path class="cls-8" d="M440,59h70.77a5.81,5.81,0,0,1,5.8,5.81h0a5.81,5.81,0,0,1-5.8,5.81H481.36a5.8,5.8,0,0,0-5.81,5.8h0a5.81,5.81,0,0,0,5.81,5.81H532a5.81,5.81,0,0,1,5.81,5.8h0A5.81,5.81,0,0,1,532,93.85H442.47a5.81,5.81,0,0,1-5.8-5.81h0a5.8,5.8,0,0,1,5.8-5.8h21.25a5.81,5.81,0,0,0,5.81-5.81h0a5.8,5.8,0,0,0-5.81-5.8H440a5.81,5.81,0,0,1-5.81-5.81h0A5.81,5.81,0,0,1,440,59Z"/><line class="cls-3" x1="31.18" y1="171.39" x2="31.18" y2="160.54"/><circle class="cls-9" cx="31.6" cy="151.57" r="8.98"/><line class="cls-3" x1="27.91" y1="151.57" x2="26.18" y2="151.57"/><line class="cls-3" x1="35.29" y1="148.56" x2="33.55" y2="148.56"/><line class="cls-3" x1="34.36" y1="155.62" x2="32.63" y2="155.62"/><line class="cls-3" x1="46.79" y1="171.39" x2="46.79" y2="160.54"/><circle class="cls-10" cx="47.21" cy="151.57" r="8.98"/><line class="cls-3" x1="43.52" y1="151.57" x2="41.78" y2="151.57"/><line class="cls-3" x1="50.89" y1="148.56" x2="49.16" y2="148.56"/><line class="cls-3" x1="49.97" y1="155.62" x2="48.23" y2="155.62"/><ellipse class="cls-11" cx="276.99" cy="279" rx="140.71" ry="15.4"/><rect class="cls-12" x="251.12" y="222.52" width="48.51" height="51.98"/><rect class="cls-12" x="230.33" y="274.33" width="90.09" height="13.86" rx="6.93"/><rect class="cls-12" x="133.31" y="42.34" width="284.14" height="194.05" rx="12.05"/><rect class="cls-13" x="143.7" y="52.73" width="263.35" height="173.26"/><polygon class="cls-14" points="252.1 243.63 298.74 262.11 298.74 237.28 252.1 237.28 252.1 243.63"/><circle class="cls-15" cx="391.61" cy="178.88" r="5.08"/><line class="cls-16" x1="389.46" y1="206.92" x2="399.61" y2="217.08"/><line class="cls-16" x1="399.61" y1="206.92" x2="389.46" y2="217.08"/><polygon class="cls-16" points="374.22 196.76 366.6 209.46 381.84 209.46 374.22 196.76"/><path class="cls-17" d="M297.77,205.67a4.14,4.14,0,0,1-3.54-2.37c-1.86-3.38-9.49-12.18-22.27-12.18-13.22,0-19.13,7.1-22.43,12.44-1.51,2.44-4.24,2.82-6.11.85a6.93,6.93,0,0,1-.66-8c6.93-11.21,16.48-16.66,29.2-16.66a34.27,34.27,0,0,1,29.34,16.91,6.87,6.87,0,0,1-1,7.93A3.72,3.72,0,0,1,297.77,205.67Z"/><ellipse class="cls-2" cx="341.35" cy="153.86" rx="16.85" ry="6.99"/><ellipse class="cls-2" cx="212.17" cy="153.86" rx="16.85" ry="6.99"/><circle class="cls-12" cx="314.49" cy="116.22" r="31.64"/><circle class="cls-18" cx="308.62" cy="112.14" r="17.48"/><circle class="cls-19" cx="308.62" cy="112.14" r="10.93"/><path class="cls-18" d="M300.2,67.5s22.58,27.16,59.69,29.08"/><path class="cls-18" d="M359.9,104.63h-.42C319.3,102.55,295,73.86,294,72.64a8.06,8.06,0,0,1,12.38-10.31c.29.36,21,24.51,53.92,26.2a8.06,8.06,0,0,1-.41,16.1Z"/><circle class="cls-20" cx="310.16" cy="106.7" r="5.54"/><circle class="cls-20" cx="312.84" cy="120.48" r="3.2"/><circle class="cls-20" cx="300.33" cy="117.03" r="1.33"/><circle class="cls-12" cx="235.83" cy="116.22" r="31.64"/><circle class="cls-18" cx="241.7" cy="112.14" r="17.48"/><circle class="cls-19" cx="241.7" cy="112.14" r="10.93"/><path class="cls-18" d="M250.12,67.5s-22.58,27.16-59.69,29.08"/><path class="cls-18" d="M190.42,104.63h.42c40.18-2.07,64.46-30.76,65.47-32a8.05,8.05,0,0,0-12.37-10.31c-.3.36-21.05,24.51-53.92,26.2a8.06,8.06,0,0,0,.4,16.1Z"/><circle class="cls-20" cx="240.16" cy="106.7" r="5.54"/><circle class="cls-20" cx="237.48" cy="120.48" r="3.2"/><circle class="cls-20" cx="250" cy="117.03" r="1.33"/><g class="cls-21"><g class="cls-22"><path class="cls-23" d="M212.2,135.87s3.33-2.38,7-1.72,4.89,2.66,7.56,2.82,2.25-2,6.92-1.79,5.38,2,11.79,2.56c2.33.19,3.88-1.37,7.05-1.54a16.31,16.31,0,0,1,6.08,1l1,4.34-9.51,10-30.71-.66L210.2,140Z"/></g></g><g class="cls-21"><g class="cls-24"><path class="cls-23" d="M338.15,135.87s-3.33-2.38-7-1.72-4.89,2.66-7.56,2.82-2.25-2-6.92-1.79-5.38,2-11.79,2.56c-2.33.19-3.88-1.37-7.05-1.54a16.31,16.31,0,0,0-6.08,1l-1,4.34,9.51,10,30.72-.66L340.15,140Z"/></g></g></g></svg>
      <p>${dict.text}</p>
      <ul>${renderLinks()}</ul>
      ${options.skippable && `
        <div class="controls"><span id="js-cookie-pass" class="button">${dict.link}</span></div>
      `}
    </div>

    ${options.skippable && `
      <script>
        document.getElementById('js-cookie-pass').onclick = function() {
          document.cookie = '${options.cookie}=yes;max-age=${options.expires};';
          document.location.reload();
        };
      </script>
    `}
  </body>
</html>
`);

module.exports = render;
