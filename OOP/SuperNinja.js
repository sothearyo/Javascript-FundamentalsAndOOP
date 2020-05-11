// Extend the Ninja class and create the Sensei class

// Parent Ninja Class
class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(this);
    }
    drinkSake(){
        this.health += 10;
    }
}

// Child Sensei class
class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Work smarter not harder");
    }
}

const superSensei = new Sensei("Master Splinter");
// console.log(superSensei);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
