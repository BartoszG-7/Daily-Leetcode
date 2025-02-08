var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(function() {
      fn.apply(null, args);
    }, t);
  
    const cancelFn = function() {
      clearTimeout(timeoutId);
    };
  
    return cancelFn;
  };