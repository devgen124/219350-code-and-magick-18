'use strict';

(function () {
  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (wizards) {
    var WIZARDS_QUANTITY = 4;
    var similar = document.querySelector('.setup-similar');
    var similarList = document.querySelector('.setup-similar-list');
    var listNumber = wizards.length > WIZARDS_QUANTITY ? WIZARDS_QUANTITY : wizards.length;

    similarList.innerHTML = '';
    for (var i = 0; i < listNumber; i++) {
      similarList.appendChild(renderWizard(wizards[i]));
    }
    similar.classList.remove('hidden');
  };
})();
