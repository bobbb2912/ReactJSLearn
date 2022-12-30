console.log('hello update');

// const a = 10;
// const b = 12;
// console.log(a+b);

//cac kieu du lieu khai bao bien va cac kieu du lieu:
//Number, 
// string: text
// boolean:
// object: 
// {
//     name: "Hien",
//     age: 22,
//     address: "BN"
// }
// + function: => goi lai code
// function run() {
//     console.log('toi dang chay');
// }

// + undefined: value not assigned
// JS: khong can khai bao du lieu

// co 3 cach khai bao bien: var, const, let 
// khi khai bao bien => lay gia tri va luu gia tri vao o nho
// var data = 'day la gia tri';
// const data2 = 'day la gia tri 2';
// let data3 = 'day la gia tri 3';
// console.log(data, data2, data3);
// var: lay gia tri cuoi cung duoc gan => khong dung, boi vi co the duoc khai bao lai => gay thua thai du lieu
// var a = 10;
var a1 = 20;
// console.log(a1);

// // let b = 'Hien';
// // b = "S";

// const PI = 3.14; // dung cho gia tri khong thay doi => hang so
// console.log(PI);

// kieu du lieu: number, boolean, string, function, object, undefined
// khai bao bien: var, const, let
//undefine va null: undefine co kdl la undefine va khong duoc dinh danh tu trước, null co kieu dl la object

let number = 123;
let string = 'hien';
let string2 = "Hien1";
let string3 = `Hien1 ${10+20}`; // co the xu ly duoc logic trong dau ``
let boolean = true;
console.log(typeof number);
console.log(typeof string);
console.log(typeof string2);
console.log(typeof boolean);
console.log( string3);

let car = {
    name: 'honda',
    price: 100000,
    year: 2022
}
function run(params) {
    console.log(' toi dang chay');
}
let run2 = () => {};
console.log(typeof run);
console.log(typeof run2);
console.log(typeof run3); // dang su dung mot bien ma khong duoc dinh nghia tu truoc

var scopeVar = 10;
if(scopeVar==10) {
    console.log(scopeVar);
}
//scope cua bien: var hoat dong trong toan cuc. let hoat dong trong block{}
// tinh hoisting: 
