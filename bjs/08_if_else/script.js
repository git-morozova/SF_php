let minValue = prompt('Минимальное значение числа для игры','0');
let maxValue = prompt('Максимальное значение числа для игры','100');

let answerText = null;
let orderNumber = 1; //порядковый номер вопроса
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;



/* ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ВВЕДЕННЫХ ЗНАЧЕНИЙ */
let checkValues = function () {   

/* При вводе текста, который не может быть интерпретирован как число (NaN), присваивать значения по умолчанию, 
используя короткий цикл операций дизъюнкции */
minValue = parseInt(minValue) || 0; // это сработает, т.к. 0 (равный false) - и так значение по умолчанию
maxValue === '0' ? maxValue = 0 : maxValue = (parseInt(maxValue) || 100);  // а вот тут надо сделать доп. проверку на строковое значение "0", иначе 0 будет заменяться на 100

/* При вводе максимума или минимума больше 999 или меньше -999 изменять число на ближайшую границу 
(например, 1000 на 999, а -10000 на -999), используя тернарный оператор */
minValue < -999 ? minValue = -999 : minValue;
minValue > 999 ? minValue = 999 : minValue;
maxValue < -999 ? maxValue = -999 : maxValue;
maxValue > 999 ? maxValue = 999 : maxValue;

// проверяем, что максимальное число больше минимального
if (minValue >= maxValue) {
  alert(`Ошибка: минимальное число больше или равно максимальному`);
  window.location.reload();  
}
}



//вызываем ее
checkValues();

// считаем среднюю только после проверки введенных чисел
let answerNumber  = Math.floor((minValue + maxValue) / 2);



/* ФУНКЦИЯ ДЛЯ ТЕКСТОВОЙ ЗАПИСИ ЧИСЛА */
let numToText = function (answerNumber) {  

// определяем отрицательный answerNumber
let minus = false;
if (answerNumber.toString().substring(0,1) == '-') {
  minus = true; 
}

// берем модуль answerNumber, чтобы минус не мешался
answerNumber = Math.abs(answerNumber);

  // задаем переменные для текста - сотен, десятков, единиц и заодно обнуляем их
  let thirdText = '';
  let secondText = '';
  let firstText = '';

// подфункция переписывает числа 1-19 в текст
  let firstNumToText = function (firstNum) {
  switch (firstNum) {
      case 1:      firstText = `один`;      break;
      case 2:      firstText = `два`;      break;
      case 3:      firstText = `три`;      break;
      case 4:      firstText = `четыре`;      break;
      case 5:      firstText = `пять`;      break;
      case 6:      firstText = `шесть`;      break;
      case 7:      firstText = `семь`;      break;
      case 8:      firstText = `восемь`;      break;
      case 9:      firstText = `девять`;      break;
      case 10:      firstText = `десять`;      break;
      case 11:      firstText = `одиннадцать`;      break;
      case 12:      firstText = `двенадцать`;      break;
      case 13:      firstText = `тринадцать`;      break;
      case 14:      firstText = `четырнадцать`;      break;
      case 15:      firstText = `пятнадцать`;      break;
      case 16:      firstText = `шестнадцать`;      break;
      case 17:      firstText = `семнадцать`;      break;
      case 18:      firstText = `восемнадцать`;      break;
      case 19:      firstText = `девятнадцать`;      break;
  }}

// подфункция переписывает числа 20, 30, 40 ... 90 в текст
  let secondNumToText = function (secondNum) {
  switch (secondNum) {      
    case '2':      secondText = `двадцать`;      break;
    case '3':      secondText = `тридцать`;      break;
    case '4':      secondText = `сорок`;      break;
    case '5':      secondText = `пятьдесят`;      break;
    case '6':      secondText = `шестьдесят`;      break;
    case '7':      secondText = `семьдесят`;      break;
    case '8':      secondText = `восемьдесят`;      break;
    case '9':      secondText = `девяносто`;      break;   
}}

// подфункция переписывает числа 100, 200, 300 ... 900 в текст
  let thirdNumToText = function (thirdNum) {
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
}}

    // если пробное число - от 1 до 19
    if (1 <= answerNumber && answerNumber <= 19) {  
    let firstNum = answerNumber;
    firstNumToText(firstNum); // просто вызываем подфункцию, которая переписывает числа 1-19 в текст
    }

    // если пробное число - от 20 до 99
    else if (answerNumber >= 20 && answerNumber <= 99) { 

    let firstNum = answerNumber% 10; // остаток от деления на 10 - наши единицы
    firstNumToText(firstNum); // для единиц вызываем подфункцию, которая переписывает в том числе числа 1-9 в текст

    let secondNum = answerNumber.toString().slice(0,-1); // Название разряда десятка - наши десятки
    secondNumToText(secondNum); // для десятков - своя подфункция   
    }

    // если пробное число - от 100 до 999
    else if (answerNumber >= 100 && answerNumber <= 999) { 
      let firstNum = answerNumber.toString().slice(-2);  
            // если десятки и единицы входят в 1-19, выполняем это
            if (firstNum >= 1 && firstNum <= 19) {
              firstNum = answerNumber% 100; // остаток от деления на 100 - наши 1-19
              firstNumToText(firstNum); // для единиц вызываем подфункцию, которая переписывает числа 1-19 в текст

              // это чтобы убрать баг с пробелами (например, число 312 - пробел между 300 и 12 теряется при сборке текста (secondText && thirdText));
              secondText = firstText;          
              firstText = null;
            }
          
            // если десятки и единицы входят в 20-99, выполняем это
            else {
              firstNum = answerNumber% 10; // остаток от деления на 10 - наши единицы
              firstNumToText(firstNum); // снова берем подфункцию для единиц, но она для 1-9 на этот раз

              let secondNum = answerNumber.toString().slice(-2,-1); // Название разряда десятка - наши десятки
              secondNumToText(secondNum); // для десятков - своя подфункция 
            }
          
        // сотни переводим в текст одинаково
        let thirdNum = answerNumber.toString().substring(0,1); // Название разряда сотен - наши сотни
        thirdNumToText(thirdNum); // для сотен - своя подфункция
      }    

    else {
      // остался ноль. выводим как 0
      answerText = null;  
    }

// собираем текст: сотни + десятки + единицы. Не забываем про пробелы...
answerText = (thirdText ? thirdText : '') + ((secondText && thirdText) ? (' ') : ('')) + (secondText ? secondText : '') + ((secondText && firstText) ? (' ') : ('')) + (firstText ? firstText : ''); 
// ...и минус
if (minus) {
  answerText = 'минус ' + answerText;
}

// проверка на кол-во знаков в получившемся тексте
if (answerText.length >= 20) {
  answerText = null;
}
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
  minValue = prompt('Новое минимальное значение числа','0');
  maxValue = prompt('Новое максимальное значение числа','100');
  checkValues(); // вызов функции проверки введенных значений
  answerNumber  = Math.floor((minValue + maxValue) / 2);  
  orderNumber = 1;
  orderNumberField.innerText = orderNumber;
  numToText(answerNumber); // вызов функции текстового представления
  switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
  gameRun = true;
})