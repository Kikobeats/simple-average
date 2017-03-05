'use strict'

const rounded = 10
const {range, size, sum} = require('lodash')
const simpleAverage = require('.')
const aggregator = simpleAverage()

function randomIntFromInterval (min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

function percentage (parcial, total) {
  return Math.floor((parcial / total) * 100) + '%'
}

var counter = 0
var totalExact = 0
var totalArr = []

setInterval(function () {
  const arr = range(1, randomIntFromInterval(1, 1000))
  aggregator.add(arr)
  totalArr = arr.concat(totalArr)

  console.log('\n[ Sample', ++counter, ']\n')
  const avg = aggregator.avg

  console.log('nº of samples:', size(totalArr))
  console.log('avg resume:', avg)

  const exactAvg = (sum(totalArr) / size(totalArr)).toFixed(rounded)
  console.log('exact average:', exactAvg)

  if (avg.toString() === exactAvg.toString()) ++totalExact
  console.log('success rate:', percentage(totalExact, counter))
}, 1000)
