console.log('js');

$(document).ready(onReady);
function onReady(){
    console.log('jq');

$('#addButton').on('click', function(){
    addNewTask();
});//end addButton on click

function addNewTask(){

    let newTask = {
        task: $('#taskIn').val(),
        date_added: $('#dateAddedIn').val(),
        due_by: $('#dueByIn').val(),
        completed: $('#completedIn').val()
    }//end newTask object
    console.log('worked:', newTask);

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).done(function(response){
        console.log('added newTask:', response);
        getTasks();
    }).fail(function(response){
        console.log('didnt work');
    });

}//end addNewTask function

// getTasks();
// function getTasks(){

//     $.ajax({
//         type: 'GET',
//         url: '/tasks'
//     }).done(function(response){
//         console.log('success:', response);
//         putOnDom(tasksArray);
//     }).fail(function(response){
//         console.log('failure:', response);
//     });

// }//end getTasks function

// function putOnDom(tasksArray){
// for(let i=0; i<tasksArray.length; i++){
// $('#outputTasks').append(TasksArray[i].task);
// $('#outputTasks').append(TasksArray[i].date_added);
// $('#outputTasks').append(TasksArray[i].due_by);
// $('#outputTasks').append(TasksArray[i].completed);
// }//end tasksArray for loop
// }//end putOnDom function





















}//end onReady function