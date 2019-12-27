## Shaders

A gallery of my progression learning shaders.

## Steps for running locally

```shell
git clone https://github.com/matthew-howe/shaders mh-shaders
cd mh-shaders
npm install
npm start
```

Open localhost:3000 in your browser to view the shader directory.

## Color changing over time

![color changing image](img/1.gif)

Uses the elapsed time to paint different colors.

##### Fragment Shader

```glsl
void main (void)
{
  float delta = (sin(u_time)+1.0)/2.0;
  vec3 color = mix(u_color_a, u_color_b, delta);
  gl_FragColor = vec4(color, 1.0); 
}
```

