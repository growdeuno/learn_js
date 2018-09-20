var foo = 7;
console.log("The Value of foo is "+foo);

if(typeof foo == "number"){
  console.log("It's a number");
  if(foo>=10){
    console.log("It's bigger than 10!");
  }else{
    console.log("It's smaller than 10!");
  }
}else if(typeof foo == "string"){
  console.log("It's a string");
}else{
  console.log("It's not a number or a string");
}
