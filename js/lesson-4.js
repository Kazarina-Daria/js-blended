// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
const bodyEl = document.querySelector("body");
console.log(bodyEl);

const title = document.querySelector("#title");
console.log(title);

const list = document.querySelector(".list");
console.log(list);

const topicEl = document.querySelectorAll('[data-topic]');
console.log(topicEl);

const firstElList = topicEl [0];
console.log(firstElList);

const lastElList = topicEl [topicEl.length - 1];
console.log(lastElList);

const titleSibling = title.nextElementSibling;
console.log(titleSibling);

const h3Titles =  document.querySelectorAll("h3");
console.log(h3Titles);

const h3TitelsActive = h3Titles.forEach(h3 => h3.classList.add("active"));


//10
const liElAtributTopic = document.querySelector('li[data-topic = "navigation"]');
console.log(liElAtributTopic);

liElAtributTopic.style.backgroundColor= "yellow";

const pInsideNavigation = liElAtributTopic.querySelector('p');
pInsideNavigation.textContent ="Я змінив тут текст!";

const currentTopic = "manipulation";
const valueCurrentTopic = document.querySelector(`[data-topic = "${currentTopic}"]`) ;
console.log(valueCurrentTopic);

valueCurrentTopic.style.background = "blue";

const titleCompleted= document.querySelector(".completed");
console.log(titleCompleted);

const titleRemove = titleCompleted.closest("li").remove();

const createEl = document.createElement("p");
createEl.textContent = "Об'єктна модель документа (Document Object Model)";
list.append(createEl);

list.insertAdjacentHTML("beforeend", `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`);

list.innerHTML = " ";




// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const div = document.querySelector(".number-container");

for( let i = 0; i < 100; i++){
  const block = document.createElement("div");
   block.classList.add("number");

   const num = randomNumber();
     block.textContent = num; 
if(num % 2 === 0){
block.style.backgroundColor = "green";
}else {
block.style.backgroundColor = "yellow";
}

    div.append(block);
};

// Form Events, Input, Focus, Blur and Submit.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const form = document.querySelector(".js-contact-form");
const usernameInput = form.elements.userName;
const spanOutput = form.querySelector(".js-username-output");

usernameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
if (usernameInput.value.length < 6  ){

usernameInput.classList.add("error");
usernameInput.classList.remove("success");

}else{
usernameInput.classList.add("success");
usernameInput.classList.remove("error");

}

spanOutput.textContent = value === "" ? "Anonimus" : value ;
});




// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

usernameInput.addEventListener("focus", (e) =>{
  if(usernameInput.value.trim() === ""){
usernameInput.style.outline = '3px solid red';
  }else{
usernameInput.style.outline = '3px solid green';
  }
}
);

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
usernameInput.addEventListener("blur", (e) =>{
if(usernameInput.value.trim () === ""){
usernameInput.style.outline = '3px solid red';
  }else{
usernameInput.style.outline = '3px solid lime';
  }
}
);

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

 
form.addEventListener("submit", (e) => {
  e.preventDefault();

const inputValue = e.target.elements.userName.value.trim();

  const { userName, accept } = e.target.elements;

  if (inputValue === "") {
    alert("Input can not be empty");
    return;
  }

  if (!accept.checked) {
    alert("Check!!!");
    return;
  }

  console.log({ userName: inputValue });
  e.target.reset();
});


// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector(".box");
const decreaseButton = document.querySelector(".js-decrease");
const increaseButton = document.querySelector(".js-increase");

decreaseButton.addEventListener("click", handleDecrease);
function handleDecrease (){
  const newSize = box.offsetWidth - 20 ;
  if( newSize > 0){
    box.style.width = newSize + "px";
     box.style.height = newSize + "px";
  }
};
increaseButton.addEventListener("click", handleInc);
function handleInc (){
  const newSize = box.offsetWidth + 20 ;
    box.style.width = newSize + "px";
     box.style.height = newSize + "px";
  }

