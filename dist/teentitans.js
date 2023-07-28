"use strict";
(() => {
    let TeenTitans;
    (function (TeenTitans) {
        TeenTitans[TeenTitans["Robin"] = 0] = "Robin";
        TeenTitans[TeenTitans["Starfire"] = 1] = "Starfire";
        TeenTitans[TeenTitans["BB"] = 2] = "BB";
        TeenTitans[TeenTitans["Raven"] = 3] = "Raven";
        TeenTitans[TeenTitans["Cyborg"] = 4] = "Cyborg";
    })(TeenTitans || (TeenTitans = {}));
    const food = [
        'pizza',
        'tofu',
        'green tea',
        'soy mikl',
        'vegetables'
    ];
    class TeenTitan {
        constructor(weapon, fightMate, inLove, name) {
            this.life = 800;
            this.weapon = weapon;
            this.fightMate = fightMate;
            this.inLoveMate = inLove;
            this.name = name;
        }
        get humanName() {
            return `${this.name}`;
        }
        set newHumanName(newName) {
            this.name = newName;
            console.log(`${newName}`);
        }
        static favoriteFood() {
            const myFavFood = Math.random() * (0 - 4) + 0;
            return food[myFavFood];
        }
        power(factor) {
            const power = factor * this.name.length * 800;
            console.log(power);
        }
        fight() {
            console.log(`${this.fightMate} helps to Kicking Slider Ass with ${this.weapon}`);
        }
        lifeSpan(factor) {
            this.life *= factor;
            console.log(`The ${this.fightMate} life span is ${this.life}`);
        }
        isWinner(range) {
            const randomNumber = Math.random() * range;
            const isWinner = randomNumber > 0.5 ? 'Winner' : 'Lose';
            console.log(isWinner);
        }
        knowCrush() {
            console.log(`The crush from her/his is ${this.inLoveMate}`);
        }
    }
    TeenTitan.power = 9500;
    class NewTitans extends TeenTitan {
        constructor(weapon, name, inLove, fightMate) {
            super(weapon, name, inLove, fightMate);
            this.weapon = weapon;
        }
    }
    const robin = new TeenTitan('boomerang', 'Starfire', 'Starfire', 'Dick');
    robin.fight();
    robin.isWinner(9);
    robin.lifeSpan(6);
    console.log(robin.humanName);
    const raven = new TeenTitan('psych', 'BB', 'BB', 'Rachel');
    raven.fight();
    raven.lifeSpan(2);
    raven.knowCrush();
    raven.isWinner(1);
    raven.newHumanName = 'The daughert';
    console.log(raven.name);
    raven.power(2);
    TeenTitan.favoriteFood();
})();
