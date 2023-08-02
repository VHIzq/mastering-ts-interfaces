(() => {
  //* generics

const numbs: Array<number> = [];
const colors: Array<string | number> = [];

const $name = document.querySelector<HTMLInputElement>('#username')!;
console.dir($name);

const $btn = document.querySelector<HTMLButtonElement>('btn')!;

//* custom generic

const numberIdentity = (item: number): number => {
  return item;
}

const stringIdentity = (item: string): string => {
  return item;
}

const booleanIdentity = (item: boolean): boolean => {
  return item;
}

/* const identity = (item: any): any => {
  return item;
} */

function identity<type>(item:type): type {
  return item;
}

interface Hero {
  nickname: string;
  strength: number;
}

identity<string>;
identity<boolean>(true);
identity<number>(7);
identity<Hero>({nickname: 'Raven', strength: 8700});

function getRandomElement<T>(list: Array<T>): T {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}

getRandomElement<string>(['a', 'b', 'c', 'd']);
getRandomElement<number>([19, 23, 34]);
})()