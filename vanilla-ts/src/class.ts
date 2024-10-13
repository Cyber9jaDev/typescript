// class Point{
//   x : number;
//   y : number;

//   constructor(x: number, y:number){
//     this.x = x;
//     this.y = y;
//   }
// }

// const point = new Point(2,3);

// point.x = 0;
// point.y = 0;
// console.log(point);

class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.lang = lang;
    this.age = 25;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 23);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang)

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Pop", 23);

console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

/////////////////////////////////////////////////////////////////////
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Pianist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} plays ${this.instrument} ${action}`;
  }
}

const Orlando = new Pianist("Orlando Owo", "Piano");
console.log(Orlando.play("for a living"));

/////////////////////////////////////////////////
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Jane = new Peeps("Jane");
const Jack = new Peeps("Jack");
const Jackal = new Peeps("Jackal");

console.log(Jack.id);
console.log(Jane.id);
console.log(John.id);
console.log(Peeps.count);
console.log(Peeps.getCount());

//////////////////////////////////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["Pink Floyd", "Queen", "Metallica"];
console.log(myBands.data);

/////////////////////////////////////////////////////////////
