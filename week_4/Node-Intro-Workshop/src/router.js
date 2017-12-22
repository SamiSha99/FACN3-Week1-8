// const router = (request, response) => {
//   const url = request.url;

//   if (url === '/') {
//     response.writeHead(200)
//     response.end('Hello this is home')
//   } else if (url === '/facn3') {
//     response.end('This is facn3');
//   } else {
//     response.writeHead(404);
//     response.end('404 NOT FOUND');
//   }
//
// }




const router = (request, response) => {
  console.log('hello')
  const url = request.url;
  if (url === '/') {
 handlehomeroute(request, response);
  } else if (url.indexOf('/public/') !== -1) {
    handlepublic(request, response, url);
  } else {
    response.writeHead(500, {
      'Content-Type': 'text/html'
    });
    response.end('<h1>Sorry there was an error on our end </h1>')
  }
}



module.exports = router;
