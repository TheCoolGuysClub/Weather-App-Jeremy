const promiseAdd = (x,y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof x === 'number' && typeof y === 'number') {
        // if (x+y ===3) {
        //   throw new Error
        // }
        resolve(x+y);
      } else {
        reject("both x and y must be numbers");
      }
    }, 1500)
  })
}

promiseAdd(90,4)
  .then((result) => {
    console.log("add was succesful.");
    console.log("result: " + result);
    return promiseAdd(33,4);
  })
  .then((result) => {
    console.log("Second add was successful");
    console.log("second reuslt: ", result+12);
  })
  .catch((error) => {
    console.log(error);
  })
