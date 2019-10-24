'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('input[name="coat-color"]');
  var eyesColorInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColorInput = setup.querySelector('input[name="fireball-color"]');


  wizardCoat.addEventListener('click', function () {
    coatColorInput.value = window.utils.getRandomItem(COAT_COLORS);
    wizardCoat.style.fill = coatColorInput.value;
    var newColor = wizardCoat.style.fill;
    window.wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    eyesColorInput.value = window.utils.getRandomItem(EYES_COLORS);
    wizardEyes.style.fill = eyesColorInput.value;
    var newColor = wizardEyes.style.fill;
    window.wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    fireballColorInput.value = window.utils.getRandomItem(FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColorInput.value;
  });
})();
