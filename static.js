const fs = require('fs');

const serverStaticFile = (res, path, contentType, responseCode) => {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 -Internal Error');
    } else {
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

module.exports = serverStaticFile;
