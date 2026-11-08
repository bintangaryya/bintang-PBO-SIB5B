// =====================================================================
//  SOAL: Pertarungan RPG dengan OOP (TypeScript)
// =====================================================================
//  Karakter memiliki atribut: name, HP (private), attackPower, mana.
//  Ada 3 job: 'Warrior', 'Mage', dan 'Archer'.
//  Musuh (Monster) juga termasuk Karakter.
//
//  Default: HP = 100, attackPower = 10, mana = 50
//
//  1. Warrior: HP awal 150.
//     attack(): damage = attackPower + 5.
//     takeDamage(): damage yang diterima dikurangi 20%.
//  2. Mage: mana awal 100.
//     attack(): damage = attackPower x 2, menghabiskan 20 mana.
//     Jika mana < 20, serangan gagal (damage 0).
//  3. Archer:
//     attack(): damage = attackPower.
//     Setiap serangan ke-3, damage menjadi 2x lipat.
//  4. Monster: HP awal 200, attackPower 15.
//     attack(): damage = attackPower.
//  5. takeDamage(amount): HP berkurang sebesar amount, HP tidak
//     boleh kurang dari 0.
//  6. isAlive(): true jika HP > 0.
//  7. attack(target): menghitung damage sesuai job, lalu memanggil
//     target.takeDamage(damage).
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance, polymorphism, dan encapsulation.
//  Gunakan abstract class untuk induk 'Karakter'.
// =====================================================================

// Kerjakan Quiznya Disini
class Karakter {
    HP: number;
    attackPower: number;
    mana: number;

    constructor(
        HP: number = 100, 
        attackPower: number = 10, 
        mana: number = 50
    ) {
        this.HP = HP;
        this.attackPower = attackPower;
        this.mana = mana;
    }
    
    takeDamage(amount: number){
        this.HP -= amount
        return this.HP
    }

    isAlive(): boolean{
        return this.HP > 0
    }

    attacking(target: Karakter): void{
        target.takeDamage(this.attackPower)
    }
}

class Warrior extends Karakter{
    constructor() {
        super(150)
    }

    attacking(target: Karakter): void{
        target.takeDamage(this.attackPower + 5)
    }

    getDamage(amount: number): void{
        super.takeDamage(amount * 0.8)
    }    
}
class mage extends Karakter{
    constructor() {
        super(100, 10, 100)
    }

    attacking(target: Karakter): void{
        if (this.mana < 20) {
            console.log(`Serangan gagal, mana anda tersisa ${this.mana}`)
        }
        this.mana -= 20
        target.takeDamage(this.attackPower * 2)
    }
}
class Archer extends Karakter{}
class Monster extends Karakter{
    constructor(){
        super(200,15,50)
    }

    attacking(target: Karakter): void{
        super.attacking(target)
        console.log(`melakukan serangan ${this.attackPower}`)
    }
}

const P1 = new Warrior()
const P2 = new Warrior()
const P3 = new mage()
const P4 = new Monster()

P1.attacking(P2)
console.log(P2.HP)
P3.attacking(P1)
console.log(P3.mana)
P3.attacking(P1)
console.log(P3.mana)
P3.attacking(P1)
console.log(P3.mana)
P3.attacking(P1)
console.log(P3.mana)
P3.attacking(P1)
console.log(P3.mana)
P3.attacking(P1)
P4.attacking(P1)