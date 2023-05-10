main();

function main() {
  const canvas = document.querySelector("#canvas");

  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  gl.viewport(0, 0, canvas.width, canvas.height);

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Enable depth testing
  gl.enable(gl.DEPTH_TEST);

  // Near things obscure far things
  gl.depthFunc(gl.LEQUAL);

  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
