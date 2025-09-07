// Task 1
Функция принимает один параметр — массив чисел, и вычисляет общую сумму его элементов, которая хранится в переменной и возвращается в результате работы функции.calculateTotalPrice(orderedItems)orderedItemstotalPrice

Завершите вызов метода, передав ему функцию обратного вызова, которая на каждой итерации прибавляет значение текущего элемента массива.forEachorderedItemstotalPrice

Функция объявлена.calculateTotalPrice(orderedItems)
Вызов функции возвращает .calculateTotalPrice([12, 85, 37, 4])138
Вызов функции возвращает .calculateTotalPrice([164, 48, 291])503
Вызов функции возвращает .calculateTotalPrice([412, 371, 94, 63, 176])1116
Вызов функции со случайными, но допустимыми аргументами возвращает правильное значение.


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
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
