const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({extend:true}));
app.use(express.json());

// require("./routes/html-routes.js")(app);
require('./routes/api-routes.js')(app);



db.sequelize.sync({}).then(function() {
  console.log('Database is synced!')
  app.listen(PORT, function(){
    console.log("listening on PORT " + PORT);
});
});