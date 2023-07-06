let add = () =>{
    let num = 20;
    let subtract = ()=>{
        return 30 - num;
    }
    return subtract
}
let nums = add();
console.log({nums});
console.log(nums())

let adds = (numb) =>{
    // let num = 20;
    let subtract = (num)=>{
        return num - numb;
    }
    return subtract
}
let numbers = adds(50);
console.log({numbers});
console.log(numbers(2))