module.exports = function(app, db) {
  console.log(db.collection);
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    console.log(note);
    /*db.collection('insert').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });*/
    console.log(db.collection);
    res.send("hello");
  });
};