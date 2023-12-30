const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '../src/.env' });


//Express-sovellus ja portin määritys
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.post('/register', async (req, res) => {
    const { firstName, lastName, username, password } = req.body;

    //Salataan salasana brcyptillä
    const hashedPw = await bcrypt.hash(password, 10);

    //Luodaan tietokantayhteys
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    //SQL-kysely
    const sql = 'INSERT INTO customer (first_name, last_name, username, pw) VALUES (?,?,?,?)';
    const values = [firstName, lastName, username, hashedPw];

    connection.query(sql, values, (error, results) => {
        if(error) {
            console.error('Error registering user', error);
            res.status(500).send('Server error');
            return;
        }

        console.log('User registered successfully', results);
        res.status(200).send('User registered successfully');
    });

    //Suljetaan yhteys
    connection.end();

});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    //Luodaan tietokantayhteys
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    //SQL-kysely
    const sql = 'SELECT * FROM customer WHERE username = ?';
    const values = [username];

    connection.query(sql, values, async (error, results) => {
        if (error) {
            console.error('Error during login', error);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {

            //Tarkistetaan salasana
            const isValidPw = await bcrypt.compare(password, results[0].pw)

            if(isValidPw) {
                console.log('User logged in');
                res.status(200).send('User logged in');
            } else {
                console.log('Invalid username or password');
                res.status(401).send('Invalid username or password');
            }
            
        } else {
            console.log('Invalid username or password');
            res.status(401).send('Invalid username or password');
        }
    });

    //Suljetaan tietokantayhteys
    connection.end();
});

//Kuunnellaan porttia ja tulostetaan viesti käynnistyessä
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});