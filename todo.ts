import {todoInterface} from './todointerface';

class Todo implements todoInterface{

    constructor(){}

    tasks: Array<string> =[];

    addTask(task:string):number{
        //push - add to Array
        this.tasks.push(task);
        console.log("_______________ New Task Added _________________");
        console.log("Task "+task+" inserted to list");
        return this.tasks.length;
    }

    listAllItems():void{
            console.log("START: All items in Array:");
            this.tasks.forEach(function(task){
                console.log(task);
            })
            console.log("END: All items in Array:");
        }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
        this.tasks.splice(index,1);
        console.log("_____________Task Removed_______________________");
        console.log("Task "+ task+" removed from list.");
        }
        return this.tasks.length;
    }

}

let myToDos = new Todo();
myToDos.addTask('eat');
myToDos.addTask('sleep');

myToDos.listAllItems();

myToDos.deleteTask('sleep');