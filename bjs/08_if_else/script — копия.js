let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1; //порядковый номер вопроса
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
// answerField.innerText = `Вы загадали число ${answerNumber }?`;



/* ФУНКЦИИ ДЛЯ РАНДОМНОГО ВЫБОРА ФРАЗ */
let switchPhrase = {

    // вопрос, верное ли число
    question: function() {
      const phraseRandom = Math.round(Math.random() * 4);            
              switch (phraseRandom) {
                  case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                  case 1:
                    answerField.innerText = `Хм... Возможно, это число ${answerNumber }?`;
                    break;
                  case 2:
                      answerField.innerText = `Да это легко! Вы загадали ${answerNumber }?`;
                    break;
                  case 3:
                      answerField.innerText = `Дайте подумать... Может, ${answerNumber }?`;
                    break;
                  default:
                      answerField.innerText = `Неужели это число ${answerNumber }?`;
        }
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
        }
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
              answerField.innerText = `О, ${answerNumber } - одно из моих любимых чисел! \n\u{1F495}`;
            break;
          case 3:
              answerField.innerText = `Да здравствует магия JS! \n\u{1F4AA}`;
            break;
          default:
              answerField.innerText = `Это было просто! Вы загадали число ${answerNumber } \n\u{1F609}`;
        }
    }  
}



// тут мы первый раз вызываем функцию вопроса, верное ли число
switchPhrase['question']();



/* КНОПКА МЕНЬШЕ */
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue + 1 >= maxValue){
            switchPhrase['error']();   // вызов функции для выбора фразы с ошибкой
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
        }
    }
})



/* КНОПКА БОЛЬШЕ */
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            switchPhrase['error']();  // вызов функции для выбора фразы с ошибкой
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
        }
    }
})



/* КНОПКА ВЕРНО */
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){     
        switchPhrase['equal']();    // вызов функции для выбора фразы Верно    
        gameRun = false;
    }
})



/* КНОПКА ЗАНОВО */
document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = parseInt(prompt('Новое минимальное значение числа','0'));
  maxValue = parseInt(prompt('Новое максимальное значение числа','100'));
  answerNumber  = Math.floor((minValue + maxValue) / 2);
  switchPhrase['question'](); // вызов функции для выбора фразы с вопросом
  orderNumber = 1;
  orderNumberField.innerText = orderNumber;
  gameRun = true;
})
