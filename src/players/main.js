class Player {
    constructor(name, age, position, attackScore, defenceScore, height){
        this.name = name;
        this.age = age;
        this.position = position;
        this.attackScore = attackScore;
        this.defenceScore = defenceScore;
        this.height = height;
    }
}


class Forward extends Player{
    constructor(name, age, attackScore, height){
        super(name, age, 'forward', attackScore, 50, height);
    }

    attack() {
        console.log("chute");
    }
}

let vanBasten = new Forward("Marco Van Basten", 21, 99, 185);
vanBasten.attack();