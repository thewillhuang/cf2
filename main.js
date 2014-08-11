$(function(){
  console.log("ready");

  var addTodo = function(e) {
    var newTodo = $('<div class="todo">');
    newTodo.html($('#todo').val());

    e.preventDefault();

    $('#todo-list').append(newTodo);
    $('#todo').val('');
  };

  var removeTodo = function() {
    $(this).remove();
  };

  $('#todo-form').on('submit', addTodo);
  $('#todo-list').on('click', 'div', removeTodo);
});
