// var a = [];
// for(var i=0; i<10;i++){
//   a[i] = function(){
//     console.log(i);
//   }
// }
// a[3]()

// for(var i=0;i<3;i++){
//   var i = 4;
//   console.log(4);
// }


// var tmp = 123;
// if(true){
//   tmp = "abc";
//   //let tmp;
// }

// function bar(x = y, y = 2) {
//   return [x, y];
// }
//
// bar();

// function func(arg){
//   let arg;
// }

// function f() { console.log('I am outside!'); }
// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//
//   f();
// }());


// function f(){
//   return 3;
// }
//
// let x = do {
//   let t = f();
//   t * t + 1;
// };
// console.log(x);

this.b = 1;
console.log(global.b);
