const fib = (countt) => {
    return {
      [Symbol.iterator]: () => {
        let currentNumber = 0,
          nextNumber = 1,
          sum;
        let currentIndex = 0;
        return {
          next() {
            if (currentIndex < countt) {
              currentIndex++;
              sum = currentNumber + nextNumber;
              currentNumber = nextNumber;
              nextNumber = sum;
              return { value: currentNumber, done: false };
            } else {
              return { done: true };
            };
          }
        };
      }
    }
  }
  
  // const a = [...fib(12)];
  // console.log(a);
  
  // ========================================
  // function myNumbers(countt) {
  //     let currentNumber = 0,
  //     nextNumber = 1,
  //     sum;
  //     let currentIndex = 0;
  //     return {
  //       next: function() {
  //         if (currentIndex < countt) {
  //             currentIndex++;
  //             sum = currentNumber + nextNumber;
  //             currentNumber = nextNumber;
  //             nextNumber = sum;
  //             // console.log("--------------------------")
  //             // console.log('currentNumber', currentNumber)
  //             // console.log("--------------------------")
  //             return { value: currentNumber, done: false };
  //           } else {
  //             return { done: true };
  //           };
  //       }
  //     };
  //   }
  //   const n = myNumbers(12);
  
  
  // for (let index = 0; index < 12; index++) {
  //   console.log(n.next().value)
  // }