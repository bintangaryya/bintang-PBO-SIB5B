class Enemy{
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    dead: boolean = false;

    constructor(
        hp: number,
        attack: number,
        defense: number,
        speed: number,
        
    ) {
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.speed = speed
        
    }

    basicAttack(): number{
        return this.attack = 100
    }

    
}

class Lord extends Enemy{
    constructor(){
        super(100,100,100,100,)
    }
    basicAttack(): number{
        return this.attack = 200
    }

    isDead(): boolean{
        this.dead = true
        console.log(`Lord telah mati`)
        return this.dead
    }
}

class Turtle extends Enemy{}
class BlueWolf extends Enemy{}
class RedDragon extends Enemy{}


const lord = new Lord()
console.log(lord.basicAttack())
lord.isDead()
