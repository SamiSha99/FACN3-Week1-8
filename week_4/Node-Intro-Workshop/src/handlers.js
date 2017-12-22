const path = require('path');
const fs = require('fs');

const handlehomeroute = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    console.log('hello2')
    if (error) {
      console.log(error);
      response.writeHead(500, {
        'Content-Type': 'text/html'
      });
      response.end('<h1>Sorry there was an error on our end </h1>')
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(file);
    }
  });
}

const handlepublic = (request, response, url) => {
  const filePath = path.join(__dirname, '..', url);
  const extension = url.split('.')[1];
  const extemsopmType = {
    'html': 'text/html'
    'css': 'text/css',
    'js': 'application/javascript',
    'ico': 'image/x-icon'
  }[extension];
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, {
        'Content-Type': 'text/html'
      });
      response.end('<h1>404 NOT FOUND</h1>');
    } else {
      response.writeHead(200, {
        'Content-Type': extensionType
      });
      response.end(file);
    }
  });
module.exports = {
  handlehomeroute, handlepublic
}
}
