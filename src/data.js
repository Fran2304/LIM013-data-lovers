// estas funciones son de ejemplo
export const filteredPokemon = (data,selectType) => {
  const myArray= data.filter((myObject)=>{ 
    return myObject.type.includes(selectType); // Para ver si arreglo incluye valor seleccionado
  }); 
  return myArray;
};

export const orderPokemonUpward = (myArray) => {
  myArray.sort(function(a,b){
        let x = a.name;
        let y = b.name;
        if (x < y){return -1;}
        if (x > y){return 1;}
        return 0;
    });

    //console.log(myArray);
    return myArray;
};

export const filteredName = (data,name) => {
  const myArray= data.filter((myObject)=>{
    return myObject.name.includes(name);
  })
  return myArray;
}
export const epsfunction = (energy, movement)=>{
  const epsCompute = Math.round(energy/movement);
  return epsCompute;
 }
 
 


//export const 
/*


export const orderPokemonDownward = (myArray) => {
  myArray.sort(function(a,b){
        let x = a.name;
        let y = b.name;
        if (x < y){return 1;}
        if (x > y){return -1;}
        return 0;
    });

    //console.log(myArray);
    return myArray;
};
*/

export const anotherExample = () => {
  return 'OMG';
};
