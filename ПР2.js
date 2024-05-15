// Завдання 1
let user = {}; // Створіть порожній об’єкт user.
user.name = 'Марк'; // Додайте властивість name зі значенням Марк.
user.surname = 'Сміт'; // Додайте властивість surname зі значенням Сміт.
user.name = 'Тарас'; // Змініть значення name на Тарас.
delete user.name; // Видаліть властивість name з об’єкта.

// Завдання 2
function isEmpty(obj) {
    for (let key in obj) {
        return false; // Якщо властивість знайдено, повертаємо false
    }
    return true; // Якщо жодної властивості не знайдено, повертаємо true
}

// Завдання 3
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]; // Додаємо кожне значення властивості до змінної sum
}

// Завдання 4
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2; // Помножуємо числові значення на 2
        }
    }
}