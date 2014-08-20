$(document).ready(function() {

  var addItem = function(el) {
    var newTodo = $('<div class="todo">');
    newTodo.html($('#todo').val());

    el.preventDefault();

    $('#todo-list').append(newTodo);
    $('#todo').val('');
  };

  var removeItem = function() {
    $(this).remove();
  };

  $('#todo-form').on('submit', addItem);
  $('#todo-list').on('click', 'div', removeItem);

});
