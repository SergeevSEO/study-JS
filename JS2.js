// 1.1 Определить наличие подстроки "привет" в начале строки переменной
		if (message.toLowerCase().startsWith ("привет")) {
			console.log (true);
		} else console.log (false)

// 1.2 Определить позицию последнего вхождения подстроки "username" в переменной
		console.log (greetings.toLowerCase().lastIndexOf("username"));

// 1.3 Определить, встречается ли в данной строке два парных тега <p>
		let open = 0;
		let close = 0;
		for (let i = 0; i < firstDiv.length; i++) {
			if (firstDiv.startsWith("<p>", i)) {
				open = open + 1;
			} 
		}
		for (let i = 0; i < firstDiv.length; i++) {
			if (firstDiv.startsWith("</p>", i)) {
				close = close + 1;
			} 
		}
		if (open == close && open == 2) console.log (true)
			else console.log (false)

// 1.4 Конвертировать километры из строки в мили
		let km = road.slice(0, -3);
		let mile = Math.floor(km*6.2)/10;
		console.log (mile);

// 1.5 Проверить одно слово в строке или несколько
			if (words.includes(" ")) console.log ("В строке больше одного слова")
			else console.log ("В строке одно слово");

// 1.6 	Проверить, является ли первый символ числом
		if (isNaN(symbols.charAt(0))) console.log ("Первый символ не цифра")
		else console.log ("Первый символ цифра");

// 1.7 Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
		let sum = symbols.codePointAt(0)+symbols.codePointAt(1);
		if (sum%2 == 0) console.log (String.fromCodePoint(sum))
		else console.log ("Символ обнаружить не удалось");

// 1.8 Отделить номер телефона от других символов
		let result = "+";
		for (let i of phone.match(/\d/g)){
			result += i;
		}
		console.log (result);

// 1.9 Преобразовать строку с почтами через пробел в массив с отдельными элементами
		console.log (emails.split(/\s/));

// 1.10 По виду записи определить тип билета
		if (/\w+\-\d{8}\:\w{2}/i.test(ticket)) {
			console.log ("Выбран билет на концерт")
		} else if (/\w+\-\d{12}\:\w{2}/i.test(ticket)) {
			console.log ("Выбран билет в театр")
		} else {
			console.log ("Билет не определен")
		}

// 2.1 Задана переменная, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип
		for (let i = 0; i < values.length; i++) {
			if (typeof values[i] == "boolean") {
				values[i] = "Булевый тип";
				break;
			}
		}
		console.log (values);

// 2.2 Создать новый массив с артикулами которые заканчиваются на две цифры и два буквенных символа
		let result = partNumbers.filter (i => /\d{2}[A-Z]{2}$/.exec (i));
		console.log (result);

// 2.3 Сформируйте массив из чисел, которые встречаются в строке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений
		let numArray = layout.match (/\d+/g) || [];
		let resultArray = numArray.map (i => {
			if (i % 2 === 0) {
				i = i ** 2;
				return i;
			} else return +i;
		}
		)
		console.log (resultArray);

// 2.4 Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks
		let tasks = [
			{title: "Умыться" , completed: true},
			{title: "Сделать зарядку" , completed: true},
			{title: "Приготовить завтрак" , completed: false}
		];
		let titles = tasks.map (i => i.title);
		console.log (titles);

// 2.5 Cформируйте массив, который должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения
		let values = [true,"Число",false,"Не число",false,"Строка"];
		let start = values.findIndex(el => typeof el === "boolean");
		let end = values.findLastIndex(el => typeof el === "boolean");
		let result = values.slice(start, end+1);
		console.log (result);

// 2.6 Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа
		let values = [10, 185, 11200, 980];
		let result = values.some (el => (el + "").length === 4)
		console.log (result);

// 2.7 Доработать 2.6. Если встречаются, вывести индекс первого. В противном случае вывести "Искомый элемент не был найден"
		let values = [10, 185, 11200, 980];
		let result = values.findIndex (el => (el + "").length === 4)
		console.log (result !==-1 ? result : "Искомый элемент не был найден");

// 2.8 Переменная users хранит в себе массив, элементы которого являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова
		let users = [
			{login: "user1", role: "Admin"},
			{login: "user2", role: "State user"},
			{login: "user3", role: "Moderator"}
		]
		let index;
		for (i = 0; i < users.length; i++) {
			if (/\s/.test(users[i].role)) index = i;
		}
		console.log (index);

// 2.9 Отсортировать двумерный массив по количеству элементов вложенного массива по возрастанию
		let array = [[1,2,3],[1,2],[1,2,3,4]];
		let result = (a, b) => {
			if (a.length == b.length) return 0;
			if (a.length < b.length) return -1;
			if (a.length > b.length) return 1;
		}
		array.sort (result);
		console.log (array);

// 2.10 Отсортируйте массив следующим образом: В начале массива должны быть все числовые значения по возрастанию В конце все строковые, упорядоченные по алфавиту
		let result = (a, b) => {
			if (a == b) return 0;
			if (a < b) return -1;
			if (a > b) return 1;
			}
		console.log(randValues.sort(result));

// 2.11 Посчитайте количество палиндромов и непалиндромов в массиве words. 1 значение - палиндромы, 2 значение - непалиндромы
		let words = ["Заказ", "Такси", "Доход"];
		let word = [];
		let result = [0, 0]
		for (let value of words) {
			for (i = 0; i < value.length; i++) {
				word.push(value.charAt(i).toLowerCase());
			}
			console.log (word);
			console.log (word.reverse());
			if (word.toString() === word.reverse().toString()) {
					result[0]+= 1;
				} else {
					result[1]+= 1;
				}
			word = []; 
		}
		console.log (result);

// 2.12 В строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. Сформируйте массив с датами в формате ДД/ММ/ГГГГ
		let dates = "23.04.1996 07.10.2002 15.08.1945";
		let newDates = "";
		for (let i = 0; i < dates.length; i++) {
			if (dates.charAt(i) !== ".") {
				newDates += dates.charAt(i);
			} else {
				newDates += "/";
			}
		}
		let arrDates = newDates.split(" ");
		console.log (arrDates);

// 2.13 Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект
		let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
		let obj = {};
		let arr = tickets.split(".");
		arr = arr.filter(el => {
			if (el) {
				return el;
			}
		});
		arr = arr.map(el => {
			return el.split(": ");
		})
		arr.forEach(el => {
			el[0] = el[0].trim();
			obj[el[0].toLowerCase()] = el[1].split(", ");
		})
		console.log (obj);

// 2.14 Определите, какое максимальное количество элементов массива numbers можно сложить, чтобы их итоговая сумма не превышала 50
		let cnt = numbers.reduce((acc, el) => {
			if (acc.sum + el <= 50) {
				acc.cnt++;
				acc.sum += el;
			}
			return acc;
		}, {cnt: 0, sum: 0})
		console.log(cnt.cnt);

// 2.15 Определите cумму всех элементов, которые при преобразовании в число не вернут значение NaN
		let result = values.reduce ((acc, el) => {
			if (!isNaN(el)) {
				acc += +el;
			}
			return acc;
		}, 0)
		console.log (result);

// 2.16 Создать массив с числами, которые встречаются в обоих массивах-аргументах, и отсортированы по убыванию
		let array_1 = [2, 4, 7, 8, 1],
		array_2 = [2, 5, 11, 6, 1];
		function intersection (arr1, arr2) {
			let result = arr1.filter(el => arr2.includes(el));
			result.sort ((a, b) => b - a);
			return result;
		}
		console.log (intersection(array_1, array_2));