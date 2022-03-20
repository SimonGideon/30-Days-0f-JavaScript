function chunkArrayInGroups(arr, size) {
    const slice = [];
    for(let i=0; i<arr.length; i++){
    slice.push(arr.slice(i, i+=size));
  }
  return slice;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));