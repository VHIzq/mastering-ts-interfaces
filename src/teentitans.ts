(() => {
  enum TeenTitans {
    Robin,
    Starfire,
    BB,
    Raven,
    Cyborg
  }

  const food: string[] = [
    'pizza',
    'tofu',
    'green tea',
    'soy mikl',
    'vegetables'
  ];

  class TeenTitan {
    private inLoveMate: string;

    static power: number = 9500;

    name: string;
    weapon: string;
    fightMate: string;

    life: number = 800;

    constructor(
      weapon: string,
      fightMate: string,
      inLove: string,
      name: string
    ) {
      this.weapon = weapon;
      this.fightMate = fightMate;
      this.inLoveMate = inLove;
      this.name = name;
    }

    get humanName() {
      return `${this.name}`;
    }

    set newHumanName(newName: string) {
      this.name = newName;
      console.log(`${newName}`);
    }

    static favoriteFood() {
      const myFavFood = Math.random() * (0 - 4) + 0;
      return food[myFavFood];
    }

    power(factor: number) {
      const power = factor * this.name.length * 800;
      console.log(power);
    }

    fight() {
      console.log(
        `${this.fightMate} helps to Kicking Slider Ass with ${this.weapon}`
      );
    }
    lifeSpan(factor: number) {
      this.life *= factor;
      console.log(`The ${this.fightMate} life span is ${this.life}`);
    }
    isWinner(range: number) {
      const randomNumber = Math.random() * range;
      const isWinner = randomNumber > 0.5 ? 'Winner' : 'Lose';
      console.log(isWinner);
    }
    knowCrush() {
      console.log(`The crush from her/his is ${this.inLoveMate}`);
    }
  }

  class NewTitans extends TeenTitan {
    constructor(
      weapon: string,
      name: string,
      inLove: string,
      fightMate: string
    ) {
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
