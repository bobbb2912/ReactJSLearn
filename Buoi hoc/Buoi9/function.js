// FUNCTION
// subprogram: chuong trinh con.
// tap hop cua source code co cung y nghia => ctrinh ngan gon hon, tuong minh hon
function chayBo() {
    console.log('khoi dong');
    console.log('start chay');
    console.log('chay 5km');
    console.log('ve dich');
    console.log('dan co');
}

// chayBo();
// cach khai bao pho bien hon => khai bao nhu mot bien => arrow function
const learnReact = () => {
    console.log('HTML/CSS');
    console.log('JS');
    console.log('React');
}

// learnReact();
// finction co tham so (parameter truyen vao)
const sum = (param1, param2, param3) => {
    console.log(param1 + param2 + param3);
};

const defaultParam = (name = 'default') => {
    console.log('ten toi la ' + name);
};

// sum(1, 2, 3);
// defaultParam();
// su dung fucntion nhu mot bien => co ket quan tra ve (return)

const parseNumber = (numberStr) => {
    return parseFloat(numberStr);
};

// let total = parseNumber('10') + 10;

// console.log(total);

/////////////
const symmetry = (k) => {
    let str = k + '';
    let newString = '';
    console.log(str);
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    if (newString === str) {
      return true;
    } else {
      return false;
    }
}

// console.log(symmetry(1234321));

//rest params {...}

const sumAll = (...allParams) => {
  let total = 0;

  for (let i = 0; i < allParams.length; i++) {
    total += allParams[i];
    
  }
  return total;
}

// console.log(sumAll(5, 6, 7, 8));


// callback function: mot function nhu 1 param cua function khac
const aFunction = (callBack) => {
  console.log('function a');
  callBack();
}
// const bFunction = () => {
//   console.log('function b');
// }

// aFunction(bFunction); // b duoc goi la callBack function
// aFunction(() => {
//   console.log('function c');
// }); // callback: de thuc hien mot tac vu sau khi hoan thanh mot tac vu khac

// mot vi du ve bat dong bo
// console.log('1');
// setTimeout(() => {
//   console.log('3');
// }, 1000); // cho 1 giay moi chay function ben trong
// console.log('2');
