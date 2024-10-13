// ******************* Encapsulation*************************









// ******************* Encapsulation*************************
// class Player {
//   private speed: number;
//   private health: number;

//   setHealth(health: number) {
//     if (health < 0){
//       console.log('Forbidden!');
//     };

//     this.health = health;
//   }

//   getHealth(): number {
//     return this.health;
//   }

//   setSpeed(speed: number) {
//     this.speed = speed;
//   }

//   getSpeed(): number {
//     return this.speed;
//   }
  
// }

// const mario = new Player();
// mario.setHealth(-5);
// mario.setHealth(7);
// mario.setSpeed(1);

// console.log(`Mario has ${mario.getHealth()}/10 health`);
// console.log(`Mario has speed of ${mario.getSpeed()}`);



// ************************ 1 *******************************
// class Player {
//   constructor(
//     public name: string,
//     public health: number,
//     public isInvincible : boolean,
//     public crush?: Player,
//   ){}

//   greet(){
//     console.log(`Hello ${this.name}`);
//   }
  
// }

// const mario = new Player('Mario', 3, true);
// // mario.name = 'Mario'
// // mario.health = 100
// // mario.isInvincible = false

// const peach = new Player('Peach', 43, false);
// // peach.name = 'Peach'
// // peach.health = 0
// // peach.isInvincible = true

// // 
// // mario.crush = peach
// // console.log(mario.crush.name);
// mario.greet();
// peach.greet();


