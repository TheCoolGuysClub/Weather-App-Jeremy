// const add = (x,y) => {
//   return x + y
// }
//
//
// const result = add(1,2);
// console.log("My result is " + result);

const addCallback = (x,y, callback) => {
  callback(x+y);

}

addCallback(3,2, (result) => {
  console.log("My result is this: " + result);
})
