function timeConversion(s) {
    let firstTwo = s.slice(0, 2);
    let lastTwo = s.slice(-2);
    let remaining = s.slice(2, -2);
    let intNum = parseInt(firstTwo);
    if (lastTwo == "PM") {
      if(firstTwo == 12){
        firstTwo = firstTwo;
      }else{
        firstTwo = intNum + 12;
      }
    } else{ 
      if(firstTwo==12){
        firstTwo = "00";
      }else{
        firstTwo = firstTwo;
      }
    }
  var combined = firstTwo + remaining;
  return combined;
    // console.log(firstTwo + remaining)
  // console.log(typeof(combined));
}
