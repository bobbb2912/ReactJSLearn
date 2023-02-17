const readlineSync = require('readline-sync');


// question: giao tiep thong qua input output stream
var userName = readlineSync.question('What your name? ');
console.log('Hi ' + userName);
// hidden text
var age = readlineSync.question('Enter the age: ', {hideEchoBack: true}); // the types on screen is hidden by '*'
console.log('age: ' + age);

// nhận phản hồi của người dùng để thao tác. Nhâp Y(Yes) or N(No)
// ví dụ: quản lý nhập sinh viên
let listStudent = [];
while (true) {
    if(readlineSync.keyInYN('Do you want continue? (Y/N)')) {
        let name = readlineSync.question('Enter the name: ');
        let gender = readlineSync.question('Enter the gender: ');
        let students = {name: '', gender: ''} ;
        students.name = name;
        students.gender = gender;
        listStudent.push(students);
        console.log(name + ' - ' + gender);
    } else {
        console.log(listStudent);
        break;
    }
}

// keyInSelect: choose an item from a list 
let getIndexStudent = readlineSync.keyInSelect(listStudent, 'Which student?');
console.log(listStudent[getIndexStudent]);


