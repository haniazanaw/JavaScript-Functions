function lengthOfString(stringarray){
  return   stringarray.map(string => string.length);
}
console.log(lengthOfString(["Hannau","Abebe"]));

function filterEven(numbers){
  return  numbers.filter(number =>number%2==0);

}
console.log(filterEven([2,4,5]));

function topScorer(students){
 let topscore =students.filter(student => student.score>75).map(student =>student.name);

 
return topscore
}
console.log(topScorer([{name:"Halima",score: 6},{name:"gloria",score:79}]));

function squaredNumber(number){
    return number.map(num => num*num);

}
console.log(squaredNumber([3,4,5]))

function onlyString(mixed){
    return mixed.filter(item => typeof item=='string').map(item => item.toUpperCase());
}
console.log(onlyString(["abebe",9,true]));