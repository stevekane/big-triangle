# Big Triangle

This module is useful to get vertices for a "big triangle".  This is typically used for full-screen fragment shaders.
You can pass the number of dimensions ( 2 - 4 ) that you wish to be outputted ( different use-cases may prefer different
dimensionality ).

# Example useage

```javascript
import BigTriangle from 'big-triangle'

const bt = BigTriangle(2)

// output is a array of 2d vertices for your big triangle
```
