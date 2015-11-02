should = require 'should'
Avg = require('./../lib/Average')

describe 'simple average ::', ->

  it 'new', ->
    @avg = new Avg()
    @avg._count.should.be.equal 0
    @avg._avg.should.be.equal 0

  it 'add', ->
    @avg.add 2
    @avg._count.should.be.equal 1
    @avg._avg.should.be.equal 2

  it 'resume', ->
    @avg.resume().should.be.equal 2
