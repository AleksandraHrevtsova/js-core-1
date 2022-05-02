// console.log('Hello World');
// // alert('Hello!')
// // confirm('Do You Love JS?');
// // prompt("Ваше имя")

// console.log('ПРИМИТИВЫ - 7');
// console.log('STRING:', 'my name is Sandra');
// console.log('1');
// console.log('Number: ', 100);
// console.log('Boolean: ', true);
// console.log('undefined: ', undefined);
// console.log('null: ', null);

// console.log('ПЕРЕМЕННЫЕ');
// // var
// // const & let - ES6 (2009)
// const password = 'jhgafliegfl';
// let login;
// console.log('login:', login);
// login = 'userName';
// console.log('login:', login);

// console.log(1 + 4 + 8);

// РАБОТА с примитивами
let age = 30;
// console.log(typeof age, age);
age = '30';
// console.log(typeof age, age);

// age = prompt('Insert your age please');
// console.log(typeof age, age);
// 130
// console.log('убрать буквы после числа:', parseInt(age));
// console.log('убрать буквы после числа:', parseFloat(age));

age = Number(age);
age = age + 2;
// console.log(typeof age, age);
// console.log(2 + '' + 2);
// console.log(2 + 2 + '6' + 5);
// console.log(typeof ('30' / 2), '30' / 2);
// console.log(typeof ('30' - 2), '30' - 2);
// console.log(typeof ('30' * 2), '30' * 2);
// console.log(typeof ('30' ** 2), '30' ** 2);

let num = '100';
// console.log('num: ', num);
num = +num;
// console.log('num: ', num);

let numToString = String(num);
// console.log('numToString: ', numToString);

// console.log(Boolean(10000));
// console.log(Boolean(Infinity));

// console.log(Boolean('1'));
// console.log(Boolean(' '));
// let name = prompt('Enter name').trim();
// console.log('prompt name:', name);
// console.log('prompt name length:', name.length);
// console.log(Boolean(name));

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(false);
