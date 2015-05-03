// Our module for our Angular App
var TodoApp = angular.module("TodoApp", []);

// Our first angular controller with it's scope
TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos = [];
  $scope.newTodo = {};

  $scope.addTodo = function() {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function() {
    // var index = $scope.todos.indexOf(this.todo);
    // $scope.todos.splice(index,1);
    $scope.todos.splice(this.$index, 1);
  };

  $scope.edit = function () {
    this.editing = true;
  };
  // Set a variable on our $scope
  $scope.greeting = "hello world";
  $scope.message = "My name is Andy!"
}]);