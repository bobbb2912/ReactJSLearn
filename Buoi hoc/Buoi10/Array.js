// array: mang => du lieu dang list, thong ke, liet ke, danh sach
const arr = [ 'Hien', 21];
arr[2] = 'update';
const listNum = [1, 2, 3, 4];
listNum.push(5); // them phan tu vao cuoi
console.log(listNum.push(2));
//push: thay doi truc tiep array, tra ve so luong phan tu cua array
console.log(listNum[0]); //truy cap phan tu
console.log(listNum.length);

// them phan tu vao dau mang => thay doi mang goc va tra ve do dai mang
listNum.unshift('first');
console.log(listNum);

// xoa phan tu dau
listNum.shift();
console.log(listNum);
// xoa phan tu cuoi
listNum.pop();
console.log(listNum);

//them xoa vao vi tri bat ky => thay doi mang goc, tra ve array chua cac phan tu da xoa
listNum.splice(1, 1, 'Hien'); // ptu bat dau:so ptu muon xoa: them phan tu
console.log(listNum);
console.log(listNum.indexOf(4));
listNum.reverse();
console.log(listNum);

// 
const str = 'day la data moi';
const strConvArr = str.split(' ');
console.log(strConvArr);
console.log(strConvArr.join('-'));
//B21,22, 24, 25
//BTVN: tìm hiểu về filter, map, reduce.
// Làm bài 27, 28.