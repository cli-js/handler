var namespace = require('tessed').namespace
var handler = require('./index')

var test = namespace('handler')

test('handler()', function (t) {

  t.deepEqual(handler(), {
    type: 'handler',
    value: []
  }, 'no inputs')

  var fn1 = function () {}
  var fn2 = function () {}

  t.deepEqual(handler(fn1, fn2), {
    type: 'handler',
    value: [fn1, fn2]
  }, 'multiple inputs')
})
