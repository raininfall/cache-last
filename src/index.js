import _ from 'lodash';

class RememberLast {
  lastValue = null;
  lastKey = null;
  size = 0;

  clear() {
    this.size = 0;
  }

  delete(key) {
    return this.size ?
      key === this.lastKey ?
        0 === (this.size = 0) :
        false :
      false;
  }

  get(key) {
    return this.size ?
      key === this.lastKey ?
        this.lastValue :
        undefined :
      undefined;
  }

  has(key) {
    return this.size ?
      key === this.lastKey :
      false;
  }
  set(key, value) {
    this.size = 1;
    this.lastKey = key;
    this.lastValue = value;
    return this;
  }
}

export default (fn, resolver) => {
  const preCache = _.memoize.Cache;
  _.memoize.Cache = RememberLast;
  const result = _.memoize(fn, resolver);
  _.memoize.Cache = preCache;
  return result;
};
