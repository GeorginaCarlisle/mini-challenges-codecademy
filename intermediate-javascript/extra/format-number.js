const formatNumber = (number) => {
  let numberString = number.toString();

  if (!numberString.includes(".")) {
    if (numberString.length > 3) {

      let formatNumString = "";
      let remainder = numberString.length % 3;
      let rounds = Math.ceil(numberString.length / 3);

      for (let i = 0; i < rounds; i++) {
        if (i === 0) {
          formatNumString = numberString.slice(0, remainder);
        } else {
          formatNumString += `,${numberString.slice((remainder + ((i - 1) * 3)), (remainder + (i * 3)))}`;
        }
      }
      return formatNumString;
    } else {
      return numberString;
    }

  } else {
    let splitArray = numberString.split(".");
    if (splitArray[0].length > 3) {
      let formatNumString = "";
      let remainder = splitArray[0].length % 3;
      let rounds = Math.ceil(splitArray[0].length / 3);

      for (let i = 0; i < rounds; i++) {
        if (i === 0) {
          formatNumString = splitArray[0].slice(0, remainder);
        } else {
          formatNumString += `,${splitArray[0].slice((remainder + ((i - 1) * 3)), (remainder + (i * 3)))}`;
        }
      }
      splitArray[0] = formatNumString;
    }
    numberString = splitArray.join(".");
    return numberString;
  }
};

module.exports = { formatNumber };