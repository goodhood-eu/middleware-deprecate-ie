middleware-deprecate-ie
=======================

ExpressJS middleware that shows a landing screen to all Internet Explorer users preventing them from accessing the website

## Usage:

```javascript
app.use(require('middleware-deprecate-ie')());
```

## Options

You can pass options like this:
```javascript
app.use(require('middleware-deprecate-ie')({ skippable: false }));
```

All possible options and their defaults:

```javascript
const DEFAULTS = {
  skippable: true, // should the landing be skippable
  expires: 60 * 60 * 24, // after skipping how long can the user access the website
  cookie: 'ie-deprecation-middleware-pass-through', // name of the cookie where the value is stored
  sanitize: true, // should the dict be sanitized before rendering the template

  // if you have locale in your `res.locals` you can put a path here, for example
  // if your locale object for this screen is in `res.locals.dict.ie_landing` then the value
  // should be `'dict.ie_landing'`
  // this allows to have dynamic locales without extra middleware
  // this option takes priority over `dict`
  dictKey: null,

  // by default these strings are used to generate the template
  dict: {
    // locale name
    lang: 'en-US',
    // browser window title
    title: 'Deprecation warning',
    // meta description
    description: 'The browser you are using is deprecated',
    // header you see on the page
    headline: 'Internet Explorer is not supported',
    // the description text, you will have links to browsers rendered below
    text: 'The browser you are currently using was released in 2013 or earlier. We can no longer support this browser and the website will look broken or not function. It is recommended to upgrade to any modern browser. You will find examples below.',
    // label for the skip button
    link: 'I don\'t care',
  },
};
```
