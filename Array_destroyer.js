function destroyer(arr) {
  let toRemove = Object.values(arguments).slice(1);
  for (let i =  0; i<arr.length; i++){
    for(let j =0; j<toRemove.length; j++){
      if(arr[i] === toRemove[j]){
        delete arr[i];
      }
     }
return arr.filter(item => item !== null);
}
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);