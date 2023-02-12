const readlineZync = require('readline-sync');

var username = readlineZync.question('Enter the name: ');
console.log('Hi ' + username);
var favFood = readlineZync.question('What is your favorite food?', {hideEchoBack: true});
console.log('Oh '+ username + ' loves ' + favFood);
// if (readlineSync.keyInYN('Do you want this module?')) {
//     // 'Y' key was pressed.
//     console.log('Installing now...');
//     // Do something...
//   } else {
//     // Another key was pressed.
//     console.log('Searching another...');
//     // Do something...
//   }