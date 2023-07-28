"use strict";
var Power;
(function (Power) {
    Power[Power["Psych"] = 0] = "Psych";
    Power[Power["Fly"] = 1] = "Fly";
    Power[Power["Beams"] = 2] = "Beams";
    Power[Power["Strength"] = 3] = "Strength";
    Power[Power["Devices"] = 4] = "Devices";
})(Power || (Power = {}));
class Hero {
    constructor(nickName, power) {
        this.nickName = nickName;
        this.power = power;
    }
    greetPeople() {
        console.log('Hello Citizen');
    }
}
class FullTimeHero extends Hero {
    savePeople() {
        return 'Save 1K Citizens from that bomb explotion';
    }
}
