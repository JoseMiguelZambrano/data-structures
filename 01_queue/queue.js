class Queue {
  constructor(){
      this.arrayQueue = [];
      this.tail = 0;
      this.head = 0;
  }
}

Queue.prototype.enqueue = function (element){
  this.arrayQueue[this.tail]=element;
  this.tail++
}

Queue.prototype.dequeue = function (){
  if(this.tail === this.head) return;
  let aux = this.arrayQueue[this.head];
  this.head++;

  return aux;
}

Queue.prototype.size = function (){
  return this.tail - this.head
}



