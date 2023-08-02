(() => {
  enum Power {
    Psych,
    Fly,
    Beams,
    Strength,
    Devices
  }

  abstract class Hero {
    constructor(public nickName: string, public power: Power) {}

    abstract savePeople(): string;

    greetPeople() {
      console.log('Hello Citizen');
    }
  }

  class FullTimeHero extends Hero {
    constructor(
      public nickName: string,
      public power: number,
      private address: string
    ) {
      super(nickName, power);
    }

    savePeople(): string {
      return 'Save 1K Citizens from that bomb explotion';
    }
  }
})();
