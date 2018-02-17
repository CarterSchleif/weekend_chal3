console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jq');

    getTasks();

    function getTasks(){
    
        $.ajax({
            type: 'GET',
            url: '/tasks'
        }).done(function(response){
            console.log('success:', response);
            putOnDom(response);
        }).fail(function(response){
            console.log('failure:', response);
        });
    
    }//end getTasks function

$('#addButton').on('click', function(){
    addNewTask();
    clearInputs();
});//end addButton on click

function addNewTask(){

    let taskObject = {
        task: $('#taskIn').val(),
        date_added: $('#dateAddedIn').val(),
        due_by: $('#dueByIn').val(),
        completed: $('#completedIn').val()
    }//end newTask object
    

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskObject
    }).done(function(response){
        console.log('added taskObject:', taskObject);
        getTasks();
    }).fail(function(response){
        console.log('didnt work');
    });

}//end addNewTask function



function putOnDom(tasks){
for(let i=0; i<tasks.length; i++){
$('#outputTasks').append(tasks[i].task);
$('#outputTasks').append(tasks[i].date_added);
$('#outputTasks').append(tasks[i].due_by);
$('#outputTasks').append(tasks[i].completed);
}//end tasksArray for loop
}//end putOnDom function

function clearInputs(){
    $('#taskIn').val('');
    $('#dateAddedIn').val('');
    $('#dueByIn').val('');
    $('#completedIn').val('');
    $('#outputTasks').empty();
}//end clearInputs function



















}//end onReady function