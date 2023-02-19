const { info } = require('console');
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
    console.log('7.List student warned (score average < 4');
    console.log('8.Sort student by name ascending ');
    console.log('9.Sort student by age ascending ');
    console.log('10.Sort student by score average ascending ');
    console.log('11.Exit');
}

const showAll = () => {
    try {

        const data = fs.readFileSync('./dataJson.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}

const createStudent = () => {
    // id, tên, tuổi, giới tính, điểm vào trường, điểm trung bình 
    let student = {id: '', name: '', age: '', gender: '', transcript: '', GPA: ''} ;
    student.id = readlineSync.question('ID? ');
    student.name = readlineSync.question('Name? ');
    student.age = readlineSync.question('Age? ');
    let chooseGender = ['male', 'female', 'other'] ;
    let getIndexGender = readlineSync.keyInSelect(chooseGender, 'choose Gender');
    student.gender = chooseGender[getIndexGender];
    student.transcript = readlineSync.question('Transcript? ');
    // while (typeof (student.transcript) != 'number') {
    //     console.log('Transcript must a number!');
    //     student.transcript = readlineSync.question('Transcript? ');
    // }
    student.GPA = readlineSync.question('GPA? ');

    // let studentJSON = JSON.parse(student.toString());
    let studentJSON = '{'+'"id": "'+student.id + '", "name": "'+ student.name + '", "age": "'+ student.age + '", "gender": "'+ student.gender + '", "transcript": "'+ student.transcript + '", "gpa": "' + student.GPA +'" }' + '\n';
    fs.appendFileSync('./dataJson.txt', studentJSON, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
      showAll();
}

const deleteStudent = () => {
    try {

        let idDelete = readlineSync.question('ID of the student want to delete? ');

        const data = fs.readFileSync('./dataJson.txt', 'utf8');
        if(data.indexOf('"id": "'+ idDelete + '"')) {
            var linesExceptFirst = data.split('\n').slice(data.indexOf('"id": "'+ idDelete + '"')).join('\n');
            fs.writeFile('./dataJson.txt', linesExceptFirst, function(err, data) { if (err) {/** check and handle err */} });
        }

    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }

}


const main = () => {
    let choose;
    do {
        ShowMenu();
         choose = readlineSync.question('Your choose?');
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
            case '9':
                break;
            case '10':
                break;
            case '11':
                break;
            
            default:
                break;
        }
    } while(choose!='11');
};

main();