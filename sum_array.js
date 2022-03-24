function sumAll(arr) {
    sum = 0;
    maxArray = Math.max(...arr);
    for(i=1; i<=maxArray; i++){
        sum+=i;
    }
    return sum;
  }
  
  console.log(sumAll([5, 4]));