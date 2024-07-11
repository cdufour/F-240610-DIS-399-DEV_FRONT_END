const http = require('http'); // built-in module
const fs = require('fs'); // build-in module
const soap = require('soap');

// Define the service implementation
var myService = {
  MyService: {
    MyPort: {
      MyFunction: function (args) {
        return {result: args.name};
      }
    }
  }
};

// Create the SOAP server
const xml = fs.readFileSync('demo.wsdl', 'utf8');

//http server example
var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.end("404: Not Found: " + req.url);
});

const port = 8000;
server.listen(port);

soap.listen(server, '/demo', myService, xml, () => {
    console.log('SOAP server running at http://localhost:'+ port +'/demo?wsdl');
});