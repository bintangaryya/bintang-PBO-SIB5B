// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {   
    hp: number;
    speed: number;
    currentForm: "mario" | "super mario" | "fire mario";
    invicible: boolean;
    positionX: number = 0;
    positionY: number = 0;

    constructor(
        hp: number = 1,
        speed: number = 5,
        currentForm: "mario" | "super mario" | "fire mario" = 'mario',
        invicible: boolean = false,
        positionX: number = 0,
        positionY: number = 0,
    ) {
        this.hp = hp;
        this.speed = speed;
        this.currentForm = currentForm;
        this.invicible = invicible;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    moveRight(): number {
        this.positionX += this.speed 
        return this.positionX
    }

    moveLeft(): number {
        this.positionX -= this.speed 
        return this.positionX
    }

    superStar(): void{
        this.invicible = true
        console.log(`Mario kebal terhadap serangan`)
    }

    getDamage(): void{
        if (this.invicible) {
            console.log("Serangan tidak berpengaruh")
        } else {
            this.hp -=1;
            this.currentForm = "mario";
            console.log(`Mario diserang, HP berkurang menjadi ${this.hp} dan kembali menjadi ${this.currentForm}`)
        }
    }
}
    
class superMario extends Mario{
    superMushroom(): void{
        this.currentForm = "super mario"
        this.hp += 1
        
        console.log(`Mario menjadi Super Mario, HP ${this.hp}`)
    }
    constructor() {
        super()
        
    }
}

class fireMario extends Mario{
    fireFlower(): void{
        this.currentForm = "fire mario"
        this.hp += 1
        console.log(`Mario menjadi Fire Mario, HP ${this.hp}, dan dapat menembakan bola api`)
    }
    constructor() {
        super()
    }
}


const merah = new Mario()
const putih = new fireMario()
const kuning = new superMario()


console.log(merah.moveLeft())
kuning.superMushroom()
kuning.getDamage()
putih.fireFlower()
putih.getDamage()