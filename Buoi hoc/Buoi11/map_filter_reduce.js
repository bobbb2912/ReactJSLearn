// map: bien doi TAT CA cac phan tu cua array theo mot dieu kien cho truoc
const arr = [1,2,3,4,5];
const arrMap = arr.map((item, index) => {
    // console.log(index);
    return item * 2;
});

// console.log(arrMap);

const listAnimals = [
    {name: 'Dog', age: 2, weight: 5},
    {name: 'Dog1', age: 5, weight: 3},
    {name: 'Dog2', age: 6, weight: 5},
    {name: 'Dog3', age: 7, weight: 20},
    {name: 'Dog4', age: 9, weight: 200},

];

const getNameAnimal = listAnimals.map((item, index) => {
    return item.name;
});

// console.log(getNameAnimal);
//*chu y: map tra ve mang moi
//////////////////////////////////////////////
// filter: tim kiem theo dieu kien (true/false) => tra ve mot arr cac phan tu thoa man
// => tim nhhung dong vat co can nang >100
const listWeightedAnimal = listAnimals.filter((item, index) => {
    return item.weight > 100;
});

// console.log(listWeightedAnimal);

// find: tim kiem va tra ve item dau tien thoa man dieu kien 
const findAnimal = listAnimals.find((item, index) => {
    return item.age > 5;
});

// console.log(findAnimal);
// 
const Bai27 = () => {
    students = [
        {id: "T3HXX1", firstName: "NgAN", lastName: "Duong Thuy"},
        {id: "T3HXX2", firstName: "Ha", lastName: "Do Thi Thu"},
        {id: "T3HXX5", firstName: "Minh", lastName: "Nguyen Nhat"}
    ];

   
    for (const element of students) {
        let ten = element.firstName.trim().toLowerCase();
        let ho = element.lastName.trim().toLowerCase();
        ten = ten[0].toUpperCase() + ten.slice(1);
        for(let j = 0; j < ho.length; j++) {
            if(ho[j-1] === ' ' ||j == 0) {
                ho = ho.slice(0, j) 
                + ho.charAt(j).toUpperCase() 
                + ho.slice(j+1);
            }
        }
        element.firstName = ten;
        element.lastName = ho;
    }
    const listStudentFilter = students.filter((item, index) => {
        return (item.firstName.length >=3) && (item.firstName.indexOf('a')!=-1 || item.firstName.indexOf('A')!=-1);
    });
    console.log(listStudentFilter);
}
// Bai27();
///////////////////
// sort: sap xep
const arrSort = [7, 0, 1, 2, 8, 10, 20];
const newSort = arrSort.sort((a, b) => a - b); // a-b: tang dan, b-a: giam dan
// console.log(newSort);

const nameSort = ['Tung', 'Hien', 'Vinh', 'Hoa'];
const nerSortName = nameSort.sort((a,b) => a.localeCompare(b));
// console.log(nerSortName);

///////
// reduce: tra ve mot gia tri
const arrReduce = [3, 5, 13, 5, 12];

const sum = arrReduce.reduce((a, b) => {return a+b}, 0);
// console.log(sum);
// tinh tong so can nang cua listAnimals

const sumAnimals = listAnimals.reduce((a, b) => {
    return a+b.weight;
}, 0);
console.log(sumAnimals);

