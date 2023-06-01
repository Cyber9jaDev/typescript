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
const student = {
    name: 'Dave',
    GPA: 3.5,
    classes: [100, 200]
};
const AgricEngineering = {
    faculty: 'Technology',
    hod: "Dr. Henry",
    code: 'TAE'
};
const printDept = (dept) => {
    Object.keys(dept).map(key => console.log(dept[key]));
};
printDept(AgricEngineering);
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
    console.log(typeof student); //object
    console.log(student[key]);
});
// Just like a reference to Student Interface
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes'); // Student classes: [100, 200]
/////////////////////////////////////////////////////////////////////
