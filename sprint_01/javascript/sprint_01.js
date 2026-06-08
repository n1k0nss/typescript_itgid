"use strict";
// Task 01
// Створіть константу p_01 (рядок), що містить рядок 'type script'. Виведіть у консоль.
const p_01 = 'type script';
console.log('Task 1:', p_01);
// Task 02 
// Створіть константу p_02 (рядок), що містить пустий рядок. Виведіть p_02 у консоль.
const p_02 = '';
console.log('Task 2:', p_02);
// Task 03
// Створено дві константи s_031 і s_032. Створіть константу s_3 і присвойте їй конкатенацію констант s_031 і s_032. Тип даних s_3 задайте явно. Для перевірки - виведіть s_3 у консоль.
const s_031 = 'Hello';
const s_032 = ' TypeScript';
const s_3 = s_031 + s_032;
console.log('Task 3:', s_3);
// Task 04
// Створіть дві константи (number) з іменем n_041 і n_042. Присвойте їм числа 22 і 44. Створіть змінну s_04, куди покладіть добуток (множення) чисел n_041 і n_042. Тип даних s_04 задайте явно. Виведіть результат у .out-4.
const n_041 = 22;
const n_042 = 44;
let s_04 = n_041 * n_042;
document.querySelector('.out-4').textContent = String(s_04);
// Task 05
// Створено дві константи n_051 і n_052. Створіть змінну s_05, куди покладіть суму чисел n_051 і n_052. Виведіть результат у .out-5. За потреби виконайте приведення типів даних.
const n_051 = '33';
const n_052 = 22;
let s_05 = +n_051 + n_052;
document.querySelector('.out-5').textContent = String(s_05);
// Task 06
// Створено змінну k_06 з типом даних any. Виведіть у консоль її тип даних.
let k_06;
console.log('Task 6:', typeof k_06);
// Task 07
// Створено змінну k_07 з типом даних any. Значення їй не задано. Допишіть рядок, де присвоїте змінній k_07 число 101. Виведіть у консоль тип даних змінної k_07. Виведіть на сторінку у .out-7 значення змінної k_07.
let k_07;
// тут новий рядок із присвоєнням
k_07 = 101;
console.log('Task 7:', typeof k_07);
document.querySelector('.out-7').textContent = String(k_07);
// Task 08
// Створіть константу p_08, рівну 0.07, і константу t_08, рівну 0.04. Створіть змінну res_8, куди покладіть суму цих констант. Тип даних визначіть самостійно, явно. Результат виведіть у .out-8.
const p_08 = 0.07;
const t_08 = 0.04;
let res_8 = p_08 + t_08;
document.querySelector('.out-8').textContent = String(res_8);
// Task 09
// Створено константи p_09 і t_09. Виведіть їх суму у .out-9.
const p_09 = 200;
const t_09 = 400;
document.querySelector('.out-9').textContent = String(p_09 + t_09);
//Task 10
// Отримайте у змінну p_10 (тип number) число з .p-10. Змінну виведіть у консоль.
let p_10 = Number(document.querySelector('.p-10').textContent);
console.log('Task 10:', p_10);
// Task 11
// Створіть константу p_11 і отримайте в неї число з .p-11. Константу виведіть у консоль.
const p_11 = parseInt(document.querySelector('.p-11').textContent, 10);
console.log('Task 11:', p_11);
// Task 12
// Створіть константу p_12 і отримайте в неї число з .p-12. Константу виведіть у консоль.
const p_12 = parseFloat(document.querySelector('.p-12').textContent);
console.log('Task 12:', p_12);
// Task 13
// Створіть змінну n_13 типу number без присвоєння значення і змінну s_13 типу string без присвоєння значення. Отримайте з .p-13 дані. Якщо дані можна привести до числа, то присвойте число n_13. Якщо рядок — то присвойте рядок s_13. Виведіть у консоль n_13, s_13.
let n_13;
let s_13;
let p_13 = document.querySelector('.p-13').textContent;
!isNaN(Number(p_13)) ? n_13 = Number(p_13) : s_13 = p_13;
console.log('Task 13:', 'n_13 =', n_13, 's_13 =', s_13);
// Task 14
// Створіть змінну b_14 з типом даних boolean. Не присвоюйте їй значення. Виведіть у консоль вміст змінної і тип даних.
let b_14;
console.log('Task 14:', b_14, typeof b_14);
// Task 15
// Створіть змінну b_15 з типом даних boolean і значенням false. Виведіть у .out-15 вміст змінної b_15.
let b_15 = false;
document.querySelector('.out-15').textContent = String(b_15);
// Task 16
// Створено дві константи b_161 і b_162. Створіть константу b_16, куди помістіть && цих констант. Тип даних визначіть самостійно. Результат виведіть у консоль.
const b_161 = true;
const b_162 = false;
const b_16 = b_161 && b_162;
console.log('Task 16:', b_16);
// Task 17
// Створено дві константи b_171 і b_172. Створіть константу b_17, куди помістіть || цих констант. Тип даних визначіть самостійно. Результат виведіть у .out-17.
const b_171 = true;
const b_172 = false;
const b_17 = b_171 || b_172;
document.querySelector('.out-17').textContent = String(b_17);
// Task 18
// Створіть змінну b_18 типу boolean, значення false. Створіть змінну b_negative, куди помістіть ! (заперечення) змінної b_18. Виведіть результат у консоль.
let b_18 = false;
let b_negative = !b_18;
console.log('Task 18:', b_negative);
// Task 19
// Створіть змінну b_19 типу boolean і помістіть у неї значення з .p-19. Виведіть у консоль.
let b_19 = Boolean(document.querySelector('.p-19').textContent);
console.log('Task 19:', b_19);
// Тask 20
// Створіть змінну b_20 типу boolean і помістіть у неї значення з .p-20 (число з .p-20). Виведіть у консоль.
let b_20 = Boolean(Number(document.querySelector('.p-20').textContent));
console.log('Task 20:', b_20);
//# sourceMappingURL=sprint_01.js.map