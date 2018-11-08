const db = require('../models');


module.exports = function(app) {

  app.get('/api/product', function(req, res) {
    db.Product.findAll({}).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.post('/api/product', function(req, res){
    db.Product.create(req.body)
    .then(function(rows){
       res.json(rows);
     })
    })
 


};

