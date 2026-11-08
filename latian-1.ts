class Knight{
    hp: number = 100;
    attackPower: number = 20;
    stamina: number = 50;
    weaponForm: 'sword' | 'dual blade' | 'great sword' = 'sword';
    positionX: number = 0;

    moveRight(){
        this.positionX += 10
        return this.positionX
    }
    moveLeft(){
        this.positionX -= 10
        return this.positionX
    }
    takeDamage(damage: number){
        this.hp -= damage;

        if(this.hp <= 0) {
            console.log("ksatria telah gugur")
            return this.hp
        } else {
            console.log(`sisa HP ksatria: ${this.hp}`)
        }
    }
}

class Paladin extends Knight{
    findDualBlade(){
        this.weaponForm = 'dual blade';
        this.attackPower += 15;
        console.log(`senjatamu berubah menjadi ${this.weaponForm} dan kekuatannya adalah ${this.attackPower}`)
    }
}

class Berseker extends Knight{
    findGreatSword(){
        this.weaponForm = 'great sword';
        this.hp += 50;
        console.log(`anda mendapatkan senjata${this.weaponForm} dan memiliki hp sebesar ${this.hp}`)
    }
}

const satu = new Paladin() 

console.log(satu.moveLeft())
console.log(satu.moveRight())
satu.takeDamage(101)
