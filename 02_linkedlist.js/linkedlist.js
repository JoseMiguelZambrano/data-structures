function LinkedList(){
  this.head=null;
  this.tail=null;
}

function Node (data){
  this.value = data;
  this.next = null; 
  this.previous = null;
}

LinkedList.prototype.addToTail = function (value){
  let newTail = new Node(value);
  newTail.previous = this.tail;
  newTail.next = null;
  if(this.tail){
      this.tail.next = newTail
  } else {
      this.head = newTail;
  }
  this.tail = newTail;
}
LinkedList.prototype.addToHead=function(value){
  let newHead = new Node(value);
  newHead.previous = null;
  newHead.next = this.head;
  if(this.head){
      this.head.previous = newHead
  } else {
      this.tail = newHead;
  }
  this.head = newHead;
}

LinkedList.prototype.removeHead = function (value){
  if(!this.head)return;
  let oldHead = this.head.value;
  this.head = this.head.next;
  if(this.head){
      this.head.previous = null;
  } else {
      this.tail = null;
  }
  return oldHead;
}

LinkedList.prototype.removeTail=function(){
  if(!this.tail)return;
  let oldTail= this.tail.value
  this.tail = this.tail.previous;
  if(this.tail){
      this.tail.next = null;
  } else {
      this.head = null;
  }
  return oldTail;
}

LinkedList.prototype.search=function(element){
  let aux = this.head;
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

