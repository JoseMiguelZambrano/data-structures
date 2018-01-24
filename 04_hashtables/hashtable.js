function HashTable(num=35){
  this.numBuckets=num;
  this.array=[];
}
HashTable.prototype.set=function(key,value){
  //si la key no es strig devuelve error
  if( typeof key != 'string'){
    throw new TypeError ('Keys must be strings');
  }
  //guardamos la posicion en la variable ind
  var ind = this.hash(key);
  // si la posicion no existe en el array, iniciarla con una lista linkeada
  if (!this.array[ind]){
    this.array[ind] = new LinkedList();
  }
  //añadir a la cola de la lista, el valor.
  this.array[ind].addToTail([key,value]);
}
HashTable.prototype.get=function(key,value){
  //si la key no es strig devuelve error
  if( typeof(key)!='string'){
    throw new TypeError ('Keys must be strings');
  }
  //guardo la posicion en la variable ind
  var ind=this.hash(key);
  // si la posicion no existe en el array, retornar
  if (!this.array[ind]  || !this.array[ind].head ){
    return;
  }
  //si existe este posicion en la lista
  var dato = this.array[ind].tail.value[1]
  this.array[ind].removeTail();
  return dato;
  
}
HashTable.prototype.hasKey=function(key){
  //si la key no es strig devuelve error
  if( typeof(key)!='string'){
    throw new TypeError ('Keys must be strings');
  }
  //guardo la posicion en la variable ind
  var ind=this.hash(key);
  // si la posicion no existe o el head esta vacio devuelve false
  if (!this.array[ind]  || !this.array[ind].head ){
    return false;
  }
  //usamos el metodo search de la linkedList
  //como funcion comparadora, le pasamos un comparador de arreglos
  //se fija si hay algun nodo que en su indice 0 tenga esta key
  //y si lo hay lo devuelve.
  //si hay respuesta desde el search, retornamos true.
  if (this.array[ind].search(function(nodoValor){
    if (nodoValor[0]==key){
      return true;
    }
  })){return true}
  //si no hubo respuesta devolvemos false
  return false;
}
HashTable.prototype.hash=function(palabra){
  var resultado=0;
  for(var i=0;i<palabra.length;i++){
    resultado+=palabra.charCodeAt(i);
  }
  return resultado%this.numBuckets;
}