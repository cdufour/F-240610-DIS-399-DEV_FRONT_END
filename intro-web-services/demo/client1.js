var soap = require('soap');
//var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
var url ='http://localhost:8000/calculator?wsdl';

soap.createClient(url, {}, (err, client) => {
    if (err) console.log(err);
    //console.log(client);
    var args = {intA: 2, intB: 3 };
    client.Add(args, (err, result) => {
        if (err) console.log(err);
        
        console.log(result);
    })
});