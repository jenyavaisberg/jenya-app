angular.module('todoApp', ['LocalStorageModule'])
.controller('TodoListController', function(localStorageService) {
  var todoList = this;

  // todoList.todos = [
  //   {text:'learn angular', done:true},
  //   {text:'build an angular app', done:false}];

  var todosInStore = localStorageService.get('myTodos');

  todoList.todos = todosInStore || [];
  todoList.addTodo = function() {
    todoList.todos.push({text:todoList.todoText, done:false});
    localStorageService.set('myTodos', todoList.todos);
    todoList.todoText = '';
  };

  [...]
});