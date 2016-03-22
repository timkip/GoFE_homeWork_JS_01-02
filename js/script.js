document.getElementById('startScript1').onclick = function () {

    var userNum = +prompt('Введите число, которое Вы хотите возвести в степень:', '');
    var userPow = +prompt('Введите степень, в которую Вы хотите возвести число (функция сработает при ЦЕЛОЙ ПОЛОЖИТЕЛЬНОЙ степени):', '');

    function pow(userNum, userPow) {
        if (userPow == 0) return 1;
        return userNum * pow(userNum, userPow - 1);
    }

    alert('Чтобы узнать результат - загляните в консоль браузера (Shift+Ctrl+C)');
    console.log(pow(userNum, userPow));
}

document.getElementById('startScript2').onclick = function () {

    var arrayName = [];
    var userName = prompt('Введите СВОЕ имя:', '');

    userNameCheck();

    function userNameCheck() {
        while ((userName === null) || (userName == ''))
            userName = prompt('Введите, пожалуйста, НЕПУСТОЕ имя', '');
        console.log('userName ', userName);
    }

    for (var j = 0; j < 5; j++) {
        arrayName[j] = prompt('Введите имя пользователя:', '');
        console.log('arrayName[', j, '] ', arrayName[j]);
    }

    function find(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === userName) return true;
        }
        return false;
    }

    if (find(arrayName)) {
        alert(userName + ", Вы успешно вошли")
    } else {
        alert('ОШИБКА. Авторизация не пройдена');
    }
}
