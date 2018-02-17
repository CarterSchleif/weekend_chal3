const express = require( 'express' );
const app = express();
const path = require( 'path' );
const pool = require('./modules/pool');
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));










app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('server running on: ', port);
});