let num = [3,5,10,30,8,6];

// for(let i = 0 ; i < num.length ; i++){
//     console.log(i);
//     console.log(num[i]);
// }

// ******Option 1*********
for(let i = 0 ; i < num.length ; i++){
    console.log("option 1",num[i]);
    if (i === 2){
        break;
    }

}

// ******Option 2*********
for(let i = 0 ; i < num.length ; i++){
    console.log("Option 2" ,num[i]);
    if (i === 2){
        break;
    }

}


// ******Option 3*********
for(let i = 0 ; i < num.length ; i++){
   
    if (i === 2){
        break;
    }
    console.log("Option 3" ,num[i]);
}


// ******Option 3*********
for(let i = 0 ; i < num.length ; i++){
   
    if (i === 3){
        continue;
    }
    console.log("Continue" ,num[i]);
}

