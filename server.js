const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/app"));

MongoClient.connect(db.url, {native_parser:true}, (err, database) => {
  if (err) return err;
  const db = database.db("nodetotosample"); 
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
});
