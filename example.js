'use strict';

var rounded = 10;
var _ = require('lodash');
var Avg = require('./index');
var avg = new Avg({
  round: rounded
});

var randomIntFromInterval = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var percentage = function(parcial, total) {
  return Math.floor((parcial / total) * 100) + '%';
};

var counter = 0;
var totalExact = 0;
var totalArr = [];

setInterval(function() {
  var arr = _.range(1, randomIntFromInterval(1, 1000));
  // var arr = [1, 2, 3, 4];

  avg.add(arr);

  totalArr = arr.concat(totalArr);

  console.log('\n[ Sample', ++counter, ']\n');
  var avgResume = avg.resume();

  console.log('nº of samples:', totalArr.length);
  console.log('avg resume:', avgResume);

  var exactAvg = (_.sum(totalArr) / totalArr.length).toFixed(rounded);
  console.log('exact average:', exactAvg);

  if (avgResume.toString() === exactAvg.toString()) ++totalExact;
  console.log('success rate:', percentage(totalExact, counter));

}, 1000);
