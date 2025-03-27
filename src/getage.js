//importo un modulo llamdo get age con require
const getAge=require("get-age");

const cumplejogan=(person)=>{
 return {edad:getAge('2001-10-01'), ...person}

}

const obj={name:'johan', id:'4943537'};

const johan=cumplejogan(obj);

console.log({johan});