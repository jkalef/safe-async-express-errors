# Safe Async Express Errors

Typesafe wrapper around async express handlers that ensures that asynchronous errors are caught and handled by error-handling middleware.

This module can be used in either Javascript or Typescript, but is most useful for Typescript projects because it makes an effort to preserve type safety for the compiler (unlike other solutions).

## Usage

> npm install @mcrowe/safe-async-express-errors --save

Then wrap any asynchronous express handler functions:

```js
const safe = require('@mcrowe/safe-async-express-errors')
// ...

// Errors thrown by `db.many` will now be handled by any middleware you've setup,
// instead of swallowed.
app.get('/', safe(async (req, res) => {
  const things = await db.many('SELECT * FROM things')
  res.json({ things })
}))
```


## Development

Install npm modules:

> npm install

Run tests:

> npm test

Build:

> npm run build

Publish to npm:

Update the version in `package.json`, then publish using:

> npm publish

