function BinarySearchTree(num,left = null, right = null){
  this.value = num;
  this.long = 1;
  this.left = left;
  this.right = right;
}

BinarySearchTree.prototype.insert = function(valor){
 
  if(valor >= this.value){
    if(this.right === null){
      var nodeTree = new BinarySearchTree(valor);
      this.long += 1; 
      this.right = nodeTree;
    }else{
      this.right.insert(valor);
    }
    
  }else{
    if(this.left === null){
      var nodeTree = new BinarySearchTree(valor);
      this.long += 1; 
      this.left = nodeTree;
    }else{
      this.left.insert(valor);
    }
  }
};
BinarySearchTree.prototype.contains = function(valor){
  if(valor === this.value) return true;
  
  if(valor > this.value){
    if(this.right !== null){
      return this.right.contains(valor);
    }
  }
  if(this.left !== null){
      return this.left.contains(valor);
    }
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(fn, metodo='in-order'){
  if (metodo=='in-order'){
    this.inOrder(fn);
  }
  if (metodo=='pre-order'){
    this.preOrder(fn);
  }
  if (metodo=='post-order'){
    this.postOrder(fn);
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(fn,lista=[]){
  fn(this.value);
  if(this.left!==null){
    lista.push(this.left);
  }
  if(this.right!==null){
    lista.push(this.right);
  }
  if (lista.length){
    lista.shift().breadthFirstForEach(fn,lista);
  }
};
BinarySearchTree.prototype.size = function(){
  return this.long;
};
BinarySearchTree.prototype.inOrder = function(fn){
  if (this.value===null){
    return;
  }
  if (this.left!==null){
    this.left.inOrder(fn);
  }
  fn(this.value);
  if (this.right!==null){
    this.right.inOrder(fn);
  }
}
BinarySearchTree.prototype.postOrder = function(fn){
  if (this.value===null){
    return;
  }
  if (this.left!==null){
    this.left.postOrder(fn);
  }
  if (this.right!==null){
    this.right.postOrder(fn);
  }
  fn(this.value);
}
BinarySearchTree.prototype.preOrder = function(fn){
  if (this.value===null){
    return;
  }
  fn(this.value)
  if (this.left!==null){
    this.left.preOrder(fn);
  }
  if (this.right!==null){
    this.right.preOrder(fn);
  } 
}
