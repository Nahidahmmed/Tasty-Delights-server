const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req,res) =>{
    res.send('assignment-10 is running')
});

app.get('/chefs', (req,res) =>{
    res.send(chefs);
})

app.get('/chefs/:id', (req,res) =>{
    const id = req.params.id;
    const selectedChef = chefs.find(c => c.id == id);
    res.send(selectedChef);
})

app.listen(port,()=>{
    console.log(`assignment api is running on ${port}`);
})