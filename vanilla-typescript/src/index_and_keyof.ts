// Index Signatures

// interface TransactionObj{
//   // readonly [index: string] : number;
//   [index: string] : number;
// }

interface TransactionObj{
  readonly[index: string]: number;
  // Pizza: number;
  // Books: number;
  // Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  // k: 30
}

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
// console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction.toString()];
  }
  return total;
}

// console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 100;
// console.log(todaysTransactions['Dave']);

// ////////////////////////////////////////////////////////////////////
interface Student{
  [key: string]: number | string | number[] | undefined,
  // name: string, 
  // GPA: number,
  // classes?: number[]
}

const student: Student = {
  name: 'Dave',
  GPA: 3.5,
  classes: [100, 200]
}

interface Department{
  // [index: string]: string
  faculty: string,
  hod: string,
  code: string
}

const AgricEngineering: Department = {
  faculty: 'Technology',
  hod: "Dr. Henry",
  code: 'TAE'
}

const printDept = (dept: Department): void => {
  Object.keys(dept).map(key => console.log(dept[key as keyof Department]))
}

printDept(AgricEngineering);

for (const key in student){
  console.log(`${key}:${student[key]}`);
}

Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key]}`);
  console.log(typeof student);  //object
  console.log(student[key as keyof typeof student]);
});

// Just like a reference to Student Interface
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'classes'); // Student classes: [100, 200]

/////////////////////////////////////////////////////////////////////

