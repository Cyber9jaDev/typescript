"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // k: 30
};
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
// console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction.toString()];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Dave',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
// for (const key in student){
//   console.log(`${key}:${student[key]}`);
// }
Object.keys(student).map((key) => {
    // console.log(`${key}: ${student[key]}`);
    // console.log(student[key as keyof typeof student]);
});
// Just like a reference to Student Interface
const logStudentKey = (student, key) => {
    // console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes'); // Student classes: [100, 200]
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
// Instead of providing an index signature for Incomes, we can use keyof
for (const revenue in monthlyIncomes) {
    // console.log(monthlyIncomes[revenue as keyof Incomes])
}
