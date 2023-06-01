// // interface Incomes{
// //   [key: string]: number;
// // }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>;

// The possible keys are 'salary', 'bonus', and 'sidehustle'
const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
}

function printIncome(income: Incomes):void{
  for(const revenue in income){
    console.log(income[revenue as Streams]);
  }
}

printIncome(monthlyIncomes);


// // Instead of providing an index signature for Incomes, we can use keyof
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}



// // Record<string, number> is equivalent to { [key: string]: number }
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25,
}
