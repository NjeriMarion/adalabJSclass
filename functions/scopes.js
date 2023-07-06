
let a = 20; // global scope variable

add(20)
function add(b){
    console.log(a+b)
    let fruit = "apple" ;
    console.log(fruit) ; //local scope variable
}
add(50)

function greet(){
    let hello = "Hi"
    function talk(){
        let c = "Hello there"
        console.log(`${hello}, ${c}`);
    }
    talk();
}
greet();