middleware-deprecate-ie
=======================

ExpressJS middleware that helps to serve a modal to all Internet Explorer users preventing them from accessing the website

## Usage:

1. In your project root run:
```
cd ./public && ln -s ../node_modules/middleware-deprecate-ie/dist/ deprecate-ie
```

Where `./public` is your public folder to be served by the web server. Replace paths appropriately.


2. Inject functions like this:

```javascript
app.use(require('middleware-deprecate-ie')());
```

3. Use injetor function in your template to serve the script:
```
// somewhere in the template
${res.locals.getIE11DeprecationScript()}
```

## Options

You can pass options like this:
```javascript
app.use(require('middleware-deprecate-ie')({ assetsPath: '/my_symlinked_folder' }));
```

All possible options and their defaults:

```javascript
const DEFAULTS = {
  // You will need to create a symlink in your public folder to
  // `node_modules/middleware-deprecate-ie/dist/`. This is the name of that link.
  // Avoid trailing slash as the script appends it automatically.
  assetsPath: '/deprecate-ie',
  // if you have locale in your `res.locals` you can put a path here, for example
  // if your locale object for this screen is in `res.locals.dict.ie_landing` then the value
  // should be `'dict.ie_landing'`
  // this allows to have dynamic locales without extra middleware
  // this option takes priority over `dict`
  dictKey: null,

  // by default these strings are used to generate the template
  dict: {
    // header you see on the page
    headline: 'Internet Explorer is not supported',
    // the description text, you will have links to browsers rendered below
    text: 'The browser you are currently using was released in 2013 or earlier. We can no longer support this browser and the website will look broken or not function. It is recommended to upgrade to any modern browser. You will find examples below.',
    // label for the close button
    link: 'I don\'t care',
  },
};
```
