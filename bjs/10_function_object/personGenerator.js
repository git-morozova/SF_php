const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Анна",
            "id_3": "Светлана",
            "id_4": "Наталья",
            "id_5": "Елена",
            "id_6": "Анастасия",
            "id_7": "Татьяна",
            "id_8": "Зульфия",
            "id_9": "Виктория",
            "id_10": "Надежда"
        }
    }`,
    // при добавлении новых отчеств - сделать проверку на корректность генерации нового женского отчества 
    // (убрать в конце "ич", добавить "на")
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Сергеевич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,   
    monthOfBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    professionMaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "программист",
            "id_2": "сантехник",
            "id_3": "шахтер",
            "id_4": "слесарь",
            "id_5": "бухгалтер",
            "id_6": "врач",
            "id_7": "учитель",
            "id_8": "курьер",
            "id_9": "переводчик",
            "id_10": "астронавт",
            "id_11": "студент",
            "id_12": "токарь-фрезеровщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "программист",
            "id_2": "медсестра",
            "id_3": "няня",
            "id_4": "стюардесса",
            "id_5": "бухгалтер",
            "id_6": "врач",
            "id_7": "учитель",
            "id_8": "курьер",
            "id_9": "переводчик",
            "id_10": "астронавт",
            "id_11": "студент",
            "id_12": "горничная"
        }
    }`,

    GENDER_MALE: 'муж.',
    GENDER_FEMALE: 'жен.',

    AVATAR_MALE: 'img/male.png',
    AVATAR_FEMALE: 'img/female.png',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    

    // ПОЛ
    // В генерации пола воспользуйтесь тернарным оператором и переменными GENDER_MALE: 'Мужчина', GENDER_FEMALE: 'Женщина'
    randomGender: function() {       
        return (Math.round(Math.random()) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE); 
    },

    // ИМЯ
    //Требуется написать дополнительные условия if else
    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson); //м
        } else {
            return this.randomValue(this.firstNameFemaleJson); //ж
        }      
    },

    // ФАМИЛИЯ
    // Женскую фамилию нельзя писать в JSON, она должна происходить из предоставленных мужских фамилий
     randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson); //м
        } else {
            return this.randomValue(this.surnameJson) + "а"; //ж
        }   
    },   

    // ОТЧЕСТВО
    // Добавлена генерация закреплённого за полом отчества в отдельном объекте, полученном от кода JSON
    //Не должно встречаться генерации мужского отчества в женской фамилии и имени
    randomPatronymic: function() {
        let patronymic = this.randomValue(this.patronymicJson);
        if (this.person.gender == this.GENDER_MALE) {
            return patronymic; //м                        
        } else {
            return patronymic.substring(0, patronymic.length - 2) + "на"; //ж
        }   
    },  

    // ПРОФЕССИЯ 
    // Добавлена профессия, есть её связь с полом
    // Например, женские имена и фамилии не могут быть слесарем, солдатом, шахтёром и так далее
    randomProfession: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson); //м                        
        } else {
            return this.randomValue(this.professionFemaleJson);  //ж
        }   
    }, 


    // ДАТА РОЖДЕНИЯ
    // ГОД: Для генерации года используйте min, max значения из функции случайной генерации randomIntNumber
    randomYearOfBirth: function() {  
            return this.randomIntNumber(2006,1960); // год        
    }, 

    // МЕСЯЦ: Месяц рождения написан текстом, например: «апреля», «мая»
    randomMonthOfBirth: function() {       
        return this.randomValue(this.monthOfBirthJson); // месяц        
    },    

    // ДЕНЬ: Ограничьте генерацию дней для месяцев, в которых встречается 28 и 30 дней
    randomDayOfBirth: function() {  
        let year = this.person.yearOfBirth;
        let month = this.person.monthOfBirth;
        if (month == "февраля") {
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {   //определим, високосный ли год
                return this.randomIntNumber(29,1); // високосный февраль
            } else  {
                return this.randomIntNumber(28,1); // обычный февраль
            } 

        } else {
           if (month == "апреля" || month == "июня" || month == "сентября" || month == "ноября") {
                return this.randomIntNumber(30,1); // 30 дней в месяце
            }  else {                
                return this.randomIntNumber(31,1); // 31 день в месяце
            }    
        }
    },


    // АВАТАР
    randomAvatar: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.AVATAR_MALE; //м                        
        } else {
            return this.AVATAR_FEMALE;  //ж
        }   
    }, 



    // ВЫВОД СГЕНЕРИРОВАННЫХ ДАННЫХ В НОВЫЙ ОБЪЕКТ
    getPerson: function () {
        this.person = {};

        this.person.gender = this.randomGender();
        this.person.avatar = this.randomAvatar();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();     
        this.person.patronymic = this.randomPatronymic(); 
        this.person.profession = this.randomProfession();

        this.person.yearOfBirth = this.randomYearOfBirth();
        this.person.monthOfBirth = this.randomMonthOfBirth();
        this.person.dayOfBirth = this.randomDayOfBirth();

        console.log(personGenerator.person);
        return this.person;        
    }   
};