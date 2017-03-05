'use strict'

const should = require('should')
const simpleAverage = require('..')

describe('simple average', function () {
  it('new', function () {
    const aggregator = simpleAverage()
    should(aggregator.count).be.equal(0)
    should(aggregator.avg).be.equal(0)
  })

  it('add', function () {
    const aggregator = simpleAverage().add(2)
    should(aggregator.count).be.equal(1)
    should(aggregator.avg).be.equal(2)
  })

  it('reset', function () {
    const aggregator = simpleAverage().add(2).reset()
    should(aggregator.count).be.equal(0)
    should(aggregator.avg).be.equal(0.0)
  })
})
