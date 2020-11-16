const http = require('http');
const serverStaticFile = require('./static');


http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
      serverStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serverStaticFile(res, '/public/about.html', 'text/html');
      debugger;
      break;
    case '/img/bull.png':
      serverStaticFile(res, '/public/img/bull.png', 'image/png');
      break;
    default:
      serverStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
}).listen(8081);

console.log('Server is running on localhost:8081; press Ctrl-C to stop it...');
