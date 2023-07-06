//given an array num if numbers and a target, return the index if the target is found if the target is found in the array
// else return null
// merge sort
function divingArray(num){
    if(num.length < 2 ){
    return(num)
}
    let middle = Math.floor(num.length / 2)
    let left = num.slice(0, middle)
    let right = num.slice(middle)
    return mergeSort(divingArray(left), divingArray(right))
}

function mergeSort(right, left){
    let sort_Array = []
    while(left.length && right.length){
        if(left[0] <= right){
            sort_Array.push(left.shift())
        }
        else{
            sort_Array.push(right.shift())
        }
        return[...sort_Array, ...left, ...right]
    }

}


function binary (num, target){
    let left = 0
    let right  = num.length -1 ;
    while(left <= right){
        let middle = Math.floor( (left + right)/2);
        if(num[middle]=== target){
            return middle;
        }
        else if(num[middle] < target){
            left = middle+1;

        }
        else {
            right = middle -1;
        }

    }
    return null
}
let num = [3,4,6,10,15,26,47,56];
let target = 47;
let num1 = divingArray(num)
console.log(divingArray(num))
console.log(binary(num1, target));

let num2 = [90,45,13,88,53,23,45]
let target2 = 23
let num3 = (divingArray(num2))
console.log(divingArray(num3))
console.log(binary(num3, target2))