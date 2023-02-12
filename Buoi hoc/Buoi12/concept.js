// xu ly bat dong bo: biet cach JS chay ntn?
// JS la ngon ngu chay bat dong bo
// dong bo: sync - bat dong bo: async
// dong bo: chay code tu tren xuong duoi, tu trai qua phai
// bat dong bo: chay khong theo thu tu tren, mà nhung code nao ma JS danh gia mat it thoi gian xu ly se chay truowc, mat thoi gian xu ly se chay sau
// code mat it thoi gian xu ly: tat ca cac code co ban: khai bao, log, tinh toan +-*/, for, array, obj,...
// code mat nhieu thoi gian xu ly: co do tre: setTimeout, call api (tuong tac voi server), doc ghi file, ...
// lam the nao de bien bat dong bo -> dong bo.
//  => xu ly bat dong bo: bien bat dong bo thanh dong bo. async -> sync.
// co 3 cach de xu ly bat dong bo: callback, promise, async-await
// => Event loop trong JS
//  callstack, web apis -> callback queue

// let a = 10;
// console.log('start');
// setTimeout(() => {
//     console.log('hello');;
// }, 1000);
// console.log(a);

////
// c1: callback
// Bai toan pha cafe: start => pha cafe trong 5s (doing) => done
