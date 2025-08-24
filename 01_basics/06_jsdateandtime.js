let myDate = new Date()
console.log(myDate)

console.log(myDate.toLocaleString())

let myCreatedDate = new Date("3-02-2025")
console.log(myCreatedDate.toLocaleString())

console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()} `)

newDate.toLocaleString()