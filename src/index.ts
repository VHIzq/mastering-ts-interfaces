//* type narrowing

//? guard type of

function triple(value: number | string) {
  typeof value === 'string' ? value.repeat(3) : value * 3;
}

//? truthiness guards

const $el = document.getElementById('cta');
if ($el) {
  $el;
} else {
  $el;
}

const getAssets = (asset?: string) => {
  if (asset) {
    for (const char of asset) {
      console.log(char);
    }
  } else {
    console.log('You didnt pass in a word');
  }
};

//? Equality narrowing
const someDemo = (x: string | number, y: string | boolean) => {
  if (x === y) {
    x.toLowerCase();
  }
};
someDemo('3', false);

//? in operator
interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  numChapters: number;
  episodeLength: number;
}

const getRunTime = (media: Movie | TvShow) => {
  if ('numChapters' in media) {
    const { numChapters, episodeLength } = media;
    return numChapters * episodeLength;
  }
  return media.duration;
};

//console.log(getRunTime({ title: 'Gladiator', duration: 150 }));
/* console.log(
  getRunTime({ title: 'Yugioh', numChapters: 124, episodeLength: 20 })
); */

//? Instanceof
const printFullDate = (date: string | Date) => {
  date instanceof Date
    ? console.log(date.toUTCString())
    : console.log(new Date(date).toUTCString());
};

class User {
  constructor(public userName: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.userName);
  } else {
    console.log(entity.name);
  }
}

//? Type predicate
interface Cat {
  name: string;
  lives: number;
}

interface Dog {
  name: string;
  breed: number;
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return (animal as Cat).lives !== undefined;
};

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) {
    return 'Meow';
  } else {
    return 'Wooaf';
  }
};

//? Discriminated union
interface Rooster {
  name: string;
  age: string;
  weight: number;
  kind: 'rooster';
}
interface Cow {
  name: string;
  age: string;
  weight: number;
  kind: 'cow';
}
interface Pig {
  name: string;
  age: string;
  weight: number;
  kind: 'pig';
}
interface Sheep {
  name: string;
  age: string;
  weight: number;
  kind: 'pig';
}

type Animal = Rooster | Pig | Cow | Sheep;

const getFarmSoundAnimal = (animal: Animal) => {
  switch(animal.kind) {
    case 'rooster':
      return 'Kikiri ki';
    case 'cow':
      return 'Muuuuu';
    case 'pig':
      return 'oink oink';
    default:
      const mustAssignANewCase: never = animal;
      return mustAssignANewCase
  }
}

const lola: Cow = {
  name: 'Lola',
  weight: 1,
  age: '2',
  kind: 'cow'
}

const sound = getFarmSoundAnimal(lola);
console.log(sound);

