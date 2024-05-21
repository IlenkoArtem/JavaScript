// Завдання 1: Підсумуйте властивості

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

// Приклад для перевірки
let salaries = {
    "John": 1000,
    "Jane": 1500,
    "Jim": 2000
};
console.log(sumSalaries(salaries)); // Очікуваний результат: 4500

// Завдання 2: Порахуйте властивості

function count(obj) {
    return Object.keys(obj).length;
}

// Приклад для перевірки
let user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(count(user)); // Очікуваний результат: 3

// Завдання 3: Деструктуроване присвоєння

let user2 = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user2;

console.log(name);    // Очікуваний результат: John
console.log(age);     // Очікуваний результат: 30
console.log(isAdmin); // Очікуваний результат: false
