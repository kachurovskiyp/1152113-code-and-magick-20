'use strict';

(function () {
  var maxElement = 0;
  window.getMaxElement = function (arr) {

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };
})();
