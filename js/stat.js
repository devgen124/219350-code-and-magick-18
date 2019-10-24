'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var LEFT_GAP = 50;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function (player) {
  var red = 'rgba(255, 0, 0, 1)';
  var blueRandom = 'rgba(0, 0, 255, ' + Math.random() + ')';

  return (player === 'Вы') ? red : blueRandom;
};

var renderCloud = function (ctx, x, y, color, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderHistogram = function (ctx, names, times) {
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var baseX = CLOUD_X + LEFT_GAP;
  var nameY = CLOUD_Y + CLOUD_HEIGHT - GAP;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barY = nameY - BAR_HEIGHT - FONT_GAP;
    var currentHeight = BAR_HEIGHT * times[i] / maxTime;
    barY += BAR_HEIGHT - currentHeight;
    var numberY = barY - GAP;

    ctx.fillStyle = getColor(names[i]);
    ctx.fillRect(baseX + (BAR_WIDTH + BAR_GAP) * i, barY, BAR_WIDTH, currentHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), baseX + (BAR_WIDTH + BAR_GAP) * i, numberY);
    ctx.fillText(names[i], baseX + (BAR_WIDTH + BAR_GAP) * i, nameY);
  }
};

window.renderStatistics = function (ctx, names, times) {
  var cloudColor = '#fff';
  var shadowColor = 'rgba(0, 0, 0, 0.7)';

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, shadowColor, CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var titleX = CLOUD_X + LEFT_GAP;
  var titleY = CLOUD_Y + FONT_GAP + GAP;

  ctx.fillText('Ура вы победили!', titleX, titleY);
  ctx.fillText('Список результатов:', titleX, titleY + FONT_GAP + GAP);

  renderHistogram(ctx, names, times);
};
