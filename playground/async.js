// console.log("Starting app");
// setTimeout(()=>{
//   console.log("First setTimeout");}
//   ,2000);
// setTimeout(()=>{
//   console.log("Second setTimeout");
// },0)
// setTimeout(()=>{
//   console.log("End Of App")
// },4000);
const double = x => x*2;
const double_then_add_5 =x=>  {
  return double(x)+5;
};

console.log("Hello");
const num = double_then_add_5(2);
console.log(num, "Bye!");
