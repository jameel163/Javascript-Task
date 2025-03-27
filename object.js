
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// 1) How to get all the keynames in javascript?
console.log(Object.keys(person))
// 2) How to get all the values in javascript?
console.log(Object.values(person))
// 3) What is the method to use to find how many keys exist in above object ?
console.log(Object.keys(person).length)
// 4) Write a snippet to call a function with two parameters and return the sum of that parameters.
function sumTwo(a,b){
    return a+b
}
const sm=sumTwo(10,20)


const x =8.99999
// 1) Round of this number with two decimals
console.log(Math.round(x))


let obj = {
    firstName: "x",
    age: 20,
    lastName: "y"
}

// 1) How to retrive the age value?
console.log(obj.age)
// 2) How to add new field into that existing "obj" object ?
obj.height=5.5
console.log(obj.height)
// 3) what will be the result of obj[firstName]
console.log(obj["firstName"])//x
// 4) I need to get the output [firstName, age, lastName]. what is the method used 
Object.keys(obj)

// 5) How to iterate the object? give example
for(let k in obj){
    console.log(obj[k])
}

Object.keys(obj).forEach(each=>console.log(obj[each]))

for(let [key,value]of Object.entries(obj)){
    console.log(key+" "+value)
}



let a = [1, 5, 6, 7];
// 1) How to sum the array?
const sum =a.reduce((total,num)=>{
    return total+num
})
console.log(sum)

// 2) add number 4 at first position
a.splice(3,0,4)
console.log(a)

// 3) sort the array
a.sort()
let s= a.toSorted()//it doesn't affect the original array
console.log(s)


// 4) how to arrange this array (a) in descending order ?
a.reverse()
 s= a.toReversed()//it doesn't affect the original array
console.log(a)

// 5) add number 6 at last position
a.push(6)

// 6) How to iterate the array? given example
for(let i in a){
    console.log(a[i])
}
for(let i of a){
    console.log(i)
}
a.forEach(e=>console.log(e))


// what is template literal. give an example
//Template litrel is `(backticks)
let newArray = Object.entries(obj).map(([key, value]) => {
    return `${key}: ${value}`;
});
console.log(newArray)