function createInfiniteObject() {
  return new Proxy({}, {
    get: function(target, propKey) {
      return function() {
        return String(propKey);
      };
    }
  });
}
