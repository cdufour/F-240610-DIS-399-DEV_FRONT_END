const http = require('http'); // built-in module
const fs = require('fs'); // build-in module
const soap = require('soap');

// Define the service implementation
const service = {
  DemoService: {
    DemoPort: {
      post_message: function(args, callback) {

        // Return the response
        const result = { returns_resultcode: 200 };
        callback(null, result);
      }
    }
  }
};

// Create the SOAP server
const xml = fs.readFileSync('demo.wsdl', 'utf8');

//http server example
var server = http.createServer((req, res) => {
    res.end("404: Not Found: " + req.url);
});

const port = 8000;
server.listen(port);

soap.listen(server, '/demo', service, xml, () => {
    console.log('SOAP server running at http://localhost:'+ port +'/demo?wsdl');
});