"use strict";
// Index Signatures
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// console.log(todaysTransaction.Pizza);
// console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction.toString()];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
