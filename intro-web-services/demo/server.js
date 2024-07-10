const http = require('http'); // built-in module
const fs = require('fs'); // build-in module
const soap = require('soap');

// Define the service implementation
const service = {
  CalculatorService: {
    CalculatorPort: {
      Add: function(args, callback) {
        const intA = args.intA;
        const intB = args.intB;
 
        // Return the response
        const result = {
          AddResult: intA - intB
        };
        callback(null, result);
      }
    }
  }
};

// Create the SOAP server
const xml = fs.readFileSync('calculator.wsdl', 'utf8');

//http server example
var server = http.createServer((req, res) => {
    res.end("404: Not Found: " + req.url);
});

const port = 8000;
server.listen(port);

soap.listen(server, '/calculator', service, null, () => {
    console.log('SOAP server running at http://localhost:'+ port +'/calculator?wsdl');
});