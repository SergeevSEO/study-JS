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
if (isNaN(price)===true) {
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