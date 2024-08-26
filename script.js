var arr =[1,2,3,4]

arr.forEach(function(val){
    console.log(val+"hello");
})

var newarr = arr.map(function(val){
    return val*3;
})

console.log(newarr);