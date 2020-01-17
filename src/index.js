import  { SuperList, Queue, Stack} from "./utills.js";

console.log("Starting the script");

let animals = ["cat", "dog", "rat", "horse"];
let arr = [1, 5, 8];
let colors = ["red", "green", "yellow", "blue"];
let list = new SuperList(arr);
let queue = new Queue(colors);
let stack = new Stack(animals);

list.log();
list.removeFromFront();
list.log();
list.addToFront("I should be at the front");
list.log();

console.log("------------Queue starts here-------------");

queue.log();
queue.add("black ADDED");
queue.log();
queue.add("grey ADDED");
queue.log();
queue.remove();
queue.log("The first element should be removed");

console.log("------------Stack starts here-------------");

stack.log();
stack.add("fish ADDED");
stack.log();
stack.remove();
stack.log("The last element should be removed");
stack.remove();
stack.log("The last element should be removed");
stack.add("bird ADDED");
stack.log();