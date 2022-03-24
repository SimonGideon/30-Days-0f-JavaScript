function sumAll(arr) {
    sum = 0;
    maxArray = Math.max(...arr);
    minArray = Math.min(...arr);
    for(i=minArray; i<=maxArray; i++){
        sum+=i;
    }
    return sum;
  }
  
 console.log(sumAll([5, 10]));
