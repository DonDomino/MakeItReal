const fs = require('fs');
const UglifyJS = require("uglify-es");
const sass = require('node-sass');

// Copy index.html
fs.copyFile('index.html', 'dist/index.html', (err) => {
  if(err) throw err;
  console.log('Archivo copiado');
});

// Uglify
fs.readFile('script.js', 'utf8', (err, data) => {
  if(err) throw err;
  const result = UglifyJS.minify(data, {}); 
  if (result.error) throw result.error;
  fs.writeFile('dist/script.js', result.code, err => {
    if(err) throw err;
    console.log('Archivo minificado');
  });
});

// sass to css
sass.render({
  file: 'style.scss',
  outputStyle: 'compressed'
}, (err, result) => {
    if(err) throw err;  
    fs.writeFile('dist/style.css', result.css, err => {
      if(err) throw err;
      console.log('Archivo convertido');
    });
});