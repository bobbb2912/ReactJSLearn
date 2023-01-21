//object => doi tuong
const people = {
    name: 'Hien',
    age: 20,
    job: 'student',
}

// CRUD: tuong tac voi object (them, sua, xoa phan tu)
console.log(people.name);
people.gender = 'female'; // them moi thuoc tinh
people.age = 21; // thuoc tinh da ton tai
delete people.job; // xoa phan tu
// check xem phan tu co ton tai hay khong
// console.log(people.hasOwnProperty('gender'));

// cach 2: truy cap vao cac gia tri cua object
people['test'] = 'test'; // dung cho truong hop properties dong
// console.log(people['name']);
console.log(people);

const arr = ['hien', 'hien1'];

const obj1 = {
    hien: {
        name:'Hien',
        age: 20
    },
    hien1: {
        name:'Hien1',
        age: 21
    }

};
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(obj1[element]);
}

console.log(Object.values(people));
