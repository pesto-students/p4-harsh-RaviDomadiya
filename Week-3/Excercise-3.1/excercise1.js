function add(...args) {
  return args.reduce((accumulator, currentItem) => accumulator + currentItem, 0);
}
//console.log(add(100, 100));

function memoize(fun) {
  //console.log(fun);
  let cache = {};
  return function(...args) {
    if (args in cache) {
      console.log("Without compute");
      return cache[args];
    } 
    else {
      //console.log("Compute");
      let result = fun(...args);
      cache[args] = result;
      return result;
    }

  };

}
const memoizeAdd = memoize(add);
//console.time();
console.log(memoizeAdd(100, 100));
//console.timeEnd();
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
//console.time();
console.log(memoizeAdd(100, 100));
//console.timeEnd();