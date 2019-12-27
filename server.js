const express = require('express');
const path = require('path');
const app = express();
const serveIndex = require('serve-index');

app.use('/', express.static(path.join(__dirname, 'shaders')), serveIndex(path.join(__dirname, 'shaders'), {'icons': true}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
