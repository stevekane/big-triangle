var test = require('tape')
var BT = require('./index')

test('construction', function (t) {
  var btdefault = BT()
  var bt2d = BT(2)
  var bt3d = BT(3)
  var bt4d = BT(4)

  t.same(btdefault, [
    -4, -4, 
    0, 4, 
    4, -4 
  ])
  t.same(bt2d, [ 
    -4, -4, 
    0, 4, 
    4, -4 
  ])
  t.same(bt3d, [ 
    -4, -4, 0, 
    0, 4, 0, 
    4, -4, 0 
  ])
  t.same(bt4d, [ 
    -4, -4, 0, 1,
    0, 4, 0, 1,
    4, -4, 0, 1
  ])
  t.end()
})
