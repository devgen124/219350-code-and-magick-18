'use strict';

(function () {
  window.utils = {
    getRandomItem: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    randomizeArray: function (arr) {
      for (var i = 0; i < arr.length; i++) {
        var randomIndex = Math.floor(Math.random() * i);
        var swap = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = swap;
      }
      return arr;
    },
    debounce: function (cb) {
      var DEBOUNCE_INTERVAL = 500;
      var lastTimeout = null;

      return function () {
        var parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          cb.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);
      };
    }
  };
})();
