let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let answerText = null;
let orderNumber = 1; //порядковый номер вопроса
let gameRun = true;

// проверяем, что пользователь не дурак и максимальное число больше минимального
if (minValue > maxValue) {
  alert(`Ошибка`);
  window.location.reload();  
}

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;



// ФУНКЦИЯ ДЛЯ ТЕКСТОВОЙ ЗАПИСИ ЧИСЛА

// задаем переменные для текста - сотен, десятков, единиц
let thirdText;
let secondText;
let firstText;

// функция
let numToText = function (answerNumber) {

  //обнуляем предыдущие текстовые значения
  thirdText = '';
  secondText = '';
  firstText = '';

  // от 1 до 19
  if (1 <= answerNumber && answerNumber <= 19) {  
  switch (answerNumber) {
      case 1:      answerText = `один`;      break;
      case 2:      answerText = `два`;      break;
      case 3:      answerText = `три`;      break;
      case 4:      answerText = `четыре`;      break;
      case 5:      answerText = `пять`;      break;
      case 6:      answerText = `шесть`;      break;
      case 7:      answerText = `семь`;      break;
      case 8:      answerText = `восемь`;      break;
      case 9:      answerText = `девять`;      break;
      case 10:      answerText = `десять`;      break;
      case 11:      answerText = `одиннадцать`;      break;
      case 12:      answerText = `двенадцать`;      break;
      case 13:      answerText = `тринадцать`;      break;
      case 14:      answerText = `четырнадцать`;      break;
      case 15:      answerText = `пятнадцать`;      break;
      case 16:      answerText = `шестнадцать`;      break;
      case 17:      answerText = `семнадцать`;      break;
      case 18:      answerText = `восемнадцать`;      break;
      case 19:      answerText = `девятнадцать`;      break;
  }
}

// от 20 до 99
else if (answerNumber >= 20 && answerNumber <= 99) { 

// задаем переменные для цифровых значений - десятков, единиц
let secondNum = answerNumber.toString().substring(0,1); //десятки
let firstNum = answerNumber.toString().substring(1,2); //единицы 
  
  //переводим десятки в текст - Название разряда десятка
    switch (secondNum) {      
      case '2':      secondText = `двадцать`;      break;
      case '3':      secondText = `тридцать`;      break;
      case '4':      secondText = `сорок`;      break;
      case '5':      secondText = `пятьдесят`;      break;
      case '6':      secondText = `шестьдесят`;      break;
      case '7':      secondText = `семьдесят`;      break;
      case '8':      secondText = `восемьдесят`;      break;
      case '9':      secondText = `девяносто`;      break;   
  }

//переводим единицы в текст - название двузначного остатка от деления на 10
    switch (firstNum) {
      case '1':      firstText = `один`;      break;
      case '2':      firstText = `два`;      break;
      case '3':      firstText = `три`;      break;
      case '4':      firstText = `четыре`;      break;
      case '5':      firstText = `пять`;      break;
      case '6':      firstText = `шесть`;      break;
      case '7':      firstText = `семь`;      break;
      case '8':      firstText = `восемь`;      break;
      case '9':      firstText = `девять`;      break;  
      case '0':      firstText = ``;      break;    
    }
    answerText = secondText + ' ' + firstText;
}

// от 100 до 999
else if (answerNumber >= 100 && answerNumber <= 999) { 

  // задаем переменные для цифровых значений - сотен, десятков, единиц
  let thirdNum = answerNumber.toString().substring(0,1); //десятки
  let secondNum = answerNumber.toString().substring(1,2); //десятки
  let firstNum = answerNumber.toString().substring(2,3); //единицы 

    //переводим сотни в текст
      switch (thirdNum) {      
        case '1':      thirdText = `сто`;      break;
        case '2':      thirdText = `двести`;      break;
        case '3':      thirdText = `триста`;      break;
        case '4':      thirdText = `четыреста`;      break;
        case '5':      thirdText = `пятьсот`;      break;
        case '6':      thirdText = `шестьсот`;      break;
        case '7':      thirdText = `семьсот`;      break;
        case '8':      thirdText = `восемьсот`;      break;
        case '9':      thirdText = `девятьсот`;      break;   
    }
  
  //переводим десятки в текст
      switch (secondNum) {      
        case '1':      secondText = `ОЙ`;      break; // АХТУНГ
        case '2':      secondText = `двадцать`;      break;
        case '3':      secondText = `тридцать`;      break;
        case '4':      secondText = `сорок`;      break;
        case '5':      secondText = `пятьдесят`;      break;
        case '6':      secondText = `шестьдесят`;      break;
        case '7':      secondText = `семьдесят`;      break;
        case '8':      secondText = `восемьдесят`;      break;
        case '9':      secondText = `девяносто`;      break; 
        case '0':      firstText = ``;      break;   
    }
  
  //переводим единицы в текст
      switch (firstNum) {
        case '1':      firstText = `один`;      break;
        case '2':      firstText = `два`;      break;
        case '3':      firstText = `три`;      break;
        case '4':      firstText = `четыре`;      break;
        case '5':      firstText = `пять`;      break;
        case '6':      firstText = `шесть`;      break;
        case '7':      firstText = `семь`;      break;
        case '8':      firstText = `восемь`;      break;
        case '9':      firstText = `девять`;      break;  
        case '0':      firstText = ``;      break;    
      }
      answerText = thirdText + ' ' + secondText + ' ' + firstText;
  }

else {
  alert(`Ошибка`);
  window.location.reload();  
}

//console.log(answerText);
}



/* ФУНКЦИИ ДЛЯ РАНДОМНОГО ВЫБОРА ФРАЗ */
let switchPhrase = {

    // вопрос, верное ли число
    question: function() {
      const phraseRandom = Math.round(Math.random() * 4);            
              switch (phraseRandom) {
                  case 0:
                    answerField.innerText = `Вы загадали число ${answerText ? answerText : answerNumber}?`;
                    break;
                  case 1:
                    answerField.innerText = `Хм... Возможно, это число ${answerText ? answerText : answerNumber}?`;
                    break;
                  case 2:
                      answerField.innerText = `Да это легко! Вы загадали ${answerText ? answerText : answerNumber}?`;
                    break;
                  case 3:
                      answerField.innerText = `Дайте подумать... Может, ${answerText ? answerText : answerNumber}?`;
                    break;
                  default:
                      answerField.innerText = `Неужели это число ${answerText ? answerText : answerNumber}?`;
        };        
    },

    // если число НЕ угадано
    error: function() {
      const phraseRandom = Math.round(Math.random() * 4);            
              switch (phraseRandom) {
                  case 0:
                    answerField.innerText = `Вы загадали неправильное число! \n\u{1F914}`;
                    break;
                  case 1:
                    answerField.innerText = `Я сдаюсь.. \n\u{1F92F}`;
                    break;
                  case 2:
                      answerField.innerText = `Что-то пошло не так... Попробуйте еще раз \n\u{1F97A}`;
                    break;
                  case 3:
                      answerField.innerText = `Вы что-то напутали! \n\u{1F928}`;
                    break;
                  default:
                      answerField.innerText = `Вы меня сломали \n\u{1F915}`;
        };
    },

    // если число угадано
    equal: function() {
      const phraseRandom = Math.round(Math.random() * 4);            
      switch (phraseRandom) {
          case 0:
            answerField.innerText = `Я всегда угадываю \n\u{1F60E}`;
            break;
          case 1:
            answerField.innerText = `Ура! Я умею читать мысли \n\u{1F300}`;
            break;
          case 2:
              answerField.innerText = `О, ${answerText ? answerText : answerNumber} - одно из моих любимых чисел! \n\u{1F495}`;
            break;
          case 3:
              answerField.innerText = `Да здравствует магия JS! \n\u{1F4AA}`;
            break;
          default:
              answerField.innerText = `Это было просто! Вы загадали число ${answerText ? answerText : answerNumber} \n\u{1F609}`;
        }
    }  
}



numToText(answerNumber); // сначала вызов функции текстового представления
switchPhrase['question'](); // только потом вызываем функцию вопроса, верное ли число
// и в таком порядке работаем везде - сначала проверка, потом вывод текста/числа


/* КНОПКА МЕНЬШЕ */
document.getElementById('btnLess').addEventListener('click', function () {
  answerText = null; // обнуляем текстовое представление числа
    if (gameRun){
        if (minValue + 1 >= maxValue){
            switchPhrase['error']();   // вызов функции для выбора фразы с ошибкой
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            numToText(answerNumber); // вызов функции текстового представления
            switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
        }
    };
})



/* КНОПКА БОЛЬШЕ */
document.getElementById('btnOver').addEventListener('click', function () {
  answerText = null; // обнуляем текстовое представление числа
    if (gameRun){
        if (minValue >= maxValue){
            switchPhrase['error']();  // вызов функции для выбора фразы с ошибкой
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            numToText(answerNumber); // вызов функции текстового представления
            switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
        }
    }
})



/* КНОПКА ВЕРНО */
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){     
        switchPhrase['equal']();    // вызов функции для выбора фразы Верно    
        gameRun = false;
        answerText = null;
    }
})



/* КНОПКА ЗАНОВО */
document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = parseInt(prompt('Новое минимальное значение числа','0'));
  maxValue = parseInt(prompt('Новое максимальное значение числа','100'));
  answerNumber  = Math.floor((minValue + maxValue) / 2);  
  orderNumber = 1;
  orderNumberField.innerText = orderNumber;
  numToText(answerNumber); // вызов функции текстового представления
  switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
  gameRun = true;
})
