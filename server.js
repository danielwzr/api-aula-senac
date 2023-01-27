const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielwzr:mongodbteste@studyjs.1t8jyxe.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
})


MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err);
    db = client.db('studyjs');

    app.listen(port, () => {
        console.log('Server xd')
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