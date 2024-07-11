function randomPassword() {
    return Math.random().toString(36).slice(2) +
        Math.random().toString(36).toUpperCase().slice(2);
}

//console.log(randomPassword());

// const knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//         filename: './data/chinook.db'
//     }
// });

// knex.select('*').from('users')
//     .then(res => {
//         console.log(res)
//     })

const bcrypt = require('bcrypt');
const password = "C__o48-!mpôhbbggvsd99";
bcrypt.hash(password, 10, (err, hash) => {
    console.log(hash)
})