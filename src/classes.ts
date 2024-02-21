(() => {
  /* class Duelist {
  readonly firstName: string;
  readonly lastName: string;

  public score: number = 0;
  private card: string;

  private hasMilleniumObject: boolean = false;

  constructor(firstName: string, lastName: string, card: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.card = card;
    this.secretCard(card);
  }

  private secretCard(card: string): void {
    console.log(card);
  }
}

const joey = new Duelist('Joey', 'Wheeler', 'Red Eyes Dragon'); */

  class Duelist {
    constructor(
      public firstName: string,
      public lastName: string,
      protected _score: number,
      private _secretCard: string,
      private _hasMilleniumObject: boolean
    ) {}

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    get objectMillenium() {
      return this._hasMilleniumObject;
    }

    set objectMillemium(object: boolean) {
      const hasObject = !!this._hasMilleniumObject;
      if (hasObject) {
        console.log(`${this.firstName} has ${object} Object`);
      }
      console.log(`${this.firstName} doesn't have a Millenium Object`);
    }
  }

  class DarkDuelist extends Duelist {
    maxScore() {
      this._score = 100;
    }
  }

  const joey = new Duelist("Joey", "Wheeler", 4, "RED", false);
  console.log(joey);

  console.log(joey.fullName);
  console.log(joey.objectMillenium);

  const yugi = new Duelist("Yugi", "Moto", 9, "BM", true);
  console.log(yugi);
  console.log(yugi.objectMillenium);
})();
