"use strict";
// // interface Incomes{
// //   [key: string]: number;
// // }
// The possible keys are 'salary', 'bonus', and 'sidehustle'
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
function printIncome(income) {
    for (const revenue in income) {
        console.log(income[revenue]);
    }
}
printIncome(monthlyIncomes);
// // Instead of providing an index signature for Incomes, we can use keyof
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// // Record<string, number> is equivalent to { [key: string]: number }
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25,
};
