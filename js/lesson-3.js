
// Task 1
//Функция принимает один параметр — массив чисел, и вычисляет общую сумму его элементов, которая хранится в переменной и возвращается в результате работы функции.calculateTotalPrice(orderedItems)orderedItemstotalPrice

//Завершите вызов метода, передав ему функцию обратного вызова, которая на каждой итерации прибавляет значение текущего элемента массива.forEachorderedItemstotalPrice

//Функция объявлена.calculateTotalPrice(orderedItems)
//Вызов функции возвращает .calculateTotalPrice([12, 85, 37, 4])138
//Вызов функции возвращает .calculateTotalPrice([164, 48, 291])503
//Вызов функции возвращает .calculateTotalPrice([412, 371, 94, 63, 176])1116
//Вызов функции со случайными, но допустимыми аргументами возвращает правильное значение.


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach();
  return totalPrice;
}


//Task2
const numbers = [5, 10, 15, 20];
const res = numbers.filter((item, index, array) => {
return item > 10;
});

console.log(res);

// or 
//const res = numbers.filter(item => item> 10);


// Task 3
const allCars = [
  { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
  { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
  { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
  { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
  { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
  { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
  { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
  { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
  { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
  { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
];


const filterByPrice = (cars, threshold) =>{
  return cars.filter((car) => car.price < threshold);


}
console.log(filterByPrice(allCars, 30000));


const getCarsWithType = ( arr, type) => {
  return arr.filter( item => item.type === type);
}

// REDUCe
const numbers = [1,10 ,15, 20 , 25];
const total = numbers.reduce((acc, number ) => acc + number, 0 );
console.log(total);

const salary ={
  mango : 100,
  poly : 50,
  alex : 150,
}
const values = Object.values(salary);
const total = values.reduce((acc, value) => acc + value, 0);
console.log(total);

// Task
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const total = cart.reduce((acc, item ) => acc+ item.price * item.quantity, 0)
console.log(total);

//Task 
const arr = ["apple,🍎", "orange,🍑", "banana,🍌", "lemon,🍋"]
const obj = arr.reduce((acc, item) => {
const itemArr = item.split(",");
const key = itemArr[0];
const value =itemArr[1];
})



//Стрілочні функції
const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
 this in foo: {username: 'Resort hotel', showThis: ƒ}
 this in showThis: {username: 'Resort hotel',showThis: ƒ}


//Task
/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */


 class Blogger {
     constructor(obj) {
         this.email = obj.email;
         this.age = obj.age;
         this.numberOfPosts = obj.numberOfPosts;
         this.topics = obj.topics;
     }

     getInfo() {
         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
     }

     updatePostCount(value) {
         this.numberOfPosts += value;
     }
 }


 const alice = new Blogger({
     email: "alice@gmail.com",
     age: 30,
     numberOfPosts: 20,
     topics: ["tech", "gaming"]
 });

 alice.updatePostCount(10);
 console.log(alice.getInfo());
 console.log(alice);


 const petya = new Blogger({
     email: "petya@gmail.com",
     age: 20,
     numberOfPosts: 10,
    topics: ["cooking"]
 })

 petya.updatePostCount(2);
 console.log(petya.getInfo());
 console.log(petya);





//Task
/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {
//     #login;
//     #email;

//     constructor(obj) {
//         this.#login = obj.login;
//         this.#email = obj.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(str) {
//         this.#email = str;
//     }

// }


// const alice = new User({ login: "Alice", email: "alice@gmail.com" });


// alice.login = "Super Alice";
// console.log(alice.login);

// alice.email = "super_puper@gmail.com";
// console.log(alice.email);


// console.log(alice);





//Task
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


 const cruiseControl = {
     speed: 0,
     brand: "Audi",
     accelerate() {
        this.speed += 10;
         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
    },
     decrease() {
         if(this.speed <= 0) {
             console.log("Авто зупинилось");
            return;
        }

         this.speed -= 10;
         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
     }
 }


 cruiseControl.accelerate();
 cruiseControl.accelerate();

 cruiseControl.decrease();
 cruiseControl.decrease();
 cruiseControl.decrease();
 cruiseControl.decrease();
 cruiseControl.decrease();

 console.log(cruiseControl);










// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


const SPEED = 60;

const bmw = {
    speed: 30,
    brand: "BMW"
}

const audi = {
    speed: 80,
    brand: "Audi"
}

function speedSensor(maxSpeed) {
    if(this.speed <= maxSpeed) {
        return `Автомобіль ${this.brand} рухається з безпечною швидкістю. Швидкість ${this.speed}`;
    }

    return `Автомобіль ${this.brand} перевищує`;
}

const speedSensorBmw = speedSensor.bind(bmw);
console.log(speedSensorBmw(SPEED))

console.log(speedSensor.call(audi, SPEED));