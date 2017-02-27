module.exports = BigTriangle

function bound ( min, max, v ) {
  return v < min
    ? min
    : v > max 
      ? max 
      : v
}

function BigTriangle ( dimensionality ) {
  const MIN_DIMENSION = 2
  const MAX_DIMENSION = 4
  const dim = bound(MIN_DIMENSION, MAX_DIMENSION, dimensionality)
  const Ctor = Float32Array != null ? Float32Array : Array
  const out = new Ctor(3 * dim)

  out[0] = -4
  out[1] = -4
  out[dim] = 0
  out[dim+1] = 4
  out[dim * 2] = 4
  out[dim * 2 + 1] = -4

  if ( dim === 4 ) {
    out[dim * 0 + 3] = 1 
    out[dim * 1 + 3] = 1 
    out[dim * 2 + 3] = 1 
  }
  return out 
}
