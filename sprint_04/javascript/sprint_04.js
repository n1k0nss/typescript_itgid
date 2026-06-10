"use strict";
// Task 01
// У TS можна використовувати прості функції. Але не цікаво. Приклад функції - аналог того, що ми писали в JS. Запустіть, перегляньте результат. Зверніть увагу, функція продовжуватиме роботу при return '4', return false. Тобто ніякого контролю над типами даних немає. Зніміть коментар та переконайтеся.
function f01() {
    return 4;
}
console.log(f01());
// Task 02
// У TS логічніше застосовувати контроль того, що повертає функція. Тобто вказувати тип даних. Подивіться приклад. Запустіть. Тепер замініть return 44 на return '44'. Код не компілюється та видасть помилку. Поверніть return 44. Контролювати тип даних, який повертає функція – найбільш коректний підхід у TS.
function f02() {
    return 44;
}
console.log(f02());
// Task 03
// Якщо функція в TS виступає як обгортка для угруповання дій і не передбачає повертати значення, то просто напишіть: void. У багатьох мовах програмування такі функції називають процедури. Зверніть увагу, якщо після цього ви вирішите дописати до процедури return, то компілятор видасть помилку. Напишіть return 55; та перевірте. Після цього закоментуйте return 55.
function f03() {
    console.log(55);
    // return 55;
}
f03();
// Task 04
// Напишіть функцію, яка повертає випадкове ціле число від 0 до 100. Результат виведіть у .out-4. Тип даних функції вкажіть відповідно до завдання.
function f04() {
    return Math.floor(Math.random() * 100);
}
document.querySelector('.b-4').addEventListener('click', function () {
    document.querySelector('.out-4').textContent = String(f04());
});
// Task 05
// Напишіть функцію f05 тип string, яка повертає випадковий символ рядка s5. Випадковий символ виведіть у .out-5.
// У всіх завданнях далі, якщо функція повертає якесь значення – вказуйте тип даних.
// Увага тут і далі у шаблоні функції може бути рядок return ''. Цей рядок потрібний, щоб компілятор не лаявся на функцію. Коли ви будете писати код функції – видаліть цей рядок.
let s5 = 'abcdefg';
function f05() {
    return s5[Math.floor(Math.random() * s5.length)];
}
document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = f05();
});
// Task 06
// Напишіть функцію f06, яка повертає максимальне із трьох чисел n61, n62, n63. Тип даних функції вкажіть явно.
let n61 = 33;
let n62 = 55;
let n63 = 42;
function f06() {
    return Math.max(n61, n62, n63);
}
document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = String(f06());
});
// Task 07
// Напишіть процедуру f07, яка виводить випадкове ціле число від 150 до 170 у .out-7. Тип даних процедури – вкажіть самостійно.
function f07() {
    document.querySelector('.out-7').textContent = String(Math.floor(Math.random() * (170 - 150) + 150));
}
document.querySelector('.b-7').addEventListener('click', f07);
// Task 08
// У TS аргументи функції можуть мати задані типи даних. Це спрощує написання коду та знижує кількість помилок у коді. Вивчіть код. Спробуйте передати не (5, 6), а ('5', 6). Вивчіть помилку компіляції та поверніть аргументи (5, 6).
function f08(a, b) {
    return a + b;
}
console.log(f08(5, 6));
// Task 09
// У TS, на відміну від JS, проводиться контроль кількості аргументів. Тобто якщо в JS передати більше аргументів ніж належить, то помилки не буде. А ось у TS так робити не можна. Видаліть коментар із рядка запуску і подивіться як поведеться компілятор. Після – поверніть коментар.
function f09(a, b) {
    return a + b;
}
//  console.log(f09(5, 6, 7));
// Task 10
// Напишіть функцію f10, яка приймає 4 числа і повертає менше з них. Тип даних функції, аргументи та типи аргументів вкажіть самостійно.
function f10(a, b, c, d) {
    return Math.min(...arguments);
}
document.querySelector('.b-10').addEventListener('click', function () {
    document.querySelector('.out-10').textContent = String(f10(33, 22, 34, 17));
});
// Task 11
// Напишіть функцію, яка приймає два аргументи і повертає ціле випадкове число від першого аргументу включно до другого аргументу включно. Тип функції та аргументів задайте самостійно.
function f11(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
document.querySelector('.b-11').addEventListener('click', function () {
    document.querySelector('.out-11').textContent = String(f11(1000, 1100));
});
// Task 12
// Напишіть функцію перевірки пароля. Функція приймає рядок. Якщо пароль менший або дорівнює 8 символів, функція повертає false, якщо більше – повертає true. Пароль повинен містити щонайменше один символ у верхньому регістрі. Тип даних функції, аргументи та типи аргументів вкажіть самостійно. Завдання вирішується без регулярних виразів!
function f12(pass) {
    return !(pass.length <= 8 || pass === pass.toLowerCase());
}
document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = String(f12('drXenonBloom'));
});
// Task 13
// У деяких випадках функції мало одного значення. Наприклад, якщо у функції потрібно робити перевірки. Давайте ускладнимо попередню задачу – користувач вводить пароль. Якщо довжина пароля менша або дорівнює восьми символам, функція повертає false. Якщо більше – то сам пароль. Тобто формально тепер функція може повертати і string і boolean. Розберіть приклад.
function f13(pass) {
    return (pass.length > 8) ? pass : false;
}
document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = String(f13('Birdperson'));
});
// Task 14
// Давайте напишемо тепер класичну функцію. Функція повертає результат ділення першого числа на друге. Однак додамо перевірку. Якщо другий аргумент дорівнює нулю – повертається false. Типи функції та аргументів напишіть самостійно.
function f14(a, b) {
    return b === 0 ? false : a / b;
}
document.querySelector('.b-14').addEventListener('click', function () {
    document.querySelector('.out-14').textContent = String(f14(15, 0));
});
// Зверніть увагу, як добре вирішується задача. Не потрібні перевірки, що у функцію передали щось крім чисел – не вийде, код не скомпілюється. Не потрібно перевіряти що повертає функція – все вказано.
// Task 15
// Тепер давайте розкриємо потенціал такого підходу – подивимося, що можуть дати функції з двома типами даних. Повернемося до задачі пароля. Розгляньте функцію та проаналізуйте її роботу. Спробуйте передати пароль 'RickSanchez' та 'Rick'.
function f15(pass) {
    if (f13(pass)) {
        return 'password accepted';
    }
    return 'use the correct password';
}
document.querySelector('.b-15').addEventListener('click', function () {
    document.querySelector('.out-15').textContent = f15('Rick');
});
// Task 16
// Напишіть функцію, яка може повертати або boolean або число. Функція приймає рядок, і якщо цей рядок можна перетворити до числа, то повертає число, якщо ні – false.
// Наприклад -4.4f можна привести до числа -4.4
// А от f44 не можна перетворити до числа
function f16(a) {
    return isNaN(parseFloat(a)) ? false : parseFloat(a);
}
document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = String(f16('200d'));
});
// Task 17
// Напишіть функцію, яка приймає ім'я класу як рядок, і повертає текст із елемента DOM з таким класом. Текст повинен бути очищений від прогалин по краях рядка. Якщо такого елемента немає – повертає false. Типи функції та аргументів напишіть самостійно.
function f17(s) {
    return document.querySelector(`${s}`) ? document.querySelector(`${s}`).textContent : false;
}
document.querySelector('.b-17').addEventListener('click', function () {
    document.querySelector('.out-17').textContent = String(f17('.p-17'));
});
// Task 18
// У функцію TS можна передавати необов'язкові параметри. Вивчіть, як працює функція f18.
function f18(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
document.querySelector('.b-18').addEventListener('click', function () {
    console.log(f18(2, 3));
    console.log(f18(2, 3, 4));
});
// Task 19
// Напишіть функцію, яка приймає 2 необов'язкових аргументи – рядки і повертає більший за довжиною рядок. Якщо передано один аргумент – повертає його. Якщо аргументи не передані – повертає порожній рядок. Типи функції та аргументів напишіть самостійно.
function f19(s1, s2) {
    if (!!s1 && !!s2) {
        return s1.length > s2.length ? s1 : s2;
    }
    return s1 ?? s2 ?? '';
}
document.querySelector('.b-19').addEventListener('click', function () {
    console.log(f19('Hi', 'hello'));
});
// Task 20
// Напишіть функцію, яка приймає два необов'язкових аргументи – числа. І якщо вони задані – генерує та повертає випадкове ціле у вказаному діапазоні, а якщо не вказані – повертає випадкове ціле число від 0 до 100.
function f20(n1, n2) {
    return n1 && n2 ? Math.floor(Math.random() * (n2 - n1) + n1) : Math.floor(Math.random() * 100);
}
document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = String(f20(200, 220));
});
//# sourceMappingURL=sprint_04.js.map