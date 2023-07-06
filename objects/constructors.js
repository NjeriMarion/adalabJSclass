function Person(name, age, height){
    this.name = name
    this.age = age
    this.height = height
    this.greet = function(){
        console.log(`Hello ${this.name}`);
    }
}
let maria = new Person("Maria", 23, "6ft");
maria.weight = 68;

console.log(maria);
maria.greet()

let mary = new Person("Mary", 20, "5ft");
console.log(mary);
mary.greet()

Person.prototype.yearOfBirth = function(){
    let year = new Date().getFullYear();

    console.log(year- this.age)
}

Person.prototype.race = "black";
console.log(maria.race)
maria.yearOfBirth()