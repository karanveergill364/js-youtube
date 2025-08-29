const myObj = {
    name: "karan",
    age: 33,
    number: 44558877,
    car: "honda",
}

console.log(myObj["name"])

mySymb = Symbol("key1")

const myObj2 = {
    [mySymb]: "Symb"
}

console.log(myObj2[mySymb]);

myObj.greeting = function(){
    console.log(`Hello and welcome Mr.${this.name}`)
}

console.log(myObj.greeting())

myObj.name = "shaktiman"
Object.freeze(myObj)
myObj.name = "batman"
console.log(myObj["name"])