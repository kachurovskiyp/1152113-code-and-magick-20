'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var coords = {};

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var onSetupCloseEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      closePopup();
    }
  };

  var coatColorChange = function () {
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var coatColorInput = document.querySelector('input[name="coat-color"]');
    var wizardCoat = document.querySelector('.wizard-coat');
    var coatUnique = true;

    while (coatUnique) {
      var coatRandomColor = window.random.element(coatColors);
      if (wizardCoat.style.fill !== coatRandomColor) {
        wizardCoat.style.fill = coatRandomColor;
        coatUnique = false;
      }
    }
    coatColorInput.value = wizardCoat.style.fill;
  };

  var eyesColorChange = function () {
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var eyesColorInput = document.querySelector('input[name="eyes-color"]');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var eyesUnique = true;
    while (eyesUnique) {
      var eyesRandomColor = window.random.element(eyesColors);
      if (wizardEyes.style.fill !== eyesRandomColor) {
        wizardEyes.style.fill = eyesRandomColor;
        eyesUnique = false;
      }
    }
    eyesColorInput.value = wizardEyes.style.fill;
  };

  var firebollColorChange = function () {
    var firebollColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var firebollColorInput = document.querySelector('input[name="fireball-color"]');
    var wizardFireboll = document.querySelector('.setup-fireball-wrap');
    var firebollUnique = true;
    while (firebollUnique) {
      var firebollRandomColor = window.random.element(firebollColors);
      if (wizardFireboll.style.backgroundColor !== firebollRandomColor) {
        wizardFireboll.style.backgroundColor = firebollRandomColor;
        firebollUnique = false;
      }
    }
    firebollColorInput.value = wizardFireboll.style.backgroundColor;
  };

  var openPopup = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireboll = document.querySelector('.setup-fireball-wrap');

    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);

    wizardCoat.addEventListener('click', coatColorChange);

    wizardEyes.addEventListener('click', eyesColorChange);

    wizardFireboll.addEventListener('click', firebollColorChange);

    coords = {
      x: userDialog.style.top,
      y: userDialog.style.left
    };
  };

  var closePopup = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireboll = document.querySelector('.setup-fireball-wrap');

    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);

    wizardCoat.removeEventListener('click', coatColorChange);

    wizardEyes.removeEventListener('click', eyesColorChange);

    wizardFireboll.removeEventListener('click', firebollColorChange);

    userDialog.style.top = coords.x;
    userDialog.style.left = coords.y;
  };

  similarListElement.appendChild(window.getWizards(4));

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
})();
