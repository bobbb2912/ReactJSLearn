const fs = require('fs');
const readlineSync = require('readline-sync'); 

const ShowMenu = () => {
    console.log('Student Managerment ');
    console.log('===============================');
    console.log('1.Show all student');
    console.log('2.Create student and return Menu');
    console.log('3.Delete student');
    console.log('4.Edit student');
    console.log('5.Find student by name');
    console.log('6.Sort student by name ascending ');
    console.log('7.Sort student by age ascending ');
    console.log('8.Exit');
}

ShowMenu();

let studentStr = '';
let choose = readlineSync.question('Your choose?');

try {
    const dataStr = fs.readFileSync('./data.txt', 'utf8');
    var studentJson = JSON.parse(dataStr);
    console.log(studentJson);
} catch (err) {
    console.error(err);
}

const savefile = () => {
    const studentStr = JSON.stringify(studentJson);
    fs.writeFileSync('./data.txt', studentStr, 'utf-8');
}
const deleteStudent = () => {
    const name = readlineSync.question('What name? ');
    const filterWithoutName = studentJson.filter((i) => i.name != name);
    studentJson = filterWithoutName;
    savefile();
}

const createStudent = () => {
    let name = readlineSync.question('Name? ');
    let age = readlineSync.question('Age? ');
    let chooseGender = ['male', 'female', 'other'] ;
    let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');
    let Gender = chooseGender[getIndexGender];

    studentJson.push({
        name: name,
        age:age,
        gender: Gender,
    });
    savefile();
}
const editStudent = () => {
    const nameEdit = readlineSync.question('What name do you want edit? ');
    let indexName = studentJson.findIndex((i) => i.name === nameEdit);
    if(indexName >= 0) {
        let ageEdit = readlineSync.question('Age? ');
        let chooseGender = ['male', 'female', 'other'] ;
        let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');
        let genderEdit = chooseGender[getIndexGender];
        const newStudent = {
            name:nameEdit,
            age: ageEdit,
            gender: genderEdit
        };
        studentJson.splice(indexName, 1, newStudent);
    } else {
        console.log('Khong tim thay ten!');
    }
    

}
const findStudentByName = () => {
    const nameEdit = readlineSync.question('What name do you want find? ');
    let indexName = studentJson.findIndex((i) => i.name === nameEdit);
    if(indexName >= 0) {
        console.log(studentJson[indexName]);
    } else {
        console.log('Khong tim thay ten!');
    }
}
const sortStudentByNameASC = () => {
    studentJson.sort((a, b) => (a.name).localeCompare(b.name));
    console.log(studentJson);
}
const sortStudentAge = () => {
    studentJson.sort((a, b) => (a.age-b.age));
    console.log(studentJson);
}

while (true) {
    switch (parseInt(choose)) {
        case 0:
            ShowMenu();
            choose = readlineSync.question('Your choose?');
            break;
        case 1:
            console.log(studentJson);
            choose = 0;
            break;
        case 2:
            createStudent();
            choose = 0;
            break;
        case 3:
            deleteStudent();
            choose = 0;
            break;
        case 4:
            editStudent();
            choose = 0;
            break;
        case 5:
            findStudentByName();
            choose = 0;
            break;
        case 6:
            sortStudentByNameASC();
            choose = 0;
            break;
        case 7:
            sortStudentAge();
            choose = 0;
            break;
        case 8:
            process.exit();
            break;
    
        default:
            break;
    }
}