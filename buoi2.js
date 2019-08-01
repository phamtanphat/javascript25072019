// Hàm filter
// const numbers = [1,3,5,7,9]
// //  Tạo ra 1 mảng mới chứa giá 
// //  trị lớn hơn 1
// const newNumbers = numbers.filter(function(number){
//     if(number <= 1) return false
//     return true
// })
// console.log(newNumbers)
// const animals = [
//     {name : "Mèo" , age : 10},
//     {name : "Chó" , age : 15},
//     {name : "Thỏ" , age : 20},
// ]
// const newAnimals = animals.filter(function(animal){
//     if(animal.age <= 10) return false
//     return true
// })
// console.log(newAnimals)
// const numbers = [2,3,5,7,9]
// const tong = numbers.reduce(function(a , b ){
//         console.log("A " + a);
//         console.log("B " + b);
//         return a + b
// })
// console.log(tong)
const animals = [
    {name : "Mèo" , age : 10},
    {name : "Chó" , age : 15},
    {name : "Thỏ" , age : 20},
]
const arrayAge = animals.map(function(animal){
    return animal.age
})
const sumage = arrayAge.reduce(function(a,b){
    return a + b
})
console.log(sumage)
