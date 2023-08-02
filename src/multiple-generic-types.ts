//*multiples generic types

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  };
}

const comboObj = merge({name: 'Robin'}, {pets: [18, 8]});

//* constraint generic types
interface Hero {
  power: number; 
}
// Can type parameters as a generic type or with an interface
function printPower<T extends Hero>(power: T): number {
  return power.power * 2;
}

function printPower2<T extends Hero>(power: Hero): number {
  return power.power * 2;
}

//* Default types

// with = assing a generic as a primitive by default
function makeListEmpty<T = number>(): T[] {
  return [];
}

const chars = makeListEmpty();
const bools = makeListEmpty<boolean>();

//* Genetic types
interface Video {
  title: string;
  length: number;
  resolution: number;
}
interface Song {
  title: string;
  length: number;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongPlaylist {
  public songs: Song[] = [];
}

class Playlist<T> {
  public queu: T[] = [];
  add(item: T) {
    this.queu.push(item)
  }
  remove(ele: T) {
    return this.queu.filter((item: T) => item !== ele)
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

// videos.remove()
// songs.add()