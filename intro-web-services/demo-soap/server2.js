const http = require('http'); // built-in module
const fs = require('fs'); // build-in module
const soap = require('soap');

// Define the service implementation
var myService = {
  MyService: {
    MyPort: {
      MyFunction: (args) => {
        // implement yout logic here
        const { name } = args;
        const output = "Coucou " + name + "!";
        return { output };
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

soap.listen(server, '/demo', myService, xml, () => {
    console.log('SOAP server running at http://localhost:'+ port +'/demo?wsdl');
});

/*
*** Example via POSTMAN ***
*** Request Body ***
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header/>
  <soap:Body>
    <MyFunction xmlns="http://ws/">
        <name>Chris</name>
    </MyFunction>
  </soap:Body>
</soap:Envelope>

*** Response Body ***
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://www.examples.com/wsdl/MyService.wsdl">
    <soap:Body>
        <tns:MyFunctionResponse>
            <tns:output>Coucou Chris!</tns:output>
        </tns:MyFunctionResponse>
    </soap:Body>
</soap:Envelope>
*/