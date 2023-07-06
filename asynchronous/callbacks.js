function add (num , callback){
    console.log(num);
    callback();
}
function nums (){
    console.log("hello")
}
add(12, nums)