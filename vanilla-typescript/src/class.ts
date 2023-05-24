class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;
  
  constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'Typescript') {
    this.name = name;
    this.music = music;
    this.lang = lang;
    this.age = 25;
  }


  public getAge(){
    return `Hello, I'm${this.age}`
  }
}


const Dave = new Coder('Dave', 'Rock', 23);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);