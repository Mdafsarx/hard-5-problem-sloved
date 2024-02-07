// Check whether a string contains all the vowels a, e, i, o, u

const sentence='the quick brown fox jumps over the lazy dog';

function find(sentence){

if(typeof sentence!=='string'||!isNaN(sentence)){ return ` invalid string`};


    for(const sen of sentence){
        if(sentence.includes('a')&&sentence.includes('e')&&sentence.includes('i')&&sentence.includes('o')&&sentence.includes('u')){
return true;
        }
        else{
            return false;
        }
    }


}
const answer=find(sentence);
console.log(answer)