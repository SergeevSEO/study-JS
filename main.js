//Основы программирования на JavaScript I

//1.1 Вывод сообщения
console.log("Привет, мир!");

//2.1 Создание переменной
let year_of_foundation = 1841;

//3.1 Два слова через пробел
console.log (word_1 + " " + word_2);

//3.2 Общая длина имени и фамилии без пробелов
console.log ((name.trim() + last_name.trim()).length)

//3.3 Первая буква слова в верхнем регистре
console.log (word[0].toUpperCase());

//3.4 Целая часть от квадратного корня суммы разных округлений числа
console.log (Math.trunc(Math.sqrt(Math.ceil(value)+Math.floor(value)+Math.round(value))));

//3.5 Произведение чисел возведенное в квадрат
console.log ((a*b)**2);

//3.6 Длина гипотенузы в прямоугольном треугольнике
console.log (Math.sqrt(a**2 + b**2));

//3.7 Вывод данных из объекта
console.log (`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`);

//3.8 Формирование объекта и вывод значений
let obj = {
  name: name,
  last_name: last_name,
  age: age
};
console.log (obj)

//3.9 Вывести тип переменной
if (typeof value === "object") {
    console.log ("null");
} 
else {
  console.log (typeof value);
}

//3.10 Объявлены строковые значения, преобразуйте и посчитайте сумму
let num_3 = (Number(num_1) + Number(num_2));
console.log (num_3);

//3.11 В переменной записано число и еденицы измерения, нужно достать число
console.log (parseFloat(size));

//3.12 Посчитать объем прямоугольного параллелепипеда по размерам, отбросив еденицы измерения
let volume;
volume = (parseFloat(a)*parseFloat(b)*parseFloat(c));
console.log (volume);

//4.1 В зависимости от значения speed выводит разные строки
if (speed<=30) console.log ('Вы едете слишком медленно')
else if (speed<=70) console.log ('Вы едете с нормальной скоростью')
else console.log ('Вы едете слишком быстро, сбавьте скорость');

//4.2 Строка с ценой, перевести в число и выдать соответствующие сообщение
price = parseInt(price);
if (isNaN(price)) {
console.log ('Не число');
} else if (price<=0) {
console.log ('Число не корректное');
} else {
console.log (price);
};

//4.3 Определить большее из 3 значений без метода max
if (a>b && a>c) {
console.log (a);
} else if (b>a && b>c) {
console.log (b);
} else {
console.log (c);
};

//4.4 Присвоить значение переменной в зависимости от погоды
let activity;
if (temp>=25 && weather==='clear') {
activity='golf';
} else if ((temp>=10 && temp<25) && weather==='clear') {
activity='bowling';
} else {
activity='hiking';
};

//4.5 Вывод строки наибольшей длины
console.log((word_1.length > word_2.length)? word_1: word_2);

//4.6 Вывести сообщение через switch
switch (task) {
  case 'удалить':
  console.log ('delete');
  break;
  case 'переименовать':
  console.log ('rename');
  break;
  case 'редактировать':
  console.log ('edit');
  break;
};

//4.7 Сформировать сообщение по шаблону <значение price> Р в <эквивалент значения range на русском языке>
switch (range) {
  case 'month':
  console.log (price + ' Р в месяц');
  break;
  case 'day':
  console.log (price + ' Р в день');
  break;
  case 'week':
  console.log (price + ' Р в неделю');
  break;
};

//4.8 Простой калькулятор со строковым значением математического оператора sign
switch (sign) {
  case '+':
  console.log (a + b);
  break;
  case '-':
  console.log (a - b);
  break;
  case '/':
  console.log (a / b);
  break;
  case '*':
  console.log (a * b);
  break;
}

//4.9 С ошибкой при делении на ноль
switch (sign) {
  case '+':
  console.log (a + b);
  break;
  case '-':
  console.log (a - b);
  break;
  case '/':
  (b===0)? console.log ('Делить на 0 нельзя!'): console.log (a / b);
  break;
  case '*':
  console.log (a * b);
  break;
}

//5.1 Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5
let sum = 0;
while (start <= end) {
if (start % 5 == 0) {
sum= sum + start;}
start=++start;
};
console.log (sum);

// 5.2 Переверните строку, используя цикл
let newWord = '';
let i = word.length - 1;
while (i >= 0) {
  newWord = newWord + word[i]
  i = --i;
};
console.log (newWord);
/* Решение из обучения
let result = '';
for (let i = word.length - 1; i >= 0; i--){
  result += word[i];
}
console.log (result);
*/


// 5.3 Определите, является ли слово палиндромом (буквы разного регистра)
let newWord = '';
let i = word.length - 1;
while (i >= 0) {
  newWord = newWord + word[i]
  i = --i;
}
if (word.toLowerCase() == newWord.toLowerCase()) {
    console.log ("Слово является палиндромом!")
}  else {
    console.log ("Слово не является палиндромом!")
};

// 6.1 Напишите функцию, которая выводит в консоль сообщение о стоимости товара
function priceMessage (price){
  console.log (`Данный товар стоит ${price} рублей`)
}
priceMessage (price);

//6.2 Напишите функцию, которая принимает два аргумента и возвращает их произведение
function mult(num_1,num_2) {
  return num_1*num_2;
}
console.log (mult(num_1, num_2));

//6.3 Напишите функцию, которая возвращает квадрат этого числового значения (функция обращается к глобальной переменной, а не получает значение в качестве аргумента)
function square() {
  return num*num;
}
console.log (square());

//6.4 Используя цикл, возведите значение переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль
let string = '';
function square() {
  return num*num;
}
for (let i=1; i<=3; i++) {
  string = (i==3) ? string+=square() : string+=square() + ' ';
  num = square();
}
console.log (string);

//6.5 Функция преобразовывает строку в число
function getNumber(data) {
  if (isNaN(parseFloat(data))) {
    return data=0;
  } else {
    return parseFloat(data);
  };
}
console.log (getNumber(data));

//6.6 Функция возвращает процент числа value от значения total
function getPersent () {
  result = (value*100)/total
  return result;
}
console.log (getPersent (value, total));

//9.1 Добавление, удаление элементов массива
list.unshift('Яблоко');
list.pop();
list.push('Клубника');
console.log (list);

//9.2 Вывести в консоль самый длинный элемент из массива
function getMaxLength (arr = []) {
  let result;
  for (let index = (arr.length - 1); index > 0; index--){
      if (arr[index].length > arr[index-1].length) {
          result = arr[index];}
      else if (arr[index].length == arr[index-1].length) {
          result = arr[index-1];
      }
  }
  return result;
}
console.log (getMaxLength(list));

//9.3 Посчитать сумму чисел в массиве
function sumArray (arr=[]) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++){
      sum+=arr[index];
  }
  return sum
}
console.log (sumArray(list))

//9.4 Объединить два числовых массива в один и каждое значение возвести в квадрат
function mergeArray (arr1 = [], arr2 = []) {
  let result = [];
  for (let i of arr1) {
      result.push (i);
  }
  for (i of arr2) {
      result.push (i);
  }
  return result;
}
function squareArray (arr) {
  let result = [];
  for (i of arr) {
      i**=2;
      result.push(i);
  }
  return result;
}
console.log (squareArray(mergeArray(list_1, list_2)))

//9.5 Посчитать сумму положительных чисел и вывести результат в консоль
function sumPositive (arr = []) {
  let sum = 0;
  for (let i of arr) {
      if (i > 0) {
          sum+= i;
      }
  }
  return sum
}
console.log (sumPositive(list));

//9.6 Сформировать сумму из простых чисел диапазона и вывести результат в консоль
function sumSimpleNumbers (arr) {
  let sum = 0;
  for (let i of arr) {
      if ( i!= 1 && (i%2 != 0 || i==2) && (i%3 != 0 || i==3) && (i%5 != 0 || i==5) && (i%7 != 0 || i==7) ) {
          sum += i;
      }
  }
  return sum;
}
console.log (sumSimpleNumbers(list));

//9.7 Рассчитать произведение максимального и минимального элементов массива и вывести в консоль
function minArray (arr) {
  let result = arr[0];
  for (let i=0; i < arr.length; i++) {
      if (result>arr[i]) {
      result = arr[i];
      }
  }
  return result;
}
function maxArray (arr) {
  let result= arr[0];
  for (let i=0; i < arr.length; i++) {
      if (result<arr[i]) {
      result = arr[i];
      }
  }
  return result;
}
console.log (minArray(list)*maxArray(list));

//9.8 Перевернуть числовой массив и вывести результат в консоль
let result = [];
for (let i of list) {
    result.unshift (i);
}
console.log (result);

//9.9 Преобразовать строку в массив так, чтобы каждое слово было отдельным элементом массива
function transform (string = '') {
  let result = [];
  let word = '';
  for (let i = 0; i < string.length; i++ ) {
      if (string.charAt(i) != ' ') {
          word += string.charAt(i);
      } else {
          result.push (word);
          word = '';
      }
  }
  if (word != '') result.push (word);
  return result;
}
console.log (transform(sentence));

//9.10 Функция, которая возвращает количество четных элементов в массиве
function count(list) {
  let result = 0;
  for (let i of list) {
      if (i%2 == 0) result++;
  }
  return result;
}
console.log (count(list))

//9.11 Функция рассчитывает среднее значение элементов массива и округляет получившееся значение по правилам математики
function average(list) {
  let sum = 0;
  let result = 0;
  for (let i of list) {
      sum+= i;
  }
  result = Math.round(sum / list.length);

  return result;
}
console.log (average(list));

//9.12 Рассчитать сумму числовых значений, до первого логического
let sum = 0;
for (let i of list) {
    if (typeof i != 'boolean') {
        sum+= i;
    } else break; 
}
console.log (sum);

//9.13 Сформировать массив со значениями от 10 до 20
let list = [];
for (let i=10; i<=20; i++) {
    list.push(i);
}
console.log (list);

//9.14 Cформируйте массив, который содержит в себе только числа до false
let numbers_list = [];
for (let i of list) {
    if (typeof i == 'number') {
        numbers_list.push (i);
    } else if (i == false) break;
}
console.log (numbers_list);

//9.15 Посчитать количество элементов без учета элементов со значением "default"
let result = 0;
for (let i of list) {
    if (i.toLowerCase() != 'default') result++;
}
console.log (result);

//9.16 Сформировать строку из первых букв каждого элемента массива
let result = '';
for (let i of list) {
    result+= i.charAt(0);
}
console.log (result);

// 9.17 Сформировать новый объект со значениями и их количеством
let result = {};
for (let k in obj) {
  if (result[obj[k]]) {
      result[obj[k]]++
  } else {
      result[obj[k]] = 1;
  }
}
console.log (result);

//9.18 Вывести продукт с максимальной ценой
let maxPrice = 0;
let product = '';
for (let i=0; i < list.length; i++) {
    if (maxPrice < list[i].price) {
        maxPrice = list[i].price;
        product = list[i].product;
    }
}
console.log (product);