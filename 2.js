// Capitalize Every first Letter of each word in a String

const Letters='the quick brown fox jumps over the lazy dog';
let Letters2=[];

function Capitalize(Letters){

    const Letter=Letters.split(' ')
    for(const word of Letter){

const char=word.split('');
const removeFirstChar=char.shift();
const firstCharCapital=removeFirstChar.toUpperCase();
char.unshift(firstCharCapital);
const charJoin=char.join('');
Letters2.push(charJoin)
}
const finalOutput=Letters2.join(' ')
return finalOutput;
}
const output=Capitalize(Letters);
console.log(output)
