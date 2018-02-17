const express = require( 'express' );
const app = express();
const path = require( 'path' );
const pool = require('./modules/pool');
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.post('/tasks', (request, response) => {
    const task = request.body;
    tasks.push(task);
    console.log('going to add task:', task);
    
    const sqlText = `INSERT INTO tasks (task, date_added, due_by, completed) VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText,
       [task.task, task.date_added, task.due_by, task.completed])
    .then( (result) => {
    console.log('added newTask:', result);
    response.sendStatus(201);
    })
    .catch( (error) => {
    console.log('Error adding newTask:', error);
    response.sendStatus(500);
    })
    })//end post

    app.get('/tasks', function(request, response){
        const sqlText = 'SELECT * FROM tasks';
        pool.query(sqlText)
        .then(function(result){
          console.log('get result db:', result);
          response.send(result.rows);
        })
        .catch(function(error){
          console.log('error on GET db:', error);
          response.sendStatus(500);
        })
        })//end GET DB

// app.post('/tasks', function(request, response){
//     let newTask = request.body.newTask;
//     console.log('it worked!!', newTask);
//     taskArray.push(newTask);
// });
// app.get('/tasks', function(request, response){
//     console.log('tasks:', tasksArray);
//     response.send(tasksArray);
// });






app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('server running on: ', port);
});