## Shaders

A gallery of my progression learning shaders.

#### Steps for running locally
```shell
git clone https://github.com/matthew-howe/shaders mh-shaders
cd mh-shaders
npm install
npm start
```



## color changing over time

![color changing image](\img\1.gif)

Uses the elapsed time to paint different colors.

```glsl
void main (void)
{
  float delta = (sin(u_time)+1.0)/2.0;
  vec3 color = mix(u_color_a, u_color_b, delta);
  gl_FragColor = vec4(color, 1.0); 
}
```

