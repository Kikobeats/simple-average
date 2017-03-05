'use strict'

function simpleAverage () {
  const that = {
    avg: 0.0,
    count: 0
  }

  that.reset = function reset () {
    that.avg = 0.0
    that.count = 0
    return that
  }

  that.add = function add (samples) {
    [].concat(samples).forEach(function (sample) {
      ++that.count
      that.avg += (sample - that.avg) / that.count
    })
    return that
  }

  return that
}

module.exports = simpleAverage
