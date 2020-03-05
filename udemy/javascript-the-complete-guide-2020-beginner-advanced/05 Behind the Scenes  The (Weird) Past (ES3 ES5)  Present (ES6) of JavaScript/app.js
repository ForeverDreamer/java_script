let name = 'Max';

// {
//   let test = 5;
//   console.log(test);
// }
//
// console.log(test);

if (name === 'Max') {
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);

}

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }
//
// console.log(name, hobbies);
//
// greet();

// 'use strict';
//
// userName = 'Max';
// var undefined = 5;
//
// console.log(userName);


// 函数和变量定义保存在heap(堆), 长期(静态)内存
function getName() {
  return prompt('Your name: ', '');
}

function greet1() {
  const userName = getName();
  console.log('Hello ' + userName);
}

// 函数调用和程序执行状态保存在stack(栈), 短期(动态)内存, push/pop
greet1();


// 拷贝引用
let person = {age: 30};
let anotherPerson = person;
anotherPerson.age = 32;
console.log(person);
console.log(anotherPerson);

// 拷贝数据
let yetAnotherPerson = {...person};
yetAnotherPerson.age = 35;
console.log(person);
console.log(yetAnotherPerson);

let hobbies = ['Sports'];
let moreHobbies = [...hobbies];
hobbies.push('Cooking');
console.log(hobbies);
console.log(moreHobbies);

const person1 = {age: 30};
const person2 = {age: 30};
console.log(person1 === person2);  // false

const person3 = {age: 30};
person3.age = 32;
console.log(person3);
const hobby_array = ['Sports'];
hobby_array.push('Cooking');
console.log(hobby_array);  // 引用地址是const不可变, 但引用的数据可变

// person3 = {age: 32};
// hobby_array = ['Sports', 'Running'];  // 试图改变引用地址，解释器报错

// 垃圾回收器
let person4 = {name: 'Max'};
person4 = null;


