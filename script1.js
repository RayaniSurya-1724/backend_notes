const fs = require('fs');

fs.appendFile("hi.txt","he is a student",function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("done");
    }
})

fs.rename("hi.txt","hello.txt",function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("done");
    }
})