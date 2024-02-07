function matchFinder(string1,string2){

if(typeof string1!=='string'|| typeof string2!=='string'){
    return 'invalid number'
}
else if(!isNaN(string1) || !isNaN(string2)){
    return `only letter can allowed`
}


    if(string1.includes(string2)){
return true;
    }
    else{
        return false;
    }


}
const string1='111';
const string2='ohn';
const output=matchFinder(string1,string2);
console.log(output)