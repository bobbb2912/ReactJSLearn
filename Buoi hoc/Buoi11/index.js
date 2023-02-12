const shortid = require('shortid');
const {FormatMoney} = require('format-money-js');
const fs = require('fs');

console.log(shortid.generate);
const fm = new FormatMoney({
    decimals: 2
});
const product = [
    {id: shortid.generate(),
    name:'iphone'},
    {id: shortid.generate(),
    name:'iphone'},
];
// console.log(product);
console.log(fm.from(12000000.56, {Symbol:'vnd'})); //return string $12,345.67

// fs.readFile('Buoi hoc\Buoi11\agenda.txt', function(err, data)) {
//     if(err) throw err;
//     console.log(data.toString());
// };
