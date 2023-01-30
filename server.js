const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv/config');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/cursos', (req, res) => {
    db.collection('cursos').find().toArray((err,docs)=>{
        if (err) return console.log(err);
        res.send(docs)
    })
})

MongoClient.connect(process.env.DB_URI, (err, client) => {
    if (err) return console.log(err);
    db = client.db('studyjs');

    app.listen(port, () => {
        console.log('Server on')
    })

    app.post('/', (req, res) => {
        db.collection('alunos').insertOne(req.body, (err, result) => {
            if (err) return console.log(err);
            console.log('Salvo no bd nome ' + req.body.email + ".");
        });
        res.redirect("/")
    })
    //const collection = client.db("test").collection("devices");
    // perform actions on the collection object
});