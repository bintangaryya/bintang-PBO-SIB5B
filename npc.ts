class Npc {
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npcType: "walk" | "fly";


    constructor (
        health: number, 
        speed: number,
        defense: number, 
        attack: number, 
        npcType: "walk" | "fly"
    ) {
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;
    }
    
    walking() : number {
        this.speed =+ 2;
        return this.speed
     
    }

    attacking() : number  {
        this.attack =+2
        return this.attack
    }

    sprint() : number {
        this.speed =+4
        return this.speed
    }

    ultimateSkill() : number {
        this.attack =+ 10
        return this.attack
    }

    isFlying() : string {
        if(this.npcType === "fly"){
            this.speed =+ 10
            this.attack =+ 10
            return `NPC tersebut terbang`
        }
        return `Bukan NPC terbang`

    }
}

const harpy = new Npc (100, 10, 15, 20, "fly")
const goblin = new Npc (150, 15, 20, 25, "walk")

console.log(harpy.attacking())
console.log(goblin.isFlying())
console.log(harpy.sprint())

