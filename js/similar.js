'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup-wizard');
  var chosenCoatColor = wizardSetup.querySelector('.wizard-coat').style.fill;
  var chosenEyesColor = wizardSetup.querySelector('.wizard-eyes').style.fill;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === chosenCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === chosenEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    var sortedWizards = wizards
      .slice()
      .sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      });
    window.render(sortedWizards);
  };

  window.wizard = {
    onEyesChange: window.utils.debounce(function (color) {
      chosenEyesColor = color;
      updateWizards();
    }),
    onCoatChange: window.utils.debounce(function (color) {
      chosenCoatColor = color;
      updateWizards();
    })
  };

  var onSuccessRenderWizards = function (data) {
    wizards = data;
    updateWizards();
  };
  window.backend.load(onSuccessRenderWizards, window.showError);
})();
