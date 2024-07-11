const express = require('express');
const app = express();
const port = 3200;
const cors = require('cors');

// middlewares
app.use(cors()); // automatically adds cors headers to responses

// routes (endpoints)
app.get('/', (req, res) => {
    //res.send("ok");
    res.json({ message: "hello" });
})

app.get('/password', (req, res) => {
   let password = randomPassword();
   res.json({ password });
})

app.listen(port, () => {
    console.log('Server running on ' + port + '...');
    console.log('http://localhost:' + port);
})

function randomPassword() {
    return Math.random().toString(36).slice(2) +
        Math.random().toString(36).toUpperCase().slice(2);
}