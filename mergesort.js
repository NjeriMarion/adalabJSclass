// merge sort
function divideArray(num){
if(num.length<=1){
    return num;
}
    let middle = Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return sortedArray(divideArray(left), divideArray(right));
}
function sortedArray(left, right) {
  let emptyArray = [];
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      emptyArray.push(left.shift());

    } else {
      emptyArray.push(right.shift());

    }
  }
  return [...emptyArray, ...left, ...right]

}

let number = [10,2,56,3,8,4,11];
console.log(divideArray(number));

function binary (array, target){
  let left = 0;
  let right = array.length - 1;

  while(left < right){
    let middle = Math.floor((left + right)/2);
    if (array[middle] === target){
      return target
    }
    else if(array[middle] < target){
      left = middle + 1 ;
    }
    else{
      right = middle =1
    }
  }
  return null
}


let numbers = [16,8,56,1,1,2,32];
let target = 3
console.log(binary(divideArray(numbers)), target);




// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]

// merge sort
// function dividingArray(arr){
//   if(arr.length < 2){
//     return arr
//   }

//   let mid = Math.floor(arr.length / 2)
//   let left = arr.slice(0, mid)
//   let right = arr.slice(mid)
//   return arraySort(dividingArray(left), dividingArray(right))

// }

// function arraySort(left, right){
//   const newArray= []
//   while(left.length && right.length){
//     if(left[0] <= right[0]){
//     newArray.push(left.shift);
//   }
  
//   else{
//     newArray.push(right.shift);
//   }
   
// }
// return[...newArray, ...left, ...right] 

// }

// let unsortedArray = [55,78,12,6,4,133]
// console.log(dividingArray(unsortedArray))
