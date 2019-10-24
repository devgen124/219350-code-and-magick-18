'use strict';

(function () {
  var shop = document.querySelector('.setup-artifacts-shop');
  var inventoryItem = shop.querySelector('img');
  var inventory = document.querySelector('.setup-artifacts');
  var targetCells = inventory.querySelectorAll('.setup-artifacts-cell');

  var onDragStartCatchItem = function (evt) {
    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.setData('text/plain', evt.target.src);
  };

  var onDragOverLighterCell = function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'blue';
    evt.dataTransfer.effectAllowed = 'move';
  };

  var onDragLeaveDefaultCell = function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = evt.target.parentElement.style.backgroundColor;
    evt.dataTransfer.effectAllowed = 'move';
  };

  var onDropAddItem = function (evt) {
    evt.preventDefault();
    var item = document.createElement('img');
    item.src = evt.dataTransfer.getData('text/plain');
    item.width = evt.target.offsetWidth;
    evt.target.appendChild(item);
    evt.target.style.backgroundColor = evt.target.parentElement.style.backgroundColor;
  };

  inventoryItem.addEventListener('dragstart', onDragStartCatchItem);

  for (var i = 0; i < targetCells.length; i++) {
    targetCells[i].addEventListener('dragover', onDragOverLighterCell);
    targetCells[i].addEventListener('dragleave', onDragLeaveDefaultCell);
    targetCells[i].addEventListener('drop', onDropAddItem);
  }
})();
