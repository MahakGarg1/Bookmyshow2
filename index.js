const express =require('express');
//const bodyParser=require('body-parser');
const routes= express.Router();
//const mysql = require('mysql2');
const connection  = require('./database');

const app = express();
app.use(express.json()); 
const port=8004;



app.get('/', (req, res)=>{
    res.status(200).send("Welcome to the bookmyshow app");
  });

app.listen(port, () => {
    console.log(`Server has started at ${port}`);
    // Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('Connected to MySQL database.');
})
}
);