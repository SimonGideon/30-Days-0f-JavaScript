function destroyer(arr, n) {
  join = [];
  destroy = [];
  for(let i=0; i<arr.length; i++){
    join.push(arr[i]);
  }
  for(let f of join){
    if(join.has(f)){
      destroy.push(f);
    }
  }
    return destroy;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));