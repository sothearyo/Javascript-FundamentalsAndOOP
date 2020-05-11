// Create a class

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

const newNinja = new Ninja("Theary",10);
// console.log(newNinja);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
newNinja.showStats();
