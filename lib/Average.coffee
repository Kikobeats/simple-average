'use strict'

module.exports = class Average

  constructor: (params = {}) ->
    @_round = params.round
    @_unit = params.unit or ''
    do @reset

  reset: ->
    @_avg = 0.0
    @_count = 0
    this

  add: ->
    samples = if Array.isArray arguments[0] then arguments[0] else arguments
    for sample in samples
      ++@_count
      @_avg += (sample - @_avg) / @_count
    this

  count: -> @_count

  resume: ->
    avg = if @round()? then @_avg.toFixed(@round()) else @_avg
    "#{avg}#{@_unit}"

  round: (value) ->
    return @_round if (arguments.length is 0)
    @_round = value
    this

  unit: (value) ->
    return @_unit if (arguments.length is 0)
    @_unit = value
    this
