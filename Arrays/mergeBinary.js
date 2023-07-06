//merge sort
function splittingArray(array){
if(array.length < 2){
    return array
    }
    
    let middle = Math.floor(array.length / 2)
    let leftarr = array.slice(0, middle)
    let rightarr = array.slice(middle)

    return mergedArray(splittingArray(leftarr),splittingArray(rightarr))
}

function mergedArray(left, right){
    let outputArray = []
    while (left.length && right.length){
        if (left[0] <= right[0]){
            outputArray.push(left.shift())
        }
        else{
            outputArray.push(right.shift())
        }
        
    }
    return [...outputArray, ...left, ...right]
}

// let arr = [23,4,56, 67,2]
// console.log(splittingArray(arr))

//binary search

// function search(array, target){
//     let left = 0
//     let right = (array.length-1)
//     while(left <= right){
//         let middle = Math.floor((left + right )/2)
//         if(array[middle] === target){
//         return target
//         }
//         else if(array[middle] < target){
//             left = middle +1
//         }
//         else{
//             right = middle =1
//         }
//     }
//     return null
// }


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
        return null
    }
    
}

let arr = [23,4,56, 67,2]
target = 4
console.log(binary(splittingArray(arr)), target)