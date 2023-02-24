// async await: de xu ly bat dong bo
// callback, promise, async-await

// (a+b)*h/2

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

  const ketqua = async (a, b, h) => {
    try {
        const resultTong = await tong(a, b);
        const resultNhan = await nhan(resultTong, h);
        const done = await chia(resultNhan, 2);
        console.log('done ', done);
    } catch (error) {
        console.log('error ', error);
    }
    

  }
// cu phap, khai bao async cho func va await cho tung func con muon cho
// handle error: try catch
// chi await duoc voi nhung function return ra promise

  ketqua(5, '', 2);