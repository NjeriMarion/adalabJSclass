let success = false;

let promise = new Promise(function(resolve, reject){
    if(success){
        resolve("I have everything")
    }
    else{
        reject(" I am still poor")
    }
}).then(()=> {console.log("Its a dream come true")})
.catch(()=>{console.log("I will get more money")})
.finally(()=>{console.log("I will be happy")})
console.log({promise})
