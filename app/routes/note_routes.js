module.exports = function(app, db) {
  //console.log("db collection", db.collection);
  app.post('/notes', (req, res) => {
    console.log("reques", req);
    const note = { text: req.body.body, title: req.body.title };
    console.log(note);
    //console.log("db collection", db.collection);
    db.collection("todos").insertOne(note,(err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        //res.send(result.ops[0]);
      }
    });
    /*db.collection('todos').insertOne(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });*/
    //console.log("db in post request ", db.collection);
    res.send("hello");
  });
};