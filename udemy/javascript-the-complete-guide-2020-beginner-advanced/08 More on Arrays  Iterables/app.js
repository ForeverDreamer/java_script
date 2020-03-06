// 185 Creating Arrays.en
// 推荐使用 []
const numbers = [1, 2, 3];
console.log(numbers);
// 不推荐使用 new Array()
const emptyArray = new Array(); // 等同于const moreNumbers = [];
console.log(emptyArray);
// new可以省略
const strings = Array('Hi!', 'Welcome!');
console.log(strings);
// 5个空元素
const emptyList = new Array(5);
console.log(emptyList);
// 不推荐使用Array.of()
const yetMoreNumbers = Array.of(1, 5);
console.log(yetMoreNumbers);
// 通过iterable创建数组
const fromArray = Array.from('Hi!');
console.log(fromArray);
const listItems = document.querySelectorAll('li');
console.log(listItems);
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


// 186 Which Data Can You Store In Arrays
const hobbies = ['Cooking', 'Sports'];
let personData = [30, 'Max', {moreDetail: []}];
const analyticsData = [[1, 1,6], [-5.4, 2]];
for (const data of analyticsData) {
    console.log('----------------');
    for (const dataPoint of data) {
        console.log(dataPoint)
    }
}
console.log('----------------');
console.log(personData[1]);


// 187 push() pop() unshift() shift() - Adding  Removing Elements
let myHobbies = ['Cooking', 'Sports'];
// 在尾部插入
myHobbies.push('Reading');
// 在头部插入
myHobbies.unshift('Coding');
console.log(myHobbies);
// 从尾部删除
const poppedValue = myHobbies.pop();
console.log(poppedValue);
console.log(myHobbies);
// 从头部删除
const shiftedValue = myHobbies.shift();
console.log(shiftedValue);
console.log(myHobbies);
// 直接按索引赋值
myHobbies[1] = 'Coding';
// 超出数组长度赋值不会报错，中间自动填充undefined，不推荐这样使用
myHobbies[5] = 'Reading';
console.log(myHobbies, myHobbies[4]);


// 188 The splice() Method
myHobbies = ['Cooking', 'Sports'];
// 从[1]后边开始，删除0个元素，插入'Good Food'
myHobbies.splice(1, 0, 'Good Food');
console.log(myHobbies);
// 从[0]后边开始，删除1个元素
myHobbies.splice(0, 1);
console.log(myHobbies);
// 从[0]后边开始，删除所有元素
const removedElements = myHobbies.splice(0);
console.log(myHobbies);
console.log(removedElements);
// 支持负数索引，从[-1]前边开始，即从右往左查找，删除1个元素
myHobbies = ['Cooking', 'Sports'];
myHobbies.splice(-1, 1);
console.log(myHobbies);
// 注意不支持myHobbies[-1], myHobbies[-2]访问，只适用于某些方法(如 splice)


// 189 Selecting Ranges  Creating Copies with slice()
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults1 = testResults;
const storedResults2 = testResults.slice();
const storedResults3 = testResults.slice(0, 2);
const storedResults4 = testResults.slice(-3, -1);
const storedResults5 = testResults.slice(2);

testResults.push(5.91);
console.log(testResults, storedResults1);
console.log(storedResults2, storedResults3);
console.log(storedResults4, storedResults5);


// 190 Adding Arrays to Arrays with concat()
let concatArray = testResults.concat([888,888]);
console.log(concatArray);
concatArray = concatArray.concat(storedResults4, storedResults5);
console.log(concatArray);


// 191 Retrieving Indexes with indexOf()  lastIndexOf()
console.log(testResults.indexOf(1.5));
// 从[5]的位置开始搜索，只返回第一个匹配的index
console.log(concatArray.indexOf(888, 5));
// 从右往左搜索，没有匹配的返回-1
console.log(concatArray.lastIndexOf(888));

personData = [{name: 'Max'}, {name: 'Manuel'}];
// 不能这样查找, 返回-1
console.log(personData.indexOf({name: 'Manuel'}));


// 192 Finding Stuff find() and findIndex()
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel';
});
manuel.name = 'Anna';
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
    return person.name === 'Max';
});
console.log(maxIndex);


// 193 Is it Included
console.log(testResults.includes(10.99));
// 等同于
console.log(testResults.indexOf(10.99) !== -1);


// 194 Alternative to for Loops The forEach() Method
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1+ tax));
// }

prices.forEach((price, idx, prices) => {
   const priceObj = { index: idx, taxAdjPrice: price * (1+ tax)};
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);


// 195 Transforming Data with map()
const tranPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1+ tax)};
    return priceObj;
});

console.log(prices, tranPrices);


// 196 sort()ing and reverse()ing
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices.reverse());


// 197 Filtering Arrays with filter()
let filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});
console.log(filteredArray);

// 198 Where Arrow Functions Shine
filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);


// 199 The Important reduce() Method
let sum = 0;
prices.forEach(price => sum += price);
console.log(sum);

sum = prices.reduce(((previousValue, currentValue, currentIndex, array) => previousValue + currentValue), 0);
console.log(sum);


// 201 Arrays  Strings - split() and join()
const data = 'new york;10.99;2000';
const transformedData = data.split(';')
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);


// 202 The Spread Operator (...)
const copiedNameFragments = [...nameFragments]
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

let persons = [
    {name: 'Max', age: 30, hobbies: ['Cooking', 'Sports']},
    {name: 'Manuel', age: 31, hobbies: ['Cooking', 'Sports']}
];
// 只拷贝对象地址(浅拷贝)
const copiedPersons1 = [...persons];
// 拷贝对象数据(深拷贝)
const copiedPersons2 = [...persons.map(
        person => (
            {name: person.name, age: person.age, hobbies: [...person.hobbies]}
        )
    )
];
// 等同于
// const copiedPersons2 = persons.map(person => ({name: person.name, age: person.age}));

persons.push({name: 'Anna', age: 29});
persons[0].age = 31;

console.log(persons, copiedPersons1);
console.log(copiedPersons2);


// 203 Understanding Array Destructuring
const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const secondName = nameData[1];

const [firstName, secondName, ...otherInfo] = nameData;
console.log(firstName, secondName, otherInfo);


// 205 Working with Sets
let ids = new Set();
console.log(ids);
ids = new Set([1, 2, 3]);
console.log(ids);
console.log(ids.has(1));
// 忽略重复的值
ids.add(2);
console.log(ids);
ids = new Set(['Hi', 'from', 'set']);
ids.add(2);
for (const entry of ids.entries()) {
    console.log(entry);
    console.log(entry[0]);
}
// 忽略不存在的值
ids.delete('Hello');
if (ids.has('Hi')) {
    ids.delete('Hi');
}


// 206 Working with Maps
const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personMapData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
personMapData.set(person2, [{date: 'two weeks ago', price: 100}]);
console.log(personMapData);
console.log(personMapData.get(person1));

for (const key of personMapData.keys()) {
    console.log(key);
}

for (const value of personMapData.values()) {
    console.log(value);
}

console.log(personMapData.size);


// 208 Understanding WeakSet, 主要考虑垃圾回收
let person = {name: 'Max'};
persons = new WeakSet();
// 只能存储object
persons.add(person);
// ... some operations
// person = null;
console.log(persons);


// 209 Understanding WeakMap, 主要考虑垃圾回收
persons = new WeakMap();
persons.set(person, 'Extra info!');
person = null;
console.log(persons);
