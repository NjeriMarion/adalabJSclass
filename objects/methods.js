let student = {
    name: "Ann",
    age: 20,
    introduce: function(){
        console.log("hello ")
        console.log(`hello my name is ${this.name}`) // always use this
        console.log(`hello I am ${student.name}`) // for lazy students
    }
}
student.introduce();

student.hobby = ()=>{
    console.log("I love swimming")
}
console.log({student})

student.hobby();
delete student.age;

console.log({student})