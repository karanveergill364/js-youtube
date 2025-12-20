function addtwoNumbers(a, b) {
    return(a + b);
}

console.log(addtwoNumbers(3, 5));

function username(username){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} this is default username`
}
console.log(username())

