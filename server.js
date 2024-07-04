const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Replace with the correct password
    database: 'LibraryDB'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/add-book', (req, res) => {
    console.log('Received data:', req.body); // Log the received data
    const book = req.body;
    const sql = 'INSERT INTO Books SET ?';
    db.query(sql, book, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.send('Book added');
    });
});

app.post('/register-member', (req, res) => {
    console.log('Received data:', req.body); // Log the received data
    const member = req.body;
    const sql = 'INSERT INTO Members SET ?';
    db.query(sql, member, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.send('Member registered');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
