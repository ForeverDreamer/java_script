const movieList = document.getElementById('movie-list');
// 三钟语法都能设置背景元素
movieList.style.backgroundColor = 'redd';
movieList.style['backgroundColor'] = 'red';
movieList.style['background-color'] = 'red';

movieList.style.display = 'block';

const userChosenKeyName = 'level';
// key默认自动转换为字符串, 字符串key默认按照属性插入顺序排序, 数字key默认按照数字大小升序排序
const person = {
    'first name': 'Tom',
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '...',
    greet: function () {
        alert('Hi there!');
    },
    1.5: 'hello'
};

const numbers = {1: 'true', 5: 'hi'};

// person.greet();
console.log(person);
console.log(numbers);

// 给属性赋值
person.age = 31;
// 删除属性，属性不存在
delete person.age;
// 属性还存在，值为undefined或null
// person.name = undefined;
// person.name = null;
// 添加属性
person.isAdmin = true;
console.log(person);
console.log(person['first name']);
console.log(person['hobbies']);
console.log(person[1.5]);
console.log(person['1.5']);

const keyName = 'first name';
console.log(person[keyName]);
