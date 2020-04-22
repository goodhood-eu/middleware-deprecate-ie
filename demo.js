const express = require('express');

const app = express();

app.use(require('serve-static')(`${__dirname}/dist`, { redirect: false }));
app.use(require('.')({ assetsPath: '' }));


app.get('*', (req, res) => res.send(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Demo</title>
  </head>

  <body>
    <p>Hello world! This is a demo page.</p>
    ${res.locals.getIE11DeprecationScript()}
  </body>
</html>
`));

app.listen(3000, () => console.log(`Example app listening at http://localhost:${3000}`));
