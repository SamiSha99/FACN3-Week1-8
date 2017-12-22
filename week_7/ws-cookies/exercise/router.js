'use strict';

const { parse } = require('url');
const { readFile } = require('fs');
const path = require('path')
const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

module.exports = (req, res) => {
  switch (`${req.method} ${req.url}`) {
    case 'GET /':
      return readFile(
        path.join(__dirname, 'index.html'),
        (err, data) => {
          res.writeHead(
            200,
            {
              'Content-Type': 'text/html',
              'Content-Length': data.length
            });
          return res.end(data);
        });
      case 'POST /login':
        res.writeHead(302, { 'Set-Cookie': 'logged_in=true; HttpOnly; Max-Age=9000' ,
         Location: "/"
      });
        res.end();
      break;
      case 'POST /logout':
      res.writeHead(302, {
        'Set-Cookie': 'logged_in=false',
        Location: "/"
      });
      res.end();
      break;
      case 'GET /auth_check':
        if (req.headers.cookie && req.headers.cookie.match(/logged_in=true/)) {
          const message = 'You are authenticated!';
          res.writeHead(
            200,
            {
              'Content-Type': 'text/plain',
              'Content-Length': message.length
            }
          );
          return res.end(message);
        } else {
          const message = 'You are not authenticated... :(';
          res.writeHead(
            401,
            {
              'Content-Type': 'text/plain',
              'Content-Length': message.length
            }
          );
          return res.end(message);
        }
    default:
      res.writeHead(
        404,
        {
          'Content-Type': 'text/html',
          'Content-Length': notFoundPage.length
        }
      );
      return res.end(notFoundPage);
  }
}
