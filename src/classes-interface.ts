(() => {
  interface Card {
    name: string;
  }

  interface MonsterCard extends Card {
    atk: number;
    def: number;
  }

  interface MagicCard {
    effect(): void;
  }

  class Dragon implements MonsterCard {
    constructor(public name: string, public atk: number, public def: number) {}
  }

  class Magician implements MonsterCard {
    constructor(public name: string, public atk: number, public def: number) {}
  }

  const bluEyesDragon = new Dragon('Blue Eyes Dragon', 3000, 2500);

  const blackMagician = new Magician('Black Magician', 2500, 2200);
})();
