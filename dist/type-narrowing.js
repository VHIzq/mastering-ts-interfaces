"use strict";
(() => {
    //* type narrowing
    //? guard type of
    function triple(value) {
        typeof value === 'string' ? value.repeat(3) : value * 3;
    }
    //? truthiness guards
    const $el = document.getElementById('cta');
    if ($el) {
        $el;
    }
    else {
        $el;
    }
    const getAssets = (asset) => {
        if (asset) {
            for (const char of asset) {
                console.log(char);
            }
        }
        else {
            console.log('You didnt pass in a word');
        }
    };
    //? Equality narrowing
    const someDemo = (x, y) => {
        if (x === y) {
            x.toLowerCase();
        }
    };
    someDemo('3', false);
    const getRunTime = (media) => {
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
    const printFullDate = (date) => {
        date instanceof Date
            ? console.log(date.toUTCString())
            : console.log(new Date(date).toUTCString());
    };
    class User {
        constructor(userName) {
            this.userName = userName;
        }
    }
    class Company {
        constructor(name) {
            this.name = name;
        }
    }
    function printName(entity) {
        if (entity instanceof User) {
            console.log(entity.userName);
        }
        else {
            console.log(entity.name);
        }
    }
    const isCat = (animal) => {
        return animal.lives !== undefined;
    };
    const makeNoise = (animal) => {
        if (isCat(animal)) {
            return 'Meow';
        }
        else {
            return 'Wooaf';
        }
    };
    const getFarmSoundAnimal = (animal) => {
        switch (animal.kind) {
            case 'rooster':
                return 'Kikiri ki';
            case 'cow':
                return 'Muuuuu';
            case 'pig':
                return 'oink oink';
            default:
                const mustAssignANewCase = animal;
                return mustAssignANewCase;
        }
    };
    const lola = {
        name: 'Lola',
        weight: 1,
        age: '2',
        kind: 'cow'
    };
    const sound = getFarmSoundAnimal(lola);
    console.log(sound);
})();
