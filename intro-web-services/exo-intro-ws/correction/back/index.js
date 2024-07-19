const express = require('express');
const app = express();
const port = 3300;
const cors = require('cors');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data/chinook.db'
    },
    useNullAsDefault: true
});

// middlewares
app.use(cors()); // automatically adds cors headers to responses
app.use(express.json()); // unserialize json body of request


// endpoints
app.get('/genre', async (req, res) => {
    const genres = await knex('genres').select('*');
    res.json(genres);
})

app.post('/genre', async (req, res) => {
    const { name } = req.body;

    const result = await knex('genres').insert({Name: name});
    res.json({genreId: result[0]});
})

app.listen(port, () => {
    console.log('Server running on ' + port + '...');
    console.log('http://localhost:' + port);
})
