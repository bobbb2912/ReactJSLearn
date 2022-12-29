// toan tu va cau dieu kien
// +, - , *, /, %, !, 
// toan tu so sanh: <, >, >=, <=, ==, !=, === (so sanh ca kieu DL)

// let a = 3;
// let b = '3';
// let c=null;
// console.log(a !== b); //

// // dieu kien
// let score = 7;

// if (score <=5) {
//     console.log('diem kem');
// } else if(score > 5 && score < 8){
//     console.log('diem trung binh');
// } else {
//     console.log('diem cao');
// }

// bai tap: giai phuong trinh bac hai
let delta, x;
let a = 4,
  b = -2,
  c = -6;
// ax2+bx+c=0
delta = Math.pow(b, 2) - 4 * a * c;
if (a == 0) {
  if (b == 0) {
    if (c==0) {
        console.log('phuong trinh vo so nghiem');
    } else {
        console.log("phuong trinh vo nghiem");
    }
  } else {
    console.log(`phuong trinh co nghiem la: ${-c / b}`);
  }
} else {
  if (delta == 0) {
    x = -b / (2 * a);
    console.log("phuong trinh co nghiem kep: " + x);
  } else if (delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`phuong trinh co 2 nghiem la: ${x1} va ${x2}`);
  } else {
    console.log("phuong trinh vo nghiem");
  }
}

// BTVN: 



