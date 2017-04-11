'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RememberLast = function () {
  function RememberLast() {
    _classCallCheck(this, RememberLast);

    this.lastValue = null;
    this.lastKey = null;
    this.size = 0;
  }

  _createClass(RememberLast, [{
    key: 'clear',
    value: function clear() {
      this.size = 0;
    }
  }, {
    key: 'delete',
    value: function _delete(key) {
      return this.size ? key === this.lastKey ? 0 === (this.size = 0) : false : false;
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.size ? key === this.lastKey ? this.lastValue : undefined : undefined;
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.size ? key === this.lastKey : false;
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this.size = 1;
      this.lastKey = key;
      this.lastValue = value;
      return this;
    }
  }]);

  return RememberLast;
}();

exports.default = function (fn, resolver) {
  var preCache = _lodash2.default.memoize.Cache;
  _lodash2.default.memoize.Cache = RememberLast;
  var result = _lodash2.default.memoize(fn, resolver);
  _lodash2.default.memoize.Cache = preCache;
  return result;
};