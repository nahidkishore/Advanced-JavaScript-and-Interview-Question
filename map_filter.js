const numbers=[2,3,4,6,7,8];
/* const output=[];

for (let i=0; i<numbers.length; i++){
  const element=numbers[i];
  const result= element* element;
  output.push(result);
} */


/* const result=numbers.map(function(element){
  return element* element;
}) */

//const square=element=> element*element;
//const square=x=>x*x;
const result=numbers.map(element=>element*element);
console.log(result);
// filter function
const bigger=numbers.filter(x=> x>5);
console.log(bigger);

const isThere=numbers.find(x=> x>5);
console.log(isThere);

