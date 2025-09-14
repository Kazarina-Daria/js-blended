// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.map(number => number * number);
console.log(newArr);



// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
{ id: 1, values: [1, 2, 3] },
{ id: 2, values: [4, 5, 6] },
{ id: 3, values: [7, 8, 9] },
];

const result = data.flatMap( obj => obj.values);
console.log(result);


// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const age = people.some( obj => obj.age < 20);
console.log(age);


// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

 const number = [2, 4, 6, 8, 10];
 const even = number.every(obj => obj % 2 === 0);
 console.log(even);
 

// Знайдіть перше непарне число
 const num = [2, 1, 6, 8, 9, 10, 12];
 const odd = num.find( obj => obj % 2 !== 0);
 console.log(odd);

 
 // Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

 const numbersArray = [4, 2, 5, 1, 3];
const sortNum = numbersArray.toSorted((a,b) => a - b);
console.log(sortNum);


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

 const stringArray = ['banana', 'orange', 'apple', 'pear'];
 const sortArr = stringArray.toSorted((a,b) => a.localeCompare(b));
 console.log(sortArr);
 


 //  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];
const sortAge = users.toSorted((a,b) =>  a.age - b.age);
console.log(sortAge);




// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const ageFilter = user.filter(obj =>obj.age > 20);
console.log(ageFilter);




// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numb = [1, 2, 3, 4, 5];
const sum = numb.reduce((total, el) => total + el, 0);
console.log(sum);




// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
const products = [
  { name: 'Milk', price: 20 },
  { name: 'Bread', price: 10 },
  { name: 'Eggs', price: 15 },
];

const list = products
.filter(obj => obj.price > 10)
.reduce((previousValue, element) => previousValue + element.price, 0);
console.log(list);

// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
]

function getGirlsPassports(friends){
    return friends
    .filter(friends => friends.sex === 'f')
    .map(friends => friends.passport);
}
console.log(getGirlsPassports(friends));



//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(30, 20);







// Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client{
    #login;
     #email;
    constructor(login, email){
this.#login = login;
this.#email = email;
    }
    get login (){
        return this.#login;
    }
    set login (newLogin){
        this.#login = newLogin;
    }
    get email(){
        return this.#email;
    }
set email (newEmail){
    this.#email = newEmail;
}
}
const client = new Client( "lala123", "lala@gmail.com");
client.login = "tototo123";
console.log(client.login);
console.log(client.email);



 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();



class Calculator{
    constructor(){
this.result = 0;
    }

number(value){
this.result = value;
return this;
}
getResult(){
    return this.result;
}
add(value){
    this.result += value;
    return this;
}
substruct (value){
      this.result -= value;
    return this;
}
divide(value){
    if(value !== 0){
 this.result /= value;
    return this;}
    else {
        return "can not divide";
    }
}
multiply(value){
 this.result *= value;
    return this;
}
}


const calc = new Calculator();
const resultat = calc
.number(20)
.add(100)
.substruct(58)
.multiply(2)
.divide(2)
.getResult(); 


console.log(resultat); // 62




  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person{
    constructor(name, age, gender, email){
this.name= name;
this.age= age;
this.gender= gender;
this.email= email;
    }
    getDetails(){
        return {
            name : this.name,
            age : this.age,
            gender: this.gender,
            email : this.email
        }
    }
}

class Employee extends Person {
constructor(name, age, gender, email, salary, department){
super(name, age, gender, email);
 this.salary = salary;
    this.department= department;
}
getEmployeeDetails(){
    return {salary : this.salary,
    department : this.department
}
}
}
const employee = new Employee("Alice", "23", "f", "alice@gmail.com", "5000", "IT");
console.log(employee.getEmployeeDetails());

// Створіть клас BankAccount, який має конструктор для зберігання балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу. 
// Виводить повідомлення `Залишок на рахунку: balance грн.`

class BankAccount{
    constructor(balance){
this.balance = 0;
    }
   withdraw(value){
    if ( this.balance >= value){
       this.balance -= value;
        return `Знято ${value} грн. Залишок на рахунку: ${this.balance} грн.`
    }
   } 
   drposit(value){
 this.balance += value;
}}