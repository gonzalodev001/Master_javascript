/**
 * Modifica las funciones para implementar la funcionalidad especificada.
 * Puedes añadir funciones adicionales si lo necesitas.
 * Este archivo debe ser ejecutable (no incluyas código inválido
 * o no relacionado con el ejercicio).
 */

 function checkSyntax(cadena) {
   /* ... */
   var open="{[(", close="}])";
   var balance = [0,0,0];
   var eval=new Stack();
   try{
     if(typeof cadena !== 'string'){
      throw 'Error no es un string.';
     }else{

        for ( var i = 0; i < cadena.length; i++ ){
          eval.push( cadena[i] );
        }
        
        for (var j = 0; j < eval.size(); j++) {
          if (open.indexOf(eval.items[j])!=-1) {
            balance[open.indexOf(eval.items[j])]++;
          }
          else {
            balance[close.indexOf(eval.items[j])]--;
          }
            if (balance[0] < 0 || balance[1]<0 || balance[2]<0){
              return false;
            }
        }
        if (balance[0]==0 && balance[1]==0 && balance[2]==0) {
          return  true ;
        }
        return false;
      }
   }catch(err){
     console.log(err);
   }
   
 }

 function Stack(){
  this.items = [];
  this.elements = 0;
  this.push = push;
  this.pop = pop;
  this.isEmpty = isEmpty;
  this.peek = peek;
  this.size = size;

  function push( item ){
      this.items.push( item );
      this.elements++;
  }

  function pop(){
    if ( this.elements > 0 )
    {
      this.elements--;
      return this.items.pop();
    }
  }

  function peek(){
    return this.items[ this.elements - 1 ];
  }

  function isEmpty(){
    return this.elements == 0;
  }

  function size(){
    return this.elements;
  }
}
 