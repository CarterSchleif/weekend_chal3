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
            displayTasks(response);
            //putOnDom(response);
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








function displayTasks(tasks) {
    let $tableBody = $('#outputTasks');
    $tableBody.empty();
    for(let row=0; row<tasks.length; row++) {
      let keys = Object.keys(tasks[row]);
    
      let $tr = $('<tr>');
      for(let col=0; col<keys.length + 2; col++) {
          //$tr.append($('<td>').attr('id', keys[col]).text(koalas[row][keys[col]]), $('<button>').data('id', koalas[row].id).addClass('transfer-btn').text('Ready for Transfer')[0]);
          if(col === keys.length){
            $tr.append($('<td>').addClass(keys[col]).append($('<button>').data('id', tasks[row].id).text('Delete').addClass('deleteBtn')));
          } else if (col === keys.length +1) {
            $tr.append($('<td>').addClass(keys[col]).append($('<button>').data('id', tasks[row].id).text('Completed Task').addClass('completeBtn')));
          } else {
            $tr.append($('<td>').addClass(keys[col]).text(tasks[row][keys[col]])[0]);
          }
      } // end col loop
      
      
      $tableBody.append($tr);
      
    } // end row loop
  
  } // end displayKoalas







// function putOnDom(tasks){
// for(let i=0; i<tasks.length; i++){
// $('#outputTasks').append( '<tr>' + '<td>' + tasks[i].task + '</td>');
// $('#outputTasks').append('<td>' + tasks[i].date_added + '</td>');
// $('#outputTasks').append('<td>' + tasks[i].due_by + '</td>');
// $('#outputTasks').append('<td>' + tasks[i].completed + '</td>' + '</tr>');
// }//end tasksArray for loop
// }//end putOnDom function

function clearInputs(){
    $('#taskIn').val('');
    $('#dateAddedIn').val('');
    $('#dueByIn').val('');
    $('#completedIn').val('');
    $('#outputTasks').empty();
}//end clearInputs function



















}//end onReady function