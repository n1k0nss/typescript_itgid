// Task 01
// При натисканні кнопки .b-1 запускається функція f01. Функція повинна присвоїти змінній s_1 текст, введений у input.i-1. Тип змінної s_1 визначте самостійно. Для перевірки виведіть s_1 у консоль.

// тут оголошуєте s_1
let s_1: string;

function f01 () : void {
    s_1 = (document.querySelector('input.i-1') as HTMLInputElement).value;
    console.log(s_1);
}

document.querySelector('.b-1')?.addEventListener('click', f01);

// Task 02 
// При натисканні кнопки .b-2 запускається функція f02. Функція повинна присвоїти змінній res_2 число, введене у input.i-2. Тип змінної res_2 визначте самостійно. Для перевірки виведіть res_2 у консоль.

// тут оголошуєте res_2
let res_2: number;

function f02 () : void {
    res_2 = +(document.querySelector('input.i-2') as HTMLInputElement).value;
    console.log(res_2);
}

document.querySelector('.b-2')?.addEventListener('click', f02);


// Task 03
// Створено дві змінні n_31 і n_32. Напишіть функцію f03, яка присвоює у змінну max_3 більше значення з цих двох змінних. Для перевірки виведіть max у консоль.

let n_31 : number = 22;
let n_32: number = 44;
// тут оголошуємо max_3
let max_3: number;

function f03 () : void {
   max_3 = Math.max(n_31, n_32);
   console.log(max_3);
}

document.querySelector('.b-3')?.addEventListener('click', f03);


// Task 04
// Напишіть функцію f04, яка отримує два числа з input.i-41 та input.i-42 і менше з них присвоює у змінну min_4. Тип даних min_4 визначте самостійно. Для перевірки виведіть min_4 у консоль.

// тут оголошуємо min_4
let min_4: number;

function f04 () : void {
    let n_41 : number = +(document.querySelector('input.i-41') as HTMLInputElement).value;
    let n_42: number = +(document.querySelector('input.i-42') as HTMLInputElement).value;

    min_4 = Math.min(n_41, n_42);
    console.log(min_4);

}

document.querySelector('.b-4')?.addEventListener('click', f04);


// Task 05
// Напишіть функцію f05, яка перевіряє, що в input.i-51 та input.i-52 введені числа, і за позитивного результату перевірки в змінну sum_5 кладеться результат — сума цих чисел, а за негативного результату у змінну error_5 (початкове значення завжди false) записується true. Типи даних визначіть самостійно. Виведіть змінні у консоль.

// тут оголошуємо sum_5
// тут оголошуємо error_5
let sum_5: number;
let error_5: boolean = false;

function f05 () : void {
    error_5 = false;

    let n_51 : number = +(document.querySelector('input.i-51') as HTMLInputElement).value;
    let n_52: number = +(document.querySelector('input.i-52') as HTMLInputElement).value;
    if (!isNaN(n_51) && !isNaN(n_52)) {
        sum_5 = n_51 + n_52;
    } else {
        error_5 = true;
    }

    console.log(sum_5, error_5);
}

document.querySelector('.b-5')?.addEventListener('click', f05);


// Task 06
// Напишіть функцію f06, яка перевіряє, що в input.i-61 та input.i-62 введені рядки, які можна привести до чисел. За позитивного результату перевірки у змінну sum_6 записується сума цих чисел, а у змінну error_6 — false. За негативного результату у змінну error_6 записується true, а у змінну sum_6 — 0. Типи даних визначіть самостійно. Змінну sum_6 виведіть у .out-6. Змінну error_6 — у консоль.

// тут оголошуємо sum_6
// тут оголошуємо error_6
let sum_6: number;
let error_6: boolean;


function f06 () : void {
    let s_61 : string = (document.querySelector('input.i-61') as HTMLInputElement).value;
    let s_62: string = (document.querySelector('input.i-62') as HTMLInputElement).value;
    if (!isNaN(+s_61) && !isNaN(+s_62)) {
        sum_6 = +s_61 + +s_62;
        error_6 = false;
    } else {
        error_6 = true;
        sum_6 = 0;
    }

    (document.querySelector('.out-6') as HTMLElement).textContent = String(sum_6);
    console.log(error_6);
}

document.querySelector('.b-6')?.addEventListener('click', f06);


// Task 07
// Функція f07 отримує рядки з input.i-71 та input.i-72. У змінну max_7 вона повинна записати більший з двох рядків шляхом прямого порівняння. Тип змінної max_7 визначте самостійно. Виведіть max_7 у .out-7.

// тут оголошуємо max_7
let max_7: string;

function f07 () : void {
    let s_71: string = (document.querySelector('input.i-71') as HTMLInputElement).value;
    let s_72: string = (document.querySelector('input.i-72') as HTMLInputElement).value;

    s_71 > s_72 ? max_7 = s_71 : max_7 = s_72;
    
    (document.querySelector('.out-7') as HTMLElement).textContent = String(max_7);
}

document.querySelector('.b-7')?.addEventListener('click', f07);


// Task 08
// Функція f08 повинна прочитати вибране value з select.s-8 і записати його у змінну val_8. Тип val_8 визначте самостійно. Виведіть val_8 у .out-8.


// тут оголошуємо val_8
let val_8: string;

function f08 () : void {
    let val_8: string = (document.querySelector('select.s-8') as HTMLInputElement).value;
    (document.querySelector('.out-8') as HTMLElement).textContent = val_8;
}

document.querySelector('.b-8')?.addEventListener('click', f08);

// Task 09
// Створіть змінну val_9 і призначте їй будь-яке ціле число від 2 до 6. Тип даних визначте самостійно. Напишіть функцію f09, яка при запуску зробить option всередині select.s-9 з таким value selected. Значення val_9 виводьте у .out-9.

// тут оголошуємо val_9
let val_9: number = 3;


function f09 () : void {
    let select: HTMLSelectElement = document.querySelector('select.s-9') as HTMLSelectElement;
    select.value = String(val_9);
    (document.querySelector('.out-9') as HTMLElement).textContent = String(val_9);
}

document.querySelector('.b-9')?.addEventListener('click', f09);


// Task 10
// Створіть змінну res_10 типу boolean зі значенням false. При зміні стану checkbox.ch-10 змінюйте вміст змінної res_10. Якщо checkbox вибрано, записуйте true, якщо ні — false. Виводьте res_10 у .out-10.

// тут оголошуємо res_10
let res_10: boolean = false;

function f10 () : void {
    res_10 = (document.querySelector('.ch-10') as HTMLInputElement).checked;
    (document.querySelector('.out-10') as HTMLElement).textContent = String(res_10);
}

document.querySelector('.ch-10')?.addEventListener('change', f10);


// Task 11
// Створіть змінну res_11 типу number зі значенням 0. При зміні стану checkbox.ch-11 змінюйте вміст res_11. Якщо checkbox вибрано, записуйте в res_11 значення value, якщо ні — 0. Виводьте res_11 у .out-11.

// тут оголошуємо res_11
let res_11: number = 0;

function f11 () : void {
    let checkbox: HTMLInputElement = (document.querySelector('.ch-11') as HTMLInputElement);
    checkbox.checked ? res_11 = +checkbox.value : res_11 = 0;
    (document.querySelector('.out-11') as HTMLElement).textContent = String(res_11);
}

document.querySelector('.ch-11')?.addEventListener('change', f11);


// Task 12
// Створіть змінну res_12 типу number зі значенням 0. При натисканні кнопки .b-12 функція повинна читати вміст res_12 і якщо він дорівнює 1, робити checkbox.ch-12 стан checked, а якщо дорівнює нулю — скидати checked.

// тут оголошуємо res_12
let res_12: number = 0;

function f12 () : void {
   let checkbox: HTMLInputElement = (document.querySelector('.ch-12') as HTMLInputElement);
   checkbox.checked = Boolean(res_12);
}

document.querySelector('.b-12')?.addEventListener('click', f12);


// Task 13
// Функція f13 отримує з input.i-13 число і виводить у .out-13 рядок виду 43210, тобто від введеного числа до нуля. Якщо ввели 5, то вивід має бути 543210.

function f13 () : void {
    let n_13: number = +(document.querySelector('input.i-13') as HTMLInputElement).value;
    let result: string = '';
    for (let i = n_13; i >= 0; i--) {
        result += i;
    }
    (document.querySelector('.out-13') as HTMLElement).textContent = result;
}

document.querySelector('.b-13')?.addEventListener('click', f13);

// Task 14
// Функція f14 отримує з input.i-14 число і присвоює змінній res_14 true, якщо введене число парне, або false, якщо непарне. Змінну res_14 виведіть у .out-14.

// тут оголошуємо res_14
let res_14: boolean;

function f14 () : void {
    res_14 = +(document.querySelector('input.i-14') as HTMLInputElement).value % 2 === 0;
    (document.querySelector('.out-14') as HTMLElement).textContent = String(res_14);
}

document.querySelector('.b-14')?.addEventListener('click', f14);


// Task 15
// Створіть змінну s_15 зі значенням 'cdcdbdcsd' і змінну res_15. Функція має порахувати, скільки у змінній s_15 символів 'c'. Кількість присвоїти змінній res_15. Функція має виводити s_15 у .out-151 і res_15 у .out-152.

// тут оголошуємо s_15
// тут оголошуємо res_15
let s_15: string = 'cdcdbdcsd';
let res_15: number; 

function f15 () : void {
    res_15 = s_15.split('c').length - 1;

    (document.querySelector('.out-151') as HTMLElement).textContent = s_15;
    (document.querySelector('.out-152') as HTMLElement).textContent = String(res_15);
}

document.querySelector('.b-15')?.addEventListener('click', f15);


// Task 16
// Створено елемент input.i-16. При введенні символів у нього виводьте кількість введених символів у змінну res_16. Виводьте змінну res_16 у .out-16.

// тут оголошуємо res_16
let res_16: number;


function f16 () : void {
    res_16 = (document.querySelector('input.i-16') as HTMLInputElement).value.length;

    (document.querySelector('.out-16') as HTMLElement).textContent = String(res_16);
}

document.querySelector('.i-16')?.addEventListener('input', f16);


// Task 17
// Створіть змінну res_17 типу boolean зі значенням false. Створено елемент input.i-17. Функція при натисканні кнопки читає вміст res_17 і якщо значення false — робить input.i-17 disabled. Якщо true — enabled.

// тут оголошуємо res_17
let res_17: boolean = false;


function f17 () : void {
    let input: HTMLInputElement = (document.querySelector('input.i-17') as HTMLInputElement);
    input.disabled = !res_17;
}

document.querySelector('.b-17')?.addEventListener('click', f17);


// Task 18
// Створіть рядкову змінну s_18 зі значенням '10000'. Створіть змінну count_18 зі значенням 0. При натисканні кнопки .b-18 запускається функція f18. Функція додає одиницю до count_18, а потім робить s_18[count_18] рівним одиниці. Інші символи рядка — 0.
// Тобто коли count = 0, рядок виглядає як '10000'
// Тобто коли count = 1, рядок виглядає як '01000'
// Тобто коли count = 2, рядок виглядає як '00100'
// Тобто коли count = 3, рядок виглядає як '00010'
// Тобто коли count = 4, рядок виглядає як '00001'
// Виведіть count_18 у .out-181 і s_18 у .out-182

// тут оголошуємо 
let s_18: string = '10000';
let count_18: number = 0;

function f18 () : void {
    count_18++;
    s_18 = s_18.split('').map((_, i) => i === count_18 ? '1' : '0').join('');
    (document.querySelector('.out-181') as HTMLElement).textContent = String(count_18);
    (document.querySelector('.out-182') as HTMLElement).textContent = s_18;
}

document.querySelector('.b-18')?.addEventListener('click', f18);

// Task 19
// Створіть за допомогою циклу рядок s_19, у якій йде послідовність 5_x_3_x_1_x_. Тобто користувач вводить число, наприклад 5, а функція генерує рядок від 5 до 0 і замінює парні числа на x. Роздільник — підкреслення. Число функція бере з input.i-19. Виведіть рядок у .out-19.

// тут оголошуємо s_19
let s_19: string;

function f19 () : void {
    let input: HTMLInputElement = (document.querySelector('input.i-19') as HTMLInputElement);
    let inputValue: number = +input.value;

    s_19 = [...new Array(inputValue + 1)].map((_, i) => (inputValue - i) % 2 === 1 ? `${inputValue - i}` : 'x').join('_');

    (document.querySelector('.out-19') as HTMLElement).textContent = s_19;
}

document.querySelector('.b-19')?.addEventListener('click', f19);


// Task 20
// Створіть змінну s_20, куди покладете значення нуль. При натисканні кнопки запускається функція f20, яка отримує число з .i-20 і рахує суму ряду чисел від введеного до нуля. Наприклад, введено 5, шуканою сумою є 5 + 4 + 3 + 2 + 1. Сума присвоюється s_20. Виведіть s_20 у .out-20.

// тут оголошуємо s_20
let s_20: number = 0;


function f20 () : void {
    let input: HTMLInputElement = (document.querySelector('input.i-20') as HTMLInputElement);
    let inputValue: number = +input.value;

    s_20 = 0;
    while (inputValue != 0) {
        s_20 += inputValue
        inputValue--;
    }

    (document.querySelector('.out-20') as HTMLElement).textContent = String(s_20);
}

document.querySelector('.b-20')?.addEventListener('click', f20);