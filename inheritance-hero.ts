class Hero{
    health: number;
    attack: number;
    magicalDefense: number;
    physicalDefense: number;
    basicAttack: number;

    constructor(
        health: number,
        attack: number,
        magicalDefense: number,
        physicalDefense: number,
        basicAttack: number,
    ) {
        this.health = health;
        this.attack = attack;
        this.magicalDefense = magicalDefense;
        this.physicalDefense = physicalDefense;
        this.basicAttack = basicAttack
    }

    getHealth() {
        return `This Health ${this.health}`
    }

    attacking() {
        console.log("kamu menyerang")
    }
}

class Fighter extends Hero{
    spellVamp: number;

    constructor(
        health: number,
        attack: number,
        magicalDefense: number,
        physicalDefense: number,
        basicAttack: number,
    ) {
        super(health, attack, magicalDefense, physicalDefense, basicAttack);
        this.spellVamp = 10
    }

    attacking(): void {
        super.attacking()
        console.log("kamu melakukan serangan")
    }
}

class Mage extends Hero{
    magicalAttack: number;

    constructor(
        health: number,
        attack: number,
        magicalDefense: number,
        physicalDefense: number,
        basicAttack: number,
    ) {
        super(health, attack, magicalDefense, physicalDefense, basicAttack)
        this.magicalAttack = 10
    }
}

class Support extends Hero{
    constructor(
        health: number,
        attack: number,
        magicalDefense: number,
        physicalDefense: number,
        basicAttack: number,
    ) {
        super(health, attack, magicalDefense, physicalDefense, basicAttack)
    }

    healing() {
        return this.health =+ 10
    }
}

const Rafaela = new Support(80, 20, 30, 30, 20)
const Roger = new Fighter(110, 80, 30, 40, 50)
console.log(Rafaela.healing())
console.log(Roger.attacking())