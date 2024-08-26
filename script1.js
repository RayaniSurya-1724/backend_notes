const fs = require('fs');
const http = require('http');

fs.appendFile("hi.txt","he is a student",function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("done");
    }
})

// fs.rename("hi.txt","hello.txt",function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("done");
//     }
// })

fs.copyFile("hello.txt","./hii.txt",function(err){
    if (err) console.error(err);
    else{
        console.log("done");
    }
})

const server =http.createServer(function(req,res){
    res.end("hello world");
})

server.listen(3000);