
function Queue (){
  this.arrayQueue = [];
  this.head = 0;
  this.tail = 0;   
}
Queue.prototype.enqueue = function(element){
  this.arrayQueue[this.tail] = element;
  this.tail++;
};
Queue.prototype.dequeue = function(){
  if(this.size()===0) return undefined;
  var aux = this.arrayQueue[this.head];
  this.head++; 
  return aux;
};
Queue.prototype.size = function(){
  return this.tail - this.head;
};



