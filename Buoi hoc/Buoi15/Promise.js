// Tìm kết quả của phép toán (a + b) * h /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Thực hiện phép trừ mất 500ms
// Trả về kết quả cuối cùng.
// Sử dụng promise (lời hứa) để xử lý: thành công, thất bại.
// 1 function gọi là promise khi nó return ra 1 Promise.
// promise nhận vào 1 function callback

const tong = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Cong');
    setTimeout(() => {
      const sum = a + b;
      if (typeof a === 'number' && typeof b === 'number') {
        console.log('Cong done', sum);
        resolve(sum);
      } else {
        reject('Bạn phải nhập số để thực hiện phép cộng');
      }
    }, 3000);
  });
};
const tru = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Tru');
    setTimeout(() => {
      const sum = a - b;
      if (typeof a === 'number' && typeof b === 'number') {
        console.log('Tru done', sum);
        resolve(sum);
      } else {
        reject('Bạn phải nhập số để thực hiện phép Tru');
      }
    }, 500);
  });
};
const nhan = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Nhan');
    setTimeout(() => {
      const result = a * b;
      if (typeof a === 'number' && typeof b === 'number') {
        console.log('Nhan done', result);
        resolve(result);
      } else {
        reject('Bạn phải nhập số để thực hiện phép nhan');
      }
    }, 2000);
  });
};

const chia = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Chia');
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject('Bạn phải nhập số');
      } else if (b == 0) {
        return reject('Bạn không được phép chia cho 0');
      } else {
        console.log('Chia done', a / b);
        return resolve(a / b);
      }
    }, 500);
  });
};

// const ketqua = (a, b, h, g) => {
//   tong(a, b)
//     .then((result) =>
//       nhan(result, h).then((dataNhan) => {
//         chia(dataNhan, g).then((ketquaCuoi) => {
//           console.log('kết quả cuối', ketquaCuoi);
//         });
//       }),
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// };

const ketqua = (a, b, h, g) => {
  return tong(a, b)
    .then((resultTong) => nhan(resultTong, h))
    .then((ressultNhan) => chia(ressultNhan, g))
    .then((resultChia) => {
      console.log('ketqua cuoi', resultChia);
    })
    .catch((e) => {
      console.log('bi loi', e);
    });
};

const ketqua2 = (a, b, h, c, d, e, f) => {
  return tong(a, b)
    .then((result) => nhan(result, h))
    .then((result) => chia((result, c)))
    .then((result) => nhan((result, d)))
    .then((result) => tru((result, e)))
    .then((result) => chia((result, f)))
    .then((result) => tong((result, c)));
};
// Promise chạy tuần tự.
// Promise chạy song song.
// Promise chay đua.

// ketqua(5, 7, 6, 2);
const songsong = () => {
  return Promise.all([tong(3, 5), nhan(2, 'Tung'), chia(6, 0)])
    .then((data) => {
      console.log('ket qua song song', data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const chaydua = () => {
  return Promise.race([tong(3, 5), nhan('Tung', 3), chia(6, 0)])
    .then((data) => {
      console.log('race', data);
    })
    .catch((error) => {
      console.log(error);
    });
};
// chaydua();
// songsong();
