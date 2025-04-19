const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');  

const app = express();
const PORT = 3000;

app.use(morgan('combined'));


app.get("/", (req,res) =>{

    res.send('Hello Node.js by weeraphat!!');

})

app.listen(PORT, ()=>{
    console.log("Listening On Port %d " + chalk.green (" : "+ PORT));
})