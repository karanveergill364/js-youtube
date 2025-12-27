const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "karan"
user.welcomeMessage()

//refers to global object
console.log(this)

function chai(){
    let username = "hitesh"
    //global object does not contain property username
    console.log(this.username)//undefined
    console.log(this)
}
chai()

const tea = function (){
    let username = "hitesh"
    console.log(this.username)
    console.log(this)
}

tea()

const coffee = () => {
    let username = "hitesh"
    console.log(this)
}

coffee()

const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(1,4))

const addTwo2 = (num1,num2) => (num1 + num2)

console.log(addTwo2(7,2))

