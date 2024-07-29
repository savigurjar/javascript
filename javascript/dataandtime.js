//Date

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2024 , 11, 30) //month 0 se start honge
// console.log(myCreatedDate)
// console.log(myCreatedDate.toString())

// let myCreatedDate = new Date(2024 , 11, 30,12,30) // time
// let myCreatedDate = new Date("2024-12-30") // time
let myCreatedDate = new Date("12-30-2024") // time
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp  = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) //in miliseconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getTimezoneOffset());

newDate.toLocaleDateString('default',{
    weekday : "narrow",
})