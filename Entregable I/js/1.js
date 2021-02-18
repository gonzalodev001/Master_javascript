/**
 * Modifica las funciones para implementar la funcionalidad especificada.
 * Puedes añadir funciones adicionales si lo necesitas.
 * Este archivo debe ser ejecutable (no incluyas código inválido
 * o no relacionado con el ejercicio).
 */

function unique(arr, explicit) {
  /* ... */
  if(explicit){
    result = arr.filter(function(item, index, array) { 
      return array.indexOf(item) === index;
    });
    console.log('Explicit true => '+ result);
  }else{
    let aux = arr.map(function(word) { 
      return word.toUpperCase(); 
    });
    result = aux.filter(function(item, index, array) { 
      return array.indexOf(item) === index;
    });
    console.log('Explicit false => '+ result);
  }
}

function flatArray(arr) {
  /* ... */
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatArray(val) : val);
    }, []);
}


function reverse(arr) {
  /* ... */
  let aux = [];
  for ( let i= arr.length; i > 0; i--){
    aux.push(arr.pop());
  }
  return aux;
}

function orderBy(lista, ...args) {
  /* ... */
  let llaves = Object.keys(lista[0]);
  try{
    for(i= 0; i < args.length; i++){
      if(!llaves.includes(args[i])){
        throw 'Error';
      }
    }
    console.log(ordenarBurbuja(lista, args.length));
  }
  catch (err){
      console.log(err);
  }
}

function ordenarBurbuja(lista, n_propiedades){
  let  aux;
  let n = lista.length;
  if(n_propiedades == 1){
    for ( let i = 1; i < n; i++) {
      for (let j = 0; j < (n - i); j++) {
        if (lista[j].name > lista[j + 1].name) {
          aux = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = aux;
        }
      }
    }
  }else{
    for ( let i = 1; i < n; i++) {
      for (let j = 0; j < (n - i); j++) {
        if ((lista[j].name > lista[j + 1].name) && (lista[j].age > lista[j + 1].age)) {
          aux = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = aux;
        }
      }
    }
  }
  return lista;
}

