function hurdleRace(k, height) {
    n = 5;
      let arr = [];
      for(let i=0; i<n; i++){
        arr+=height[i];
      }
    let maxHuddle = Math.max(...arr);
    if(k>maxHuddle){
      return console.log(0);
    }else{
      return console.log(Math.abs(k-maxHuddle)); 
    }
  
  }
  hurdleRace(7, [2, 6, 3, 5, 2]);
