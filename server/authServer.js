const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config({ path: '../src/.env' });

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.post('/register', (req, res) => {
    const { firstName, lastName, username, password } = req.body;

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    const sql = 'INSERT INTO customer (first_name, last_name, username, pw) VALUES (?,?,?,?)';
    const values = [firstName, lastName, username, password];

    connection.query(sql, values, (error, results) => {
        if(error) {
            console.error('Error registering user', error);
            res.status(500).send('Server error');
            return;
        }

        console.log('User registered successfully', results);
        res.status(200).send('User registered successfully');
    });

    connection.end();

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});