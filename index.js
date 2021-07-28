async function arrToString(arr) {
  if (!arr || !arr.length) {
    return null;
  }

  let result = "";
  result += arr[0];
  let count = 0;

  if (arr.length === 1) {
    return result;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      result += `,${arr[i]}`;
      count = 0;
    } else {
      if (arr[i] !== arr[i + 1] - 1 && count > 0) {
        result += `-${arr[i]}`;
      }
      if (arr[i] !== arr[i + 1] - 1 && count === 0) {
        result += `,${arr[i]}`;
      }
      count++;
    }
  }

  return result;
}

module.exports.arrToString = arrToString;
