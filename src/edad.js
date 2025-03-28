const calcularEdad=(birthdate)=>{
    return new Date().getFullYear()-new Date(birthdate).getFullYear();
}

module.exports={
calcularEdad
}