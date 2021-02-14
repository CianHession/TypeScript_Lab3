"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        //push - add to Array
        this.tasks.push(task);
        console.log("_______________ New Task Added _________________");
        console.log("Task " + task + " inserted to list");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("START: All items in Array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in Array:");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("_____________Task Removed_______________________");
            console.log("Task " + task + " removed from list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myToDos = new Todo();
myToDos.addTask('eat');
myToDos.addTask('sleep');
myToDos.listAllItems();
myToDos.deleteTask('sleep');
