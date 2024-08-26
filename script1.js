const fs = require('fs');

fs.writeFile("hi.txt","this is surya",function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("done");
    }
})