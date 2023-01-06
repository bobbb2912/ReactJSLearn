// string
/*
length: 
toUpperCase()
toLowerCase() => viet thuong tat ca ky tu
charAt(pos) => tra ve ki tu tai vi tri truyen vao
indexOf() => tra ve vi tri cua ky tu truyen vao
includes() => kiem tra ky tu nao do co trong string ban dau khong
replace() => thay the string 
slice(start, end) => lay tu vi tri start den truoc vi tri end
trim() => xoa tat ca khoang trang 2 dau
.toString() => bien mot so thanh moi chuoi
*/

// let index = 123;
// let str =  `  day la buoi ${index} buoi 9 \n ` ;
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(2));
// console.log(str.indexOf('la'));
// console.log(str.includes('lla'));
// console.log(str.replace('buoi', 'Buoi' ));
// // console.log(str.replaceAll('buoi', 'Buoi' ));
// console.log(str.lastIndexOf('i'));
// console.log(str.slice(4, 7));
// console.log(str.slice(4));
// console.log(str.trim());
// console.log(str.substring(3, 9));

// Bai tap: chuan hoa string.
// " NGuyen thI HIEn " => "Nguyen Thi Hien"
// '  NGuYen ThAc tUnG  ' => 'Nguyen Thac Tung'

// let str = '  NGuYen ThAc tUnG  ';
// let nameConvert = str.trim().toLowerCase();

// for(let i = 0; i < nameConvert.length; i++) {
//     if(nameConvert[i-1] === ' ' || i == 0) {
//         nameConvert = nameConvert.slice(0, i) 
//         + nameConvert.charAt(i).toUpperCase() 
//         + nameConvert.slice(i+1);
//     }
// }

// console.log(nameConvert);

///////////////number/////////
/*
floor: lam tron xuong
ceil: lam tron len
round: 
random: ngau nhien mot so trong khoang 0->1

*/
// let number = 10.2;
// let numberStr = '10.5';
// // let  convertNumber = parseInt(numberStr);
// // let  convertNumber = parseFloat(numberStr);
// // console.log((number - numberStr));
// console.log(Math.round(number));
// console.log(Math.random());


// bai tap: lam xuc xac: do xuc xac moi lan ra mot so ngau nhien tu 1->6

// console.log(Math.floor(Math.random()*6) + 1);
// let min = 10;
// let max = 100;
// console.log(Math.floor(Math.random()*(max-min+1) +min));


