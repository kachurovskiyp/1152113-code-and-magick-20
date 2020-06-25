'use strict';

(function () {
  window.getWizards = function (playersNumber) {
    var fragment = document.createDocumentFragment();

    var onLoad = function (data) {
      for (var i = 0; i < playersNumber; i++) {
        var similarWizardTemplate = document.querySelector('#similar-wizard-template')
          .content
          .querySelector('.setup-similar-item');
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = data[i].name;
        wizardElement.querySelector('.wizard-coat').style.fill = data[i].coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;
        fragment.appendChild(wizardElement);
      }
    };

    var onError = function (err) {
      var userDialog = document.querySelector('.setup');
      var span = document.createElement(span);
      span.textContent = err;
      userDialog.appendChild(span);
    };

    window.backend.load(onLoad, onError);
    return fragment;
  };
})();
