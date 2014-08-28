// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  var body = $('body');

  var input = document.createElement('INPUT');
  input.setAttribute('type', 'text');
  $(input).addClass('wide-input todo-input');


  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'Create Todo';
  $(button).addClass('wide-input');
  $(button).attr('id', 'create');

  var list = document.createElement('ul');
  $(list).attr('id', 'list');
  $(list).addClass('wide-input float-left')

  var complete = document.createElement('ul');

  var flash = document.createElement('div');
  $(flash).addClass('flash wide-input');

  var x = "<button>X</button>";
  $(flash).append("<p>Todo created </p>");
  $(flash).append(x);


  body.append("<h1>Todo.ly</h1>").addClass('centered-text');
  body.append(input);
  body.append('<br/>');
  body.append(button);
  body.append('<br/>');
  body.append('<br/>');
  body.append('<hr>');
  body.append("<h1>Todo!</h1>");
  body.append(flash);
  body.append('<br/>');
  body.append(list);
  body.append("<h1>Complete!</h1>");
  body.append(complete);

  $('#create').on('click', function () {
    var todo = {todo: $('input[type=text]').val()};
    $.ajax({
      type: "POST",
      url: '/home',
      dataType: 'json',
      data: todo,
      success: function() {
        $('#list').append("<li><span>" + todo.todo + "</span>" + x + "</li>");
      }
    });
    drawTable();
    $('input').val('');
    $(flash).show();
    setTimeout("$('.flash').fadeOut();", 5000);
//    drawTable();
  });

  $('.flash button').on('click', function () {
    $('.flash').hide();
  });

var drawTable = function() {
  var promiseOfResult = $.getJSON("/home");
  var todoListTodoItem = function (todos) {
    var item = "<li><span>" + todos.todo + "</span>" + x + "</li>";

    return item;
  };

  var whatToDoWhenItSucceeds = function (jsonResponse) {
    var todoItems = jsonResponse.map(todoListTodoItem);
    $('#list').html(todoItems);
    $('li button').on('click', function () {
      $(this).parent().remove();
    });
  };

  promiseOfResult.success(whatToDoWhenItSucceeds);
};
  drawTable();

});
