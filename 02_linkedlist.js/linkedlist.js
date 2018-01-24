function LinkedList(){
  this.head=null;
  this.tail=null;
}
function Node(text){
  this.value = text;
  this.next = null;
  this.previous = null;
}
LinkedList.prototype.addToTail=function(val){
  if(this.tail === null){
    var aux = new Node(val);
    this.tail = aux;
    this.head = aux;
  } else{
      var temp = this.tail;
      this.tail = new Node(val);
      this.tail.previous = temp;
      temp.next = this.tail;
  }
}
LinkedList.prototype.addToHead=function(val){
  if(this.head === null){
      var aux = new Node(val);
      this.tail = aux;
      this.head = aux;
  } else{
      var temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      temp.previous=this.head;
  }
}
LinkedList.prototype.removeTail=function(){
  if(this.tail=== null) return null;
  if(this.tail.previous===null){
    var aux = this.tail.value 
    this.head = null;
    this.tail = null;
    return aux;
  } else {
    var aux=this.tail
    this.tail=this.tail.previous;
    this.tail.next = null;
    return aux.value
  }
}

LinkedList.prototype.removeHead=function(){
  if(this.head=== null) return null;
  if(this.head.next===null){
    var aux = this.head.value 
    this.head = null;
    this.tail = null;
    return aux;
  } else {
    var aux = this.head
    this.head = this.head.next;
    this.head.previous = null;
    return aux.value
  }
}

LinkedList.prototype.search=function(element){
  var aux = this.head;
  if(this.head === null){
    return null;
  }
  while(aux){
    if(typeof element === 'function'){
      if(element(aux.value)){
        return aux.value 
      }  
    }
    else if(aux.value === element){
      return aux.value;
    }
    aux = aux.next;
  }
  return null;
}

