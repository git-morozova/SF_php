// убрать округление до целого

let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
//console.log(typeof(inputWindow.value));


/* запрещаем вводить в поле что-либо, кроме цифр */
function filterField(e) { 
    // e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
     e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё^\s()-+]/, '');
   }  
   let inputElement = document.getElementById('inputWindow');
   inputElement.addEventListener('input', filterField);


/* верхние голубые кнопки */
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_del').addEventListener('click', function () {  
    if (inputWindow.value.slice(-2,-1) == '.') {
        inputWindow.value = inputWindow.value.slice(0,-2);
    } 
    
    else {
        inputWindow.value = inputWindow.value.slice(0,-1);
    }        
})

document.getElementById('btn_rev').addEventListener('click', function () {  
    if (inputWindow.value == '') {
        inputWindow.value = '-';       
    } 
    else if (inputWindow.value == '-') {
        inputWindow.value = '';       
    } 
    else {
        const result = parseFloat(inputWindow.value) * (-1);
        inputWindow.value = result;       
    }    
})

/* цифры и точка */
document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () { 
    inputWindow.value += '9';        
})

/* зеленые операторы */
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})


document.getElementById('btn_mlt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mlt';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

/* функции для операторов */
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toFixed(0);
        console.log(typeof(inputWindow.value));
    } 

    if (operation === 'def') {
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toFixed(0);
    }
    
    if (operation === 'mlt') {
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toFixed(0);
    }
     
    if (operation === 'div') {
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toFixed(0);
    }

})
