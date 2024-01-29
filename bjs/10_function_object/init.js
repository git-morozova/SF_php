// функция генерации нового пользователя
function generateNewUser() {   
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthOutput').innerText = initPerson.dayOfBirth + " " + initPerson.monthOfBirth + " " + initPerson.yearOfBirth + " г.";
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('avatar').src = initPerson.avatar;
};

// вызов функции при загрузке страницы
window.onload = () => generateNewUser();

// кнопка "Сгенерировать пользователя"
document.getElementById('refresh').addEventListener('click', () => {
    generateNewUser();
});

// кнопка "Очистить поля"
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('patronymicOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthOutput').innerText = "";
    document.getElementById('professionOutput').innerText = "";
    document.getElementById('avatar').src = "img/anonim.png";
});