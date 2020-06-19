'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP_TOP = 120;
  var GAP = 25;
  var FONT_GAP = 20;
  var barHeight = CLOUD_HEIGHT - GAP_TOP;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + 30);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 50);

    var maxTime = window.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {

      var fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(235, 99%, ' + window.random.int(10, 95) + '%)';
      ctx.fillStyle = fillStyle;

      ctx.fillRect(CLOUD_X + GAP * 2 + (GAP * 2 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, ((barHeight * times[i]) / maxTime) * -1);

      ctx.fillStyle = '#000';

      ctx.fillText(players[i], CLOUD_X + GAP * 2 + (GAP * 2 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * 2 + (GAP * 2 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - (barHeight * times[i]) / maxTime);
    }
  };
})();
