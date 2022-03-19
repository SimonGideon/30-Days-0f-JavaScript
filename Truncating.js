function truncateString(str, num) {
  if(str.length>num){
      return str.slice(0, num)+"...";
  }else{
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Petter Piper a peck of picked peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket A green and Yello and yello basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A", 1);
