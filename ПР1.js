let login = prompt("Введіть логін:", "");

if (login === "Admin") {
    let password = prompt("Введіть пароль:", "");

    if (password === null || password === "") {
        alert("Скасовано");
    } else if (password === "123456") {
        alert("Ласкаво просимо!");
    } else {
        alert("Неправильний пароль");
    }
} else if (login === "" || login === null) {
    alert("Скасовано");
} else {
    alert("Такий користувач не зареєстрованний");
}