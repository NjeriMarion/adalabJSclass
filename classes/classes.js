class Person{
    constructor(name, age, height){
        this.age = age
        this.name = name
        this.height = height 
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

let adam = new Person("Adam", 45, "56ft");
console.log(adam.name);
adam.greet();
console.log(adam);

class Child extends Person{
    constructor (name, age, height,brains){
        super(name, age, height);
        this.brains = brains;
    }
}
let firstChild = new Child("mary", 1, "2ft", "smart");
console.log(firstChild);

// sister can unherit from either person or child 
class Sister extends Person{
    constructor (name, age, height,brains){
        super(name, age, height);
        this.brains = brains;
        this.height = "7ft"
    }
}
let sister = new Sister("maria", 1, "2ft", "Average");
console.log(sister);