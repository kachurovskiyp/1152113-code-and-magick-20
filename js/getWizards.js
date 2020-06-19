'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardsList = [];

  var createWizards = function (playersNumber) {
    for (var i = 0; i < playersNumber; i++) {
      wizardsList.push({
        name: window.random.element(WIZARD_NAMES) + ' ' + window.random.element(WIZARD_SURNAMES),
        coatColor: window.random.element(COAT_COLORS),
        eyesColor: window.random.element(EYES_COLORS)
      });
    }
    return wizardsList;
  };

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.getWizards = function (playersNumber) {
    var wizardList = createWizards(playersNumber);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardList.length; i++) {
      fragment.appendChild(renderWizard(wizardList[i]));
    }

    return fragment;
  };
})();
