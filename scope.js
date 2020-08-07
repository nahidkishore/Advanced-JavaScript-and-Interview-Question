let bonus=20;
function add (num1, num2){
  let result=num1+num2+bonus;
  console.log(result);
  console.log(bonus);
  return result;
}
const output=add(3,5);
console.log(bonus);
console.log(output);