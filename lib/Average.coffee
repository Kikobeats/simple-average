'use strict'

prettyMs = require 'pretty-ms'

module.exports = class Average

  constructor: (options = null) ->
    @_options = options

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
    return @_avg unless @_options
    prettyMs result, @_options
