const ticket = new Promise((resolve, reject) => {
    const isBoarded = false;
    if(isBoarded){
        resolve("You are not in the flight");
    }
    else{
        reject("your flight has been cancelled");
    }
})
ticket.then((data)=>{
    console.log("congrats",data);

})
.catch((data)=>{
    console.log("oh noo",data);
})
.finally(()=>{
    console.log("always execute");
})