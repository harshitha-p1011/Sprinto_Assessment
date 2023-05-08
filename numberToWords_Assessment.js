function numberToWords(num) {
    const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten',
      'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    if(num === 0) return 'zero';
    if(num < 0) return 'minus ' + numberToWords(Math.abs(num));
    
    let words = '';
    
    if(Math.floor(num / 1000000) > 0) {
      words += numberToWords(Math.floor(num / 1000000)) + ' million ';
      num %= 1000000;
    }
    
    if(Math.floor(num / 1000) > 0) {
      words += numberToWords(Math.floor(num / 1000)) + ' thousand ';
      num %= 1000;
    }
    
    if(Math.floor(num / 100) > 0) {
      words += numberToWords(Math.floor(num / 100)) + ' hundred ';
      num %= 100;
    }
    
    if(num > 0) {
      if(num < 20) {
        words += ones[num];
      } else {
        words += tens[Math.floor(num / 10)];
        if(num % 10 > 0) words += '-' + ones[num % 10];
    }
  }
  
  return words.trim();
}  
console.log(numberToWords(1237))