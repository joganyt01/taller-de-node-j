

const cumpleaños=(birthdate)=>{

    return new Date().getFullYear()-new Date(birthdate).getFullYear();


}

const calcular=cumpleaños('2001-10-01');

console.log('su edad es '+calcular);