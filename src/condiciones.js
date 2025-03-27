//llamo la libreria uuid con require osea la importo
//desestructuro para tomar exactamente la funcion v4
// del paquete uuid y la renombro como uuidv4
const { v4: uuidv4 } = require('uuid');
//creo una funcion flecha que me guarde un parametro
//exactamente un id y dentro de este retorno osea devuelvo
//el id que es el objeto que cree dentro de la funcion
//donde almacene el id aleatorio que me genero la funcion
//v4 del paquete uuid
const calcuid = (person) => {
    return { id: uuidv4(), ...person };

}

 const obj = { name: 'John', birthdate: '1985-10-21' };
 
 // Llamamos a la función correctamente
 const john = calcuid(obj);
 
 console.log({ john });





