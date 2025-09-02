const tinderUser = new Object()

tinderUser.id = "848abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "karan",
            lastname: "veer"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1, obj2}
console.log(obj4)

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5)

const obj6 = {...obj1, ...obj2 , ...obj3}
console.log(obj6)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "karan"
}

const {courseInstructor: Instructor} = course

console.log(Instructor)