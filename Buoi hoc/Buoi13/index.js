// bai toan 2: tinh dien tich hinh thang = (a + b) * h/2 
// thuc hien phep cong mat 3s
// thuc hien phep nhan mat 2s
// thuc hien phep chia mat 1s
// Su dung promise (loi hua) de xu ly: thanh cong, that bai
// 1 function goi la promise khi no return ra 1 promise


const tru = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('start tru');
        setTimeout(() => {
            const result = a-b;
            console.log('tru done', result);
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject(' ban phai nhap so');
                return;
            }
            resolve(a-b);
        },500);
    });
};
const tong = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('start Cong');
        setTimeout(() => {
            const result = a+b;
            console.log('Cong done', result);
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject(' ban phai nhap so');
                return;
            }
            resolve(result);
        },3000);
    });
};
const nhan = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('start Nhan');
        setTimeout(() => {
            const result = a*b;
            console.log('Nhan done', result);
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject(' ban phai nhap so');
                return;
            }
            resolve(a*b);
        },2000);
    });
};
const chia = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('start Chia');
        setTimeout(() => {
            // const result = a/b;
            console.log('Chia done', result);
            if(typeof a !== 'number' || typeof b !== 'number'|| b !== 0) {
                reject(' ban phai nhap so khac 0');
                return;
            }
            resolve(a/b);
        },1000);
    });
};

// const ketQua = (a, b, h) => {
//     tong(a, b)
//         .then((result) => 
//             nhan(result, h).then((dataNhan) => {
//                 chia(dataNhan, 2).then((ketquaCuoi => {
//              console.log(ketquaCuoi);
//             });
//         }),
//     );
// };

// promise chay tuan tu
const ketqua = (a, b, h,g) => {
    return tong(a, b)
    .then((resultTong) => nhan(resultTong, h))
    .then((resultNhan) => chia(resultNhan, g))
    .then((resultChia) => {
        console.log('ket qua cuoi', resultChia);
    })
    .catch((e) => {
        console.log('bi loi');
    });
};

// promise chay song song => xu ly dong thoi
const songsong = () => {
    return Promise.all((tong(3, 5), nhan(2, 3), chia(6,2))).then((data) =>{
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
};
// songsong();

const chaydua = () => {
    return Promise.race([tong(3, 5), nhan(2, 3), chia(6,2)]).then((data) => {
        console.log('race', data);
    });
};
chaydua();

// ketqua(5, 3, 6, 0);


// const a = tong('hh', 5).then(data => {
//     console.log('data sau khi chay xong', data);
// }).catch((err) => {
//     console.log('loi ', err);
// });
// console.log('gia tri a: ', a);
