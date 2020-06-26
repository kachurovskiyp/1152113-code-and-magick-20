'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  window.getWizards = function (playersNumber) {
    var fragment = document.createDocumentFragment();

    var onLoad = function (data) {
      var wizardItems = document.querySelectorAll('.setup-similar-item');
      for (var i = 0; i < wizardItems.length; i++) {
        wizardItems[i].querySelector('.setup-similar-label').textContent = data[i].name;
        wizardItems[i].querySelector('.wizard-coat').style.fill = data[i].colorCoat;
        wizardItems[i].querySelector('.wizard-eyes').style.fill = data[i].colorEyes;
      }
    };

    var onError = function (err) {
      userDialog = document.querySelector('.setup');
      var span = document.createElement(span);
      span.textContent = err;
      userDialog.appendChild(span);
    };

    for (var i = 0; i < playersNumber; i++) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
      var wizardElement = similarWizardTemplate.cloneNode(true);
      fragment.appendChild(wizardElement);
    }

    window.backend.load(onLoad, onError);
    similarListElement.appendChild(fragment);
  };
})();
