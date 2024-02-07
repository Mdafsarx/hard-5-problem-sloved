const array=[50,-20]

function sortMaker(array){




let [a,b]=array;

if(a<0 || b<0){ return `invalid number`}

else{
    
if(a>0 || b>0 ){
    if (a==b){
        return `equal`
    }
   else if(a>b ){ 
        return [a,b]}
    else if(b>a){ 
        return [b,a]};
}
}

}

const output=sortMaker(array);
console.log(output)