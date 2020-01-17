console.log("Utills starting here");


export class SuperList {
   
    constructor(arr){
        // always use "this" 
        this.arr = arr;
    };

    log(){
        console.log(this.arr);
    }

    removeFromFront(){
        this.arr.shift();
    }

    addToFront(elem){
        this.arr.unshift(elem);
    }

}

export class Queue {
   
    constructor(arr){
        // always use "this" 
        this.arr = arr;
    };

    log(msg){
        console.log((msg === undefined ? "" : msg + ": ") + this.arr);
    }
    add(elem){
        this.arr.push(elem);
    }
    remove(){
        this.arr.shift();
    }
}


export class Stack {
   
    constructor(arr){
        // always use "this" 
        this.arr = arr;
    };

    log(msg){
        console.log((msg === undefined ? "" : msg + ": ") + this.arr);
    }
    add(elem){
        this.arr.push(elem);
    }
    remove(){
        this.arr.pop();
    }
}