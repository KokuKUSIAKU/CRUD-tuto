var noteRoutes = require("./note_routes.js");
var homeRoutes = require("./home_routes.js");

module.exports = function(app, db){
  noteRoutes(app, db); 

  // other routes here also
}