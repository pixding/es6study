// let [x=1] = [undefined];
// console.log(x);

// function f(){
//   return 2;
// }
// let [x=f()] = [1];
// console.log(x);


// var [c=x,x=1] = [5,6];
// console.log(c);


// let{bar,foo} = {foo:2,bar:4}
// console.log(foo);

//
// var {foo:baz} = {foo:'aaa'};
// console.log(foo);


// let x; let x = 1;  //报错，不能重复声明，var不会报错

// let foo;
// ({foo} = {foo:1});  //不加括号会报错，因为解析器会将起首的大括号，理解为一个代码块。
// console.log(foo);

// var {foo='safd'} = {};
// console.log(foo);

// function add([x,y]){
//   return x+y;
// }
// console.log(add([3,4]));
var map = new Map();
map.set('first','hello');
for(let [key,value] of map){
  console.log("key:"+key+"  is  "+value);
}
