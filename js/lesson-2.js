/* Task 1
Функция принимает в качестве параметра объект окладов (). Каждое свойство объекта является ключом, содержащим имя сотрудника, а его значением является соответствующая ему зарплата.countTotalSalary(salaries)salariessalaries

Завершите функцию так, чтобы она возвращала общую сумму зарплат всех сотрудников.countTotalSalary(salaries)

Инициализируем переменную со значением 0, которая будет отвечать за общую сумму зарплат всех сотрудников.totalSalary
Используйте этот метод для получения значений (окладов) из объекта.Object.values()salaries
Переберем полученные значения с помощью цикла и прибавим каждое значение к переменной.totalSalary
В результате вернемся.totalSalary
Функция объявлена.countTotalSalary(salaries)
Вызов возвращается.countTotalSalary({})0
Вызов возвращается.countTotalSalary({ mango: 100, poly: 150, alfred: 80 })330
Вызов возвращается.countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })400


function countTotalSalary(salaries) {
  
  let totalSalary = 0;
  const value = Object.values(salaries);

for (let salaries of value) {
  totalSalary += salaries;
}
return totalSalary; 
}*/




//Task 2
/* Массив содержит коллекцию цветов. Каждый цвет представлен в виде объекта со свойствами и , содержащими соответствующие значения для каждого формата и цвета.colorshexrgb

Перебирайте массив объектов с помощью цикла. Добавьте значения свойств в массив и значения свойств в массив из всех объектов в массиве.colorsfor...ofhexhexColorsrgbrgbColorscolors

Объявляется переменная.colors
Значение переменной представляет собой массив.colors
Объявляется переменная.hexColors
Значением переменной является массив .hexColors["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявляется переменная.rgbColors
Значением переменной является массив .rgbColors["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for( const color of colors){
   hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}*/



/* Task 3
Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8*/


/* Task 4 
/* Функция принимает единственный параметр — название товара. Функция содержит массив объектов со свойствами — название товара, — цена и — количество.getProductPrice(productName)productNameproductsnamepricequantity

Завершите код функции так, чтобы она искала в массиве объект product с определенным именем (свойством) и возвращала его цену (свойство). Если товар с таким именем не найден, функция должна вернуть .nameproductspricenull

Функция объявлена.getProductPrice(productName)
Вызов возвращается.getProductPrice(‘Radar’)1300
Вызов возвращает .getProductPrice(‘Grip’)1200
Модель 2700'.getProductPrice(‘Scanner’) call returns
Вызов возвращается.getProductPrice(‘Droid’)400
Вызов возвращается.getProductPrice(‘Engine’)null

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for( const product of products){
    if(  product.name === productName){
      return product.price;
    }
  }
   return null;  
}*/



//Task 5
/* const friends = [
    { name: "Ross", online: false },
    { name: "Joey", online: true },
    { name: "Chandler", online: false },
    { name: "Phoebe", online: true },
    { name: "Monica", online: true },
    { name: "Rachel", online: false },
];

function findByName (arr, fiendName){
  for(const item of arr){
    if(item.name === fiendName){
      return item;
    }
  }
return "Not found" ;
}

function getAllNames(arr){
const names = [];
for(const friend of arr){
names.push(friend.name);
}
return names;
}

function getOnlineFriends (arr){
const onlineFriends = [];
for( const item of arr) {
  if(item.online === true){
    onlineFriends.push(item.name);
  }
}
return onlineFriends;
}*/









//Task 6
/* Напишите функцию, которая принимает один параметр — имя (ключ) свойства. Функция должна возвращать массив всех значений свойств с этим именем от каждого объекта в массиве. Если в объектах нет свойств с таким именем, функция должна вернуть пустой массив.getAllPropValues(propName)propNameproducts

Функция объявлена.getAllPropValues(propName)
Вызов возвращается.getAllPropValues("name")["Radar", "Scanner", "Droid", "Grip"]
Вызов возвращается.getAllPropValues("quantity")[4, 3, 7, 9]
Вызов возвращается.getAllPropValues("price")[1300, 2700, 400, 1200]
Вызов возвращается.getAllPropValues("category")[]


function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let values = [];
  for (const product of products){
    if(propName in product){
    values.push(product[propName]);
    }
  }
   return values;
}*/







//Task 7

/* const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 3 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice( stones, stoneName){
  let sum =0;
   for(const item of stones){
    if(stoneName.name === stoneName){
      sum += stoneName.price * stoneName.quantity;
    }
   }
   return sum;
}*/





//Task 8
/* Объект обладает следующими свойствами:atTheOldToad

potions — массив предметов зелий.
getPotions() — метод, возвращающий значение свойства.potions
updatePotionName() — метод, принимающий два строковых параметра, и .oldNamenewName
Завершите метод так, чтобы он обновил имя зелья с на в массиве зелий в свойстве.updatePotionName(oldName, newName)oldNamenewNamepotions

Переменная была объявлена.atTheOldToad
Значение переменной является объектом.atTheOldToad
Значением свойства является массив.atTheOldToad.potions
Значение свойства — это метод объекта.atTheOldToad.updatePotionName
После первого вызова метода свойство будет содержать массив .atTheOldToad.updatePotionName("Stone skin", "Invisibility")potions[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for(const names of this.potions){
      if( names.name === oldName){
        names.name = newName;
      }
    }
  },
};*/


//Task 9
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

/*const styles=['jazz', 'blues'];
styles.push('rock-n-roll');
const index = styles.indexOf('blues');
if( index !== -1){
  styles[index] = 'classic' ;
}

function logItems(array) {
  for( let i = 0, i <= array.length, i++){
console.log(`${i + 1} - ${ array[i]}`);

  }
}
logItems(styles);*/








//Task 10
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві  виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє  виводить повідомлення: "User not found".

/*const logins = ["Peter", "John", "Igor", "Sasha"];
function checkLogin(array){
  let question = promt( "What's your name?");
  if (array.indexOf(question) !== -1){
alert: ("Welcome, ${question}");
} else {
alert ("User not found");
}
  }

checkLogin(logins);*/


// Task 11
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(... args){
let sum = 0;
let count = 0;
for ( const value of args){
  if( typeof value === "number"){
 sum += value;
 count ++
  }
}
return sum / count;
}
