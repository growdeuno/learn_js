var arr = ["a","b","c"];
var arr2 = [97,98,99];
var combine1 = ["x","y","z",...arr];
console.log(combine1);
var combine2 = [94,95,96,...arr2,100,101,102];
console.log(combine2);
var combine3 = [combine1+","+combine2];
var combine4 = [combine1,...combine2];

console.log(combine3);
console.log(combine4);
