// 1)
function max(a, b) {
    return a > b ? a : b
}
// 2)
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("Введите x", '');
let n = prompt("Введите n", '');
if (n <= 0) {
    alert('n должно быть больше 0');
} else {
    alert(pow(x, n));
}
// 3)
function howManyDays(month) {
    let days = prompt('Введите номер месяца')
    switch (days) {
        case 'month':
            alert('days');
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            alert('31');
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            alert('30');
            break;
        case '2':
            alert('28');
            break;

    }
    return days;
}
howManyDays()
    // 4)
function calcProduct(numOne, numTwo, even, odd) {
    let sum = numOne * numTwo;

    if (sum % 2 == 0) {
        even();
    } else {
        odd();
    }
}

let numOne = prompt('Введите число один');
let numTwo = prompt('Введите число два');

function even() {
    console.log('число четное');
};

function odd() {
    console.log('число нечетное');
};

calcProduct(numOne, numTwo, even, odd);
// 5)
let number = +prompt('Введите число от 1 до 18');

if (number >= 1 && number <= 18) {
    for (let number = 0; number <= 19; number++) {
        if (number % 2 == 0) {
            console.log(number)
        }
    }
} else {
    alert('Введите корректное значение!')
}