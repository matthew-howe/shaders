## Notes

#### Transforming the vertex

* modelMatrix: moves the vertex from local to world space.
* viewMatrix: moves the vertex from world space to camera view.
* projectionMatrix: moves the vertex to clip space screen coordinates.
* modelViewMatrix : combines the result of the modelMatrix and the viewMatrix.



#### Shader Notes

* You need a vertex shader and a fragment shader and each of these must have a main function.
* The vertex shader main function must set the value of gl_position and it uses the projectionMatrix, the modelViewMatrix and the position of the vertex to do this.
* The fragment shader main function must set the value of gl_FragColor to a rgba format value.
* Each channel of a rgba format color takes a value between 0.0 and 1.0

#### Uniforms

* Pass values from the control program to our shaders.

  #### 