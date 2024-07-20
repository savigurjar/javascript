// const name = "v";
// const age = 30;
// console.log('hello ${name} and ${age}');

const name = "v";
const age = 30;
console.log(`hello ${name} and ${age}`);

const songName = new String('singularity','stigma','inner-child')
console.log(songName);
console.log(songName[7]);
console.log(songName.length);
console.log(songName.toUpperCase());
console.log(songName.charAt(10));
console.log(songName.indexOf('t'));
console.log(songName.__proto__);

const newSong = songName.substring(0,7) 
console.log(newSong);

const anotherSong = songName.slice(-8,4) //can use negative value in slice
console.log(anotherSong);

const newSongOne  = "   taetae   "
console.log(newSongOne);
console.log(newSongOne.trim()); //it will remove extra spaces start and end

const url = "https://google.com%7"
console.log(url.replace('%7', '-')) //it will replace
console.log(url.includes('gle'))

console.log(songName.split('-'));