// Student Managerment 
// ===============================
//  1.Show all student
//  2.Create student and return Menu
//  3.Delete student
//  4.Edit student
//  5.Find student by name
//  6.Sort student by name ascending 
//  7.Sort student by age ascending 
//  8.Exit
// Your chose?

const fs = require('fs');
const readlineSync = require('readline-sync'); 

var listStudent = [];
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

const showAll = () => {
    try {

        const data = fs.readFileSync('./data.json', 'utf8');
    
        const databases = JSON.parse(data);
    
        // print all databases
        databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`);
        });

    
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
      console.log(listStudent);
};

// fs.writeFileSync('./test.txt', 'Ghi du lieu vao file test ');

const createStudent = () => {
    // let listStudent = [];
    let name = readlineSync.question('Name? ');
    let age = readlineSync.question('Age? ');
    // let gender = readlineSync.question('Gender? ');

    let chooseGender = ['male', 'female', 'other'] ;
    let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');

    let students = {name: '', age: '', gender: ''} ;
    students.name = name;
    students.age = age;
    students.gender = chooseGender[getIndexGender];
    listStudent.push(students);
    console.log(listStudent);
    let writeStudent = 'name: '+ name + ' - age: ' + age + ' - gender: ' + chooseGender[getIndexGender] + '\n';
    // fs.writeFileSync('./dataJson.txt', writeStudent, fs.appendFile);
    fs.writeFileSync('./data.json', JSON.stringify(students, true, 2) , 'utf-8');
};

const deleteStudent = () => {
    let nameDelete = readlineSync.question('Name delete? ');
    for (let i = 0; i < listStudent.length; i++) {
        if(nameDelete === listStudent[i].name) {
            listStudent.splice(i, i);
        }
    }
    console.log(listStudent);
}

const main = () => {
    let choose;
    do {
        ShowMenu();
         choose = readlineSync.question('Your choose?');
         console.log('your choose is ' + choose);
        switch (choose) {
            case '1':
                showAll();
                break;
            
            case '2':
                createStudent();
                break;
            
            case '3':
                deleteStudent();
                break;
            
            case '4':

                break;
            
            case '5':

                break;
            
            case '6':

                break;
            
            case '7':

                break;
            
            case '8':
                break;
            
            default:
                break;
        }
    } while(choose!='8');
};

main();


// createStudent();
// createStudent();
// createStudent();
// deleteStudent();
// showAll();
