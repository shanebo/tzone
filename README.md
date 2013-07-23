# tzone

Takes in an optional UTC date object and figures out what time zone it's in, the best it can given the nature of js and time zone accuracy.

## Install

With [npm](http://npmjs.org):

	npm install tzone


## Example

``` js
var tzone = require('tzone');
tzone.getLocation();
```

Returns:

```
US/Central
```

## License

MIT

## Todos

* tests