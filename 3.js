const object={street:10};



function findAddress(object){

    const street=object.street || `__`;
    const house=object.house || '__';
    const society=object.society || '__';


    const answer=house+','+society;
    return answer;



}
const output=findAddress(object);
console.log(output);
