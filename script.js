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

console.log(arr.indexOf(fin));

var obj = {
    name: "surya",
    age:20
}
Object.freeze(obj);
obj.age=19;

function change(){
    return 24;
}

console.log(change());

async function man(){
    var ans = await fetch(`https://randomuser.me/api/`);
    var blob = await ans.json();

    console.log(blob);
}


man();

