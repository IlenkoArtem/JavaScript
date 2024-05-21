// Завдання 1: Фільтрувати унікальні елементи масиву
function unique(arr) {
    return Array.from(new Set(arr)); // Використання Set для автоматичного видалення дублікатів і повернення масиву унікальних елементів
}

// Приклад для перевірки
let arr1 = [1, 2, 2, 3, 4, 4, 5];
console.log(unique(arr1)); // Очікуваний результат: [1, 2, 3, 4, 5]

// Завдання 2: Відфільтруйте анаграми
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join(''); // Сортуємо букви в слові
        map.set(sorted, word); // Використовуємо відсортоване слово як ключ і оригінальне слово як значення
    }

    return Array.from(map.values()); // Повертаємо значення Map як масив без анаграм
}

// Приклад для перевірки
let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr2)); // Очікуваний результат: ["nap", "teachers", "ear"]

// Завдання 3: Підрахунок кількості входжень елементів в масиві
function countOccurrences(arr) {
    let map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1); // Збільшуємо лічильник для кожного унікального елемента
    }

    return map;
}

// Приклад для перевірки
let arr3 = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(countOccurrences(arr3)); // Очікуваний результат: Map { 1 => 1, 2 => 2, 3 => 1, 4 => 3, 5 => 1 }

// Завдання 4: Перевірка на унікальність елементів
function hasUniqueElements(arr) {
    let set = new Set(arr);
    return set.size === arr.length; // Перевіряємо, чи розмір Set збігається з довжиною масиву
}

// Приклад для перевірки
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5, 1];
console.log(hasUniqueElements(arr4)); // Очікуваний результат: true
console.log(hasUniqueElements(arr5)); // Очікуваний результат: false
