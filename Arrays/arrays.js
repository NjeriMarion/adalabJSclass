let arr = ['a', 'b','c', 'd',"e"];

arr.slice(2)

const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]

// for( const movement in movements){
//     // if (movement > 0){
//     //     console.log('You deposited' + movement)
//     // }
//     // else{
//     //     console.log("you withdrew" ,+ ${ath.abs(movement)})
//     }
// }

movements.forEach(function(movement){
    if(movement > 0){
        console.log("you deposited " + movement);
    }
    else{
        console.log("You withdrew "  + (Math.abs(movement)));

    }
})


let newArray = [21, 19, 30, 40, 40, 0, -20]
newArray.forEach(function(element){
    if(element > 0){
        console.log(element * 2)
    }
    else{
        console.log(element)
    }
})

//merge sort
function arrayDivision(array){
    if(array.length <=1){
        return array;
    }
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return arrayMerging(arrayDivision(left), arrayDivision(right))
}

function arrayMerging(left, right){
    let sortedArray = []
    while( left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift());
        }
        else{
            sortedArray.push(right.shift());
        }
    }
    return[...sortedArray, ...left, ...right]
}

//binary search
function binary(array, target){
    let left = 0;
    let right = (array.length - 1);

    while( left < right){
        let middle = Math.floor((left + right) / 2);
        if(array[middle] === target){
            return (target)
        }
        else if(array[middle] < target){
            left = middle+1;

        }
        else {
            right = middle -1;
        }
    }
    return null

}

let array = [20, 30, -3, -20, 50]
console.log(binary(arrayDivision(array)), 20)


const currencies = new Map([
    ['USD ', 'United States dollar']
    ['EUR', 'Euro']
    ['GBP ', 'Pound sterling']
])

currencies.forEach(function(value, key, map){
    
})





