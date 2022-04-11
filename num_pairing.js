function sockMerchant(n, ar) {
    var count = 0;
let sum = 0;
  ar.sort();
  console.log(ar);
    for(let i=0; i<n; i++){
     if(ar[i]===ar[i+1]){
       count++;     
     }
    }

  console.log((count+=sum)-2);

}
sockMerchant(10, [1 ,1 ,3 ,1, 2 ,1 ,3, 3, 3, 3]);
