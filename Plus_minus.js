function plusMinus(arr) {
var count = arr.length;
var posval = 0;
var negval = 0;
var zero = 0;
  for(let i=0; i<count; i++){
      if(arr[i]<0){
        negval+=1;
      }else if(arr[i]>0){
        posval+=1;
      }else{
        zero+=1;
      }
  }
var pcal = posval/count;
var ncal = negval/count;
var zerocal = zero/count;
console.log(pcal.toFixed(6)+ "\n" +ncal.toFixed(6)+'\n'+zerocal.toFixed(6) + '\n')
  
}

