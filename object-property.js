const students=[
  {id:21, name:'omar sunny'},
  {id:11, name:'omar '},
  {id:71, name:'Mannaa'},
  {id:41, name:'Deepjol'},

]

const names=students.map(s => s.name);
console.log(names);
const ids=students.map(sId => sId.id);
console.log(ids);

 const bigger=students.filter(s => s.id>40);
 console.log(bigger);

 const find=students.find(s=> s.id>40);
 console.log(find);