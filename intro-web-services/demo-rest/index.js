const express = require('express');
const app = express();
const port = 3200;
const cors = require('cors');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data/chinook.db'
    }
});
const bcrypt = require('bcrypt');

// middlewares
app.use(cors()); // automatically adds cors headers to responses
app.use(express.json()); // unserialize json body of request

// routes (endpoints)
app.get('/', (req, res) => {
    //res.send("ok");
    res.json({ message: "hello" });
})

app.get('/password', (req, res) => {
   let password = randomPassword();
   res.json({ password });
})

// API - artist
app.get('/artist', (req, res) => {
    // SELECT Name FROM artists
    knex.select('Name').from('artists')
        .then(artists => {
            res.json(artists);
        })
})

app.get('/artist/:id', (req, res) => {
    knex
        .select('*')
        .from('artists')
        .where('ArtistId', req.params.id)
        .then(artist => res.json(artist))
})

app.post('/artist', (req, res) => {
    const { Name } = req.body;
    knex.insert({Name}).into('artists')
        .then(newArtist => {
            res.json({ArtistId: newArtist[0]});
        })
})

app.patch('/artist/:id', async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    const result = await knex('artists')
        .where({ArtistId: id})
        .update({Name: newName});

    res.json({result});
})

app.delete('/artist/:id', async (req, res) => {
    const { id } = req.params;
    const result = await knex('artists')
        .where({ArtistId: id})
        .del();
    res.json({result});
})

// Secu
app.post('/user', (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 10, async (err, hash) => {
        const result = await knex('users').insert({email, password:hash});
        res.json({result});
    })
})

app.get('/user', async (req, res) => {
    const users = await knex('users').select('*');
    res.json(users);
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await knex('users')
        .where({email}).select('id', 'password');

    if (result.length > 0) {
        const userId = result[0].id;
        const userPassHash = result[0].password;
        bcrypt.compare(password, userPassHash, (err, compareResult) => {
            if (compareResult) {
                // identical passwords
                res.json({login: true});

                // Suggestion: generate a client token (jwt)
                // and send it to client
            } else {
                res.json({login: false});
            }
        })
    } else {
        res.json({login: false});
    }
})

app.listen(port, () => {
    console.log('Server running on ' + port + '...');
    console.log('http://localhost:' + port);
})

function randomPassword() {
    return Math.random().toString(36).slice(2) +
        Math.random().toString(36).toUpperCase().slice(2);
}