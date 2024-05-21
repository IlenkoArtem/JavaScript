// Завдання 1
function ucFirst(str) {
    if (!str) return str; // Перевіряємо, чи рядок не порожній
    return str[0].toUpperCase() + str.slice(1); // Перетворюємо перший символ на верхній регістр і додаємо решту рядка
}

// Завдання 2
function checkSpam(str) {
    const lowerStr = str.toLowerCase(); // Перетворюємо рядок у нижній регістр для нечутливого до регістру порівняння
    return lowerStr.includes('росі') || lowerStr.includes('xxx'); // Перевіряємо наявність 'росі' або 'xxx'
}

// Завдання 3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'; // Урізаємо рядок і додаємо трьох крапок
    }
    return str; // Повертаємо рядок без змін, якщо його довжина не перевищує maxlength
}

// Завдання 4
function strikeStr(str) {
    const words = str.split(' '); // Розбиваємо рядок на масив слів
    let lines = [];
    let currentLine = [];

    for (let word of words) {
        currentLine.push(word); // Додаємо слово до поточного рядка
        if (currentLine.length > 3) { // Якщо у рядку більше 3 слів
            lines.push(currentLine.join(' ')); // Додаємо рядок до масиву рядків
            currentLine = []; // Очищаємо поточний рядок
        }
    }

    if (currentLine.length > 0) {
        lines.push(currentLine.join(' ')); // Додаємо залишок слів як останній рядок
    }

    return lines.join('\n'); // З'єднуємо рядки у один рядок з переносами
}