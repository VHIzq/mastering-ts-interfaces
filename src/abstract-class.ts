(() => {
  enum Power  {
    Psych,
    Fly,
    Beams,
    Strength,
    Devices
  }
  
  
  abstract class Hero {
    constructor(
      public nickName: string,
      public power: Power
    ) {}
  
    abstract savePeople(): string;
  
    greetPeople() {
      console.log('Hello Citizen');
    }
  }
  
  
  class FullTimeHero extends Hero {
    savePeople(): string {
      return 'Save 1K Citizens from that bomb explotion';
    }
  }
})()