'use strict';

(function () {

  window.random = {
    int: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },

    element: function (array) {
      var min = 0;
      var max = array.length;
      var rand = min + Math.random() * (max - min);
      return array[Math.floor(rand)];
    }
  };
})();
