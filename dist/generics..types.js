"use strict";
(() => {
    //* generics
    const numbs = [];
    const colors = [];
    const $name = document.querySelector('#username');
    console.dir($name);
    const $btn = document.querySelector('btn');
    //* custom generic
    const numberIdentity = (item) => {
        return item;
    };
    const stringIdentity = (item) => {
        return item;
    };
    const booleanIdentity = (item) => {
        return item;
    };
    /* const identity = (item: any): any => {
      return item;
    } */
    function identity(item) {
        return item;
    }
    identity;
    identity(true);
    identity(7);
    identity({ nickname: 'Raven', strength: 8700 });
    function getRandomElement(list) {
        const randIndex = Math.floor(Math.random() * list.length);
        return list[randIndex];
    }
    getRandomElement(['a', 'b', 'c', 'd']);
    getRandomElement([19, 23, 34]);
})();
