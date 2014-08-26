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

  $('#create').on('click', function() {
    var newTodo = "<li>" + $('input').val() +  x + "</li>";
    $(list).append(newTodo).addClass('wide-input float-left');
    $('input').val('');
    $(flash).show();
    setTimeout("$('.flash').fadeOut();", 5000);
  });

  $('.flash button').on('click', function(){
    $('.flash').hide();
  });

  $('li button').on('click', function() {
    $(parent).remove();
    alert("you clicked the damn button!");
  });


});
