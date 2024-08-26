var arr =[1,2,3,4]

arr.forEach(function(val){
    console.log(val+"hello");
})

var newarr = arr.map(function(val){
    return val*3;
})

console.log(newarr);

var ans = arr.filter(function(val){
    if (val>=2){
        return true;
    }
})

console.log(ans);

var fin = arr.find(function(val){
    if (val==2){
        return val;
    }
})

console.log(fin);

