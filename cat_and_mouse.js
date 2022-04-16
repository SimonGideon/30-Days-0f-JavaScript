function catAndMouse(x, y, z) {
    let distCatAMouse = Math.abs(x-z);
    let distCatBMouse = Math.abs(y-z);
    if(distCatAMouse>distCatBMouse){
      console.log("Cat B");
    }else if(distCatBMouse>distCatAMouse){
      console.log("Cat A");
    }else{
      console.log("Mouse C");
    }
    
  }
  catAndMouse(2, 5, 4)