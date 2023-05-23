interface Guitarist {
  name: string,
  active: boolean,
  albums: ( string | number )[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [ 1984, 5150, 'The Dark Side of the Moon', 'The Wall' ]
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: [ 'The Wall', 'The Dark Side of the Rain', 1984, 5150 ]
}

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`
}


console.log(greetGuitarist(jp))