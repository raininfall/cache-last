# Cache-Last

It's customed ** memoize ** in [lodash](https://lodash.com) that only cache last call.

See details in [here](https://lodash.com/docs/4.17.4#memoize)

## Example

```js
var cacheLast = require('cache-last').default;

function slowFunction(n) {
  for(var i = 0; i < n; i++) ;
  return n;
}

var fn = cacheLast(slowFunction);
fn(1000000000); // first run, slow
fn(1000000000); // cached, faster
```
