const express = require('express');

const app = express();

app.use(require('.')());

app.get('*', (req, res) => res.send(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Demo</title>
  </head>

  <body>
    <p>Hello world! This is a demo page.</p>
  </body>
</html>
`));

app.listen(3000, () => console.log(`Example app listening at http://localhost:${3000}`));
