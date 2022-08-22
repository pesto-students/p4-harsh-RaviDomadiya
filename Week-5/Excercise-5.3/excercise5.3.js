let findDup = new Map();
function toFindDuplicates() {
  let arry = [1, 2, 1, 5];
  let to = {};


  let resultToReturn = false;
  for (let i = 0; i < arry.length; i++) {

    if (to[arry[i]]) {
      findDup.set(i, arry[i]);
      resultToReturn = true;
      break;
    }

    to[arry[i]] = true;
  }

  return { result: resultToReturn, duplicateitem: findDup };
}

console.log(toFindDuplicates())