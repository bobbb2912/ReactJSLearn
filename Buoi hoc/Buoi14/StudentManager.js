const fs = require('fs');
const readlineSync = require('readline-sync'); 

const ShowMenu = () => {
    console.log('Student Managerment ');
    console.log('===============================');
    console.log('1.Show all student');
    console.log('2.Create student and return Menu');
    console.log('3.Delete a student by ID');
    console.log('4.Delete students by ID');
    console.log('5.Edit student');
    console.log('6.Find student by name');
    console.log('7.Find valedictorian student');
    console.log('8.List student warned (score average < 4');
    console.log('9.Sort student by name ascending ');
    console.log('10.Sort student by age ascending ');
    console.log('11.Sort student by score average ascending ');
    console.log('12.Exit');
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


const createStudent = () => {
    let id = readlineSync.question('id? ');
    // let checkID = studentJson.filter((i) => i === id);
    // while((studentJson.filter((i) => i.id === id)) >= 0) {
    //   console.log('Id is exist. Enter id again: ');
    //    id = readlineSync.question('id? ');
    // };
    let name = readlineSync.question('Name? ');
    let age = readlineSync.question('Age? ');
    let chooseGender = ['male', 'female', 'other'] ;
    let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');
    let gender = chooseGender[getIndexGender];
    let score = readlineSync.question('Score? ');
    let GPA = readlineSync.question('GPA? ');
    studentJson.push({
        id:id,
        name: name,
        age:age,
        gender: gender,
        score: score,
        gpa: GPA
    });
    savefile();
}

const deleteStudentById = () => {
    const id = readlineSync.question('Enter id you want delete? ');
    if(studentJson.indexOf(id) >= 0) {
        const filterWithoutId = studentJson.filter((i) => i.id != id);
        studentJson = filterWithoutId;
        savefile();
    } else {
        console.log('Id is not exist!');
    }
}
const deleteListStudentById = () => {
    const idDelete = readlineSync.question('Enter list id you want delete? (ex: 1, 2) ');
    let listID = idDelete.split(',');
    console.log(listID);
    for (let i = 0; i < listID.length; i++) {
        if(studentJson.indexOf(listID[i]) >= 0) {
            const filterWithoutId = studentJson.filter((i) => i.id !== id);
            studentJson = filterWithoutId;
            savefile();
        } else {
            console.log('Id is not exist!');
        }
  
    }
    
}
const editStudent = () => {
    const idEdit = readlineSync.question('Enter ID do you want edit? ');
    let indexId = studentJson.findIndex((i) => i.id === idEdit);
    if(indexId >= 0) {
        let nameEdit = readlineSync.question('Name? ');
        let ageEdit = readlineSync.question('Age? ');
        let chooseGender = ['male', 'female', 'other'] ;
        let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');
        let genderEdit = chooseGender[getIndexGender];
        let scoreEdit = readlineSync.question('Score? ');
        let GPAEdit = readlineSync.question('GPA? ');
        const newStudent = {
            id:idEdit,
            name: nameEdit,
            age:ageEdit,
            gender: genderEdit,
            score: scoreEdit,
            gpa: GPAEdit
        };
        studentJson.splice(indexId, 1, newStudent);
    } else {
        console.log('Khong tim thay ID!');
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

const findValedictorianStudent = () => {
    let sortByScore = studentJson.sort((a, b) => b.score-a.score);
    console.log(sortByScore[0]);
}

const listStudentWarned = ()  => {
    let filerWarned = studentJson.filter((i) => i.gpa< 4);
    console.log(filerWarned);
}
const sortStudentByNameASC = () => {
    studentJson.sort((a, b) => (a.name).localeCompare(b.name));
    console.log(studentJson);
}
const sortStudentAge = () => {
    studentJson.sort((a, b) => (a.age-b.age));
    console.log(studentJson);
}

const sortByGPA = () =>  {
    let sortByGPA = studentJson.sort((a, b) => a.gpa - b.gpa);
    console.log(sortByGPA);
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
            deleteStudentById();
            choose = 0;
            break;
        case 4:
            deleteListStudentById();
            choose = 0;
            break;
        case 5:
            editStudent();
            choose = 0;
            break;
        case 6:
            findStudentByName();
            choose = 0;
            break;
        case 7:
            findValedictorianStudent();
            choose = 0;
            break;
        case 8:
            listStudentWarned();
            choose = 0;
            break;
        case 9:
            sortStudentByNameASC();
            choose = 0;
            break;
        case 10:
            sortStudentAge();
            choose = 0;
            break;
        case 11:
            sortByGPA();
            choose = 0;
            break;
        case 12:
            process.exit();
            break;
    
        default:
            break;
    }
}