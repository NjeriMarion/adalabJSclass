// creatingan object

let person ={
    name: "Maria",
    age : 23,
    height : "5.5 ft",
    friend: {
        name: "Mwangi",
        age : 24
    } 
}
console.log(person.friend.name)
let student = new Object();
student.name = "Mary"
console.log((student))
person.age = 25
console.log(person.age)
person.school = "Akirachix"
console.log({person})


let person2 = Object.assign(person);
console.log({person2});

let keys = Object.keys(person)
console.log(keys)

let values = Object.values(person)
console.log(values)