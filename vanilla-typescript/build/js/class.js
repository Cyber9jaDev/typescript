"use strict";
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
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.lang = lang;
        this.age = 25;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 23);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Pop', 23);
console.log(Sara.getLang());
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${this.instrument} ${action}`;
    }
}
const Orlando = new Pianist('Orlando Owo', 'Piano');
console.log(Orlando.play('for a living'));
/////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Jane = new Peeps('Jane');
const Jack = new Peeps('Jack');
console.log(Jack.id);
console.log(Jane.id);
console.log(John.id);
console.log(Peeps.count);
