module.exports = BigTriangle

function BigTriangle ( dimensionality ) {
  switch ( dimensionality ) {
    case 4: return [ 
      -4, -4, 0, 1,
      0, 4, 0, 1,
      4, -4, 0, 1
    ]
    case 3: return [
      -4, -4, 0,
      0, 4, 0,
      4, -4, 0
    ]
    case 2:
    default: return [
      -4, -4,
      0, 4,
      4, -4
    ]
  }
}
