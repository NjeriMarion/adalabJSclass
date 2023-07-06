














// const flight = "LH234";
// const jonas = {
//     name: "Jonas Schmedtmann",
//     passport : 24739479284,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999'
//     passenger.name = "Mr. " + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert("Checked in");

//     }
//     else{
//         alert("Wrong passport !");

//     }
// };

// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);



//merge sort
 function divideArr( arr){
    if (arr.length <=1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return mergingarr(divideArr(left), divideArr(right))
 }

 function mergingarr(left, right){
    finalArr = []
    while(left.length && right.length){
        if (left[0] <= right[0]){
            finalArr.push(left.shift())
        }
        else{
            finalArr.push(right.shift())
        }
    
    }
    return[...finalArr, ...left, ...right]
 }

 function binarySearch(arr, target){
    let leftA = 0
    let rightA = arr.length -1
    while (leftA <= rightA){
        let middle = Math.floor((leftA + rightA)/2)
        if (arr[middle] === target){
            return middle
        }
        else if(arr[middle] < target){
            leftA = middle +1
        }
        else{
            rightA = middle - 1
        }
    }
    return null
 }

 let newArr = [23,56,7,2,1,78,90]
 console.log(divideArr(newArr))

 let newArr2 = [23,56,7,2,1,78,90]
 let target0 = 78
 console.log(binarySearch( divideArr(newArr)), target0)


                    //  *********FUNCTIONS***************


function logger(){
    console.log("my name is Marion ");
}
 logger()

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

console.log(fruitProcessor(5,0))


function calcAge1 (birthyear){
    return 2023 - birthyear
}
console.log(calcAge1(2001))

let calcAge2 = function (birthyear){
    return 2023 - birthyear
}
console.log(calcAge2(2001)); 

const calcAge3 = birthyear => 2023 - birthyear;

console.log(calcAge3(2002))


// ********************** JS FUNCTIONS ASSIGNMENT**********************

function stringElements(){
    let eachString = " "
    for(let i = 0; i < arguments.length; i++ ){
        eachString += arguments[i]
        return eachString[i];
    }
   
}
console.log(stringElements("he", "'s", "a", "young", "boy"))


// *********question 1**************

function elements_sum(array){
    let total = 0
    let i ;
    while(i < array.length);{
        for ( i in array){
            total+= array[i]
            i++
        }
    }
    return total
}

let array = [1,2,3,45,8,7,8,9]
console.log("sum is", elements_sum(array))



// *********question 2**************

function average(array){
    let sum = 0
    for(let i = 0 ; i <= array.length ; i++){
        sum += i
    
    }
    return sum / array.length
}
console.log("average is", average(array))


// *********question 3**************

function elements_values(array){
    let values = [];
    for ( let i = 0; i < array.length ; i++){
        if (array[i] == Math.min(array)){
        values +=  i;
        }
        else if(array[i] == Math.max(array)){
            values += i
        }
       
    }
    return values
    
}
console.log("min and max vales are", elements_values(array))

// *********question 5**************

let array2 = [93,4,5,6,76]
function two_arrays (array, array2){
    let combined_array = [...array, ...array2]
    return combined_array  
}
console.log(two_arrays(array,array2))

// *********question 6**************

let array3 = array2.sort()
console.log(array3.reverse())

// *********question 7**************

console.log(array3[1])

// *********question 8**************

