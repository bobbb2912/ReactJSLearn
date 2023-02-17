// c1: callback
// Bai toan pha cafe: start => pha cafe trong 5s (doing) => done

const DoingCafe = (cb) => {
    setTimeout(() => {
        console.log('doing.....');
        const b = 'Toi da co cafe';
        cb(b);
    }, 5000);
};
// console.log('start');
// DoingCafe((data) => {
//     console.log('done', data);
// });
////////////////////////////
// bai toan 2: tinh dien tich hinh thang = (a + b) * h * (c / d) + (e - f) /2 
// thuc hien phep cong mat 3s
// thuc hien phep nhan mat 2s
// thuc hien phep chia mat 1s
// thuc hien phep tru mat 500ms
// tra ve ket qua cuoi cung
//  su dung callback de xu ly
// (a + b) * h * (c / d) + (e - f) /2 
let a = 7;
let b = 5;
let h = 6;
let c = 2;
let d = 3;
let e = 4;
let f = 5;

const phepCong = (a, b, cb) => {
    console.log('start phep cong');
    setTimeout(() => {
        console.log('cong xong', a+b);
        const sum = a+b;
        cb(sum);
    }, 3000);
};
const phepNhan = (a, b, cb) => {
    console.log('start phep nhan');
    setTimeout(() => {
        console.log('nhan xong ', a*b);
        const nhan = a*b;
        cb(nhan)
    }, 2000);
};
const phepChia = (a, b, cb) => {
    console.log('start phep chia');
    setTimeout(() => {
        console.log('chia xong', a/b);
        const chia = a/b;
        cb(chia);
    }, 1000);
};
const phepTru = (a, b, cb) => {
    console.log('start phep tru');
    setTimeout(() => {
        console.log('tru xong', a-b);
        const tru = a-b;
        cb(tru);
    }, 500);
};


// const dataTong = phepCong(5, 6);
// const dataNhan = phepNhan(dataTong, 10);
// const dataChia = phepChia(dataChia, 2);
// console.log('ket qua: ' + dataChia);

/////////// (a+b)*h/2
// const tinhS = (a, b, h) => {
//     phepCong(a, b, (kqSum) => {
//         phepNhan(kqSum, h, (kqMul) => {
//             phepChia(kqMul, 2, (kqDiv) => {
//                 console.log(kqDiv);
//             })
//         })
//     })
// };

// (a + b) * h * (c / d) + (e - f) /2 
// let a = 7;
// let b = 5;
// let h = 6;
// let c = 2;
// let d = 3;
// let e = 4;
// let f = 5;
// (7, 5, 6, 2, 3, 4, 5)
const tinhS = (a, b, h, c, d, e, f) => {
    phepCong(a, b, (kqSum) => {
        phepNhan(kqSum, h, (kqMul) => {
           phepChia(c, d, (kqChia) => {
                phepNhan(kqMul, kqChia, (kqNhan1) => {
                    phepTru(e, f, (kqTru) => {
                        phepChia(kqTru, 2, (kqChia1) => {
                            phepCong(kqChia1, kqNhan1, (kqdone) => {
                                console.log(kqdone);
                            })
                        })
                    })
                })
           })
        })
    })
};

tinhS(a, b, h, c, d, e, f);

// => callback hell: rat kho maintain
// sinh ra 2 cai de xu ly bdt: promise va async await.
// promise se co trang thao resolve, reject => handle thanh cong va loi
// BTVN: nghien cuu ve promise
// https://viblo.asia/p/tong-hop-xu-ly-bat-dong-bo-trong-javascript-callback-promise-va-async-Az45ba6LlxY
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// bai test quan ly sinh vien
// npm: tim hieu thu vien readline-sync, fs

// ///////////////
// promise 