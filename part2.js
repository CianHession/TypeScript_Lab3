//A
var tasks = [];
//Part B
function addTask(task) {
    //push - add to Array
    tasks.push(task);
    console.log("_______________ New Task Added _________________");
    console.log("Task " + task + " inserted to list");
    return tasks.length;
}
//Part C
function listAllTasks() {
    console.log("START: All items in Array:");
    tasks.forEach(function (tasks) {
        console.log(tasks);
    });
    console.log("END: All items in Array:");
}
//Part D
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("_____________Task Removed_______________________");
        console.log("Task " + task + " removed from list.");
    }
    return tasks.length;
}
var x = addTask('Wake up');
console.log("Number of item in list: " + x);
addTask('Sleep');
listAllTasks();
deleteTask('Sleep');
