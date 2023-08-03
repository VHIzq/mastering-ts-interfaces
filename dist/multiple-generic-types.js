"use strict";
//*multiples generic types
function merge(object1, object2) {
    return {
        ...object1,
        ...object2
    };
}
const comboObj = merge({ name: 'Robin' }, { pets: [18, 8] });
// Can type parameters as a generic type or with an interface
function printPower(power) {
    return power.power * 2;
}
function printPower2(power) {
    return power.power * 2;
}
//* Default types
// with = assing a generic as a primitive by default
function makeListEmpty() {
    return [];
}
const chars = makeListEmpty();
const bools = makeListEmpty();
class VideoPlaylist {
    constructor() {
        this.videos = [];
    }
}
class SongPlaylist {
    constructor() {
        this.songs = [];
    }
}
class Playlist {
    constructor() {
        this.queu = [];
    }
    add(item) {
        this.queu.push(item);
    }
    remove(ele) {
        return this.queu.filter((item) => item !== ele);
    }
}
const songs = new Playlist();
const videos = new Playlist();
// videos.remove()
// songs.add()
