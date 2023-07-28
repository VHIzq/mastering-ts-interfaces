"use strict";
(() => {
    class Dragon {
        constructor(name, atk, def) {
            this.name = name;
            this.atk = atk;
            this.def = def;
        }
    }
    class Magician {
        constructor(name, atk, def) {
            this.name = name;
            this.atk = atk;
            this.def = def;
        }
    }
    const bluEyesDragon = new Dragon('Blue Eyes Dragon', 3000, 2500);
    const blackMagician = new Magician('Black Magician', 2500, 2200);
})();
