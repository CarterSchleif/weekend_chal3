const express = require( 'express' );
const app = express();
const path = require( 'path' );
const pool = require('./modules/pool');
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let taskArray = [];

app.post('/tasks', function(request, response){
    let newTask = request.body.newTask;
    console.log('it worked!!', newTask);
    taskArray.push(newTask);
});
app.get('/tasks', function(request, response){
    console.log('tasks:', tasksArray);
    response.send(tasksArray);
});






app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('server running on: ', port);
});