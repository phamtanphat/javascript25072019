// "Hello"
// ctrl + / : Comment code không sử dụng
// Mở môi trường thực thi  
// Macos : control + `
// Window : ctrl + ` 
// ngắt thực thi : ctrl + c
// var a = "hello"
// var b = "xin chao"

// console.log(b)
//1 : Khai báo biến : var let const

// const a
// console.log(a)
// 2 : Toán tử (+ , - , * , /)
// var a = 5 + 6 //(Biểu thức)
// var b = a++ //(Biểu thức)
// var c = (a > b) ? a : b //(Toán tử 3 ngôi)
var a = 5
var b = 6
var c = ++a + b++ - a++ + b-- + a++ + b--
//6 + b++ - a++ + b-- + a++ + b-- : a = 6 
// 6 + 6 - a++ + b-- + a++ + b-- : a = 6 , b = 7
// 6 + 6 - 6 + b-- + a++ + b-- : a = 7 , b = 7
//6 + 6 - 6 + 7 + a++ + b-- : a = 7 , b = 6
//6 + 6 - 6 + 7 + 7 + b-- : a = 8 , b = 6
//6 + 6 - 6 + 7 + 7 + 6 = 26
console.log(c)


