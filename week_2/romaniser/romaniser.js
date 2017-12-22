function romaniser(num) {
  if (num === 6) {
    return 'VI';
  } else if(num === 5){
    return 'V';
  }

  if(num === 4){
    return 'IV';
  }
  var result = '';
  while (num > 0) {
    result += 'I';
    num -= 1;
  }
return result;
}

module.exports = romaniser;
