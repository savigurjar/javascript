const myArr = [0,1,2,3,4,5]
console.log(myArr[3]);

// array methods

// myArr.push(6)
// myArr.pop() //it will remove one value
// console.log(myArr);

// myArr.unshift(0) //it insert in first
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(7)) //-1 this value is not present
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArrArr);
// console.log(typeof newArr)

//slice , splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)
//slice me range include nhi hoti splice me nhi hoti
const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2);


