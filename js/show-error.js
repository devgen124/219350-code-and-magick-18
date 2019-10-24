'use strict';

(function () {
  window.showError = function (errorMessage) {
    var message = document.createElement('div');
    message.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    message.style.position = 'fixed';
    message.style.left = 0;
    message.style.right = 0;
    message.style.fontSize = '26px';

    message.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', message);
  };
})();
