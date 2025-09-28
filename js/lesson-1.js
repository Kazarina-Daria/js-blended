
//Task 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так  виведіть повідомлення 'Вірно' у alert().
//    Якщо ні  виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

//const number = Number(prompt('Write a nummber'));
//if(number === 10){
   // alert('true');
//}else{
 //   alert('false');
//}
//console.log(number);


//number === 10 ? alert('true') : alert('false');
//or
// alert(number === 10 ? "true" : "false");







//Task 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "15 входить в першу чверть"

/*  const min = Math.floor(Math.random() * (59 - 0) + 0);
 if (  min <= 15) {
    alert (`${min} is in 1/4`);
 } else if ( min > 15 && min <= 30){
     alert (`${min} is in 2/4`);
 } else if ( min > 30 && min <= 45){
       alert (`${min} is in 3/4`);
 } else { 
     alert (`${min} is in 4/4`);
 }
console.log (min); */







//Task 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

/* let num = prompt("Enter a number (1–4):");
switch (num) {
    case '1':
        console.log ("winter");
        break;
        case '2':
         console.log ("spring");
            break;
            case '3':
               console.log ("summer");
                break;
                case '4':
                  console.log ("autumn");
                    break;
                    default:
                       console.log ("Вибачте, але ви маєте ввести значення від 1 до 4 включно");

}