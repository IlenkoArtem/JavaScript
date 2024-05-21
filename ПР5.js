// Завдання 1: Операції з масивами

// Створіть масив styles з елементами “Jazz” та “Blues”.
let styles = ["Jazz", "Blues"];

// Додайте “Rock-n-Roll” в кінець масиву.
styles.push("Rock-n-Roll");

// Замініть значення в середині масиву на “Classics”.
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

// Видаліть перший елемент масиву та покажіть його.
let firstElement = styles.shift();
console.log(firstElement); // Виводимо перший елемент

// Вставте Rap та Reggae на початок масиву.
styles.unshift("Rap", "Reggae");

console.log(styles); // Для перевірки результатів

// Завдання 2: Сума введених чисел
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введіть число:", "");

        // Перевірка на натискання "відмінити" (null) або порожній рядок ("")
        if (value === null || value === "") break;

        // Перевірка чи введене значення є числом
        value = Number(value);
        if (isNaN(value)) break;

        numbers.push(value);
    }

    // Підрахунок суми елементів масиву
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// Для перевірки виклику функції sumInput
// console.log(sumInput());

// Завдання 3: Максимальний підмасив
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

// Приклад для перевірки getMaxSubSum
let arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr)); // Очікуваний результат: 7 (підмасив [3, 4])

// Додатковий приклад з рандомними числами від -10 до 10
let randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 21) - 10);
console.log(randomArr); // Виводимо рандомний масив
console.log(getMaxSubSum(randomArr)); // Виводимо максимальну суму підмасиву