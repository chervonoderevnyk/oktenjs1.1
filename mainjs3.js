// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=12;
// if (x !==0){
//     console.log('super!');
// } else {
//     console.log('fuuu!')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

// let time = 85;
// if (time>=0 && time<=15) {
//     console.log('persha');
// }else if (time>=16 && time<=30) {
//     console.log('drugyj');
// }else if (time>=31 && time<=45) {
//     console.log('tretja');
// }else if (time>=46 && time<=60) {
//     console.log('chetverta');
// }else {
//     console.log('bla-bla-bla');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 13;
// if (day>0 && day <=10) {
//     console.log('decade-1');
// }else if (day>10 && day <=12 && day>=14 && day<=20) {
//     console.log('decade-2');
// }else if (day>20 && day<=31) {
//     console.log('decade-3');
// }else if (day=13) {
//     console.log('bad day!!!');
// }else {
//     console.log('the day are over!');
// }

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day_number = prompt('enter day number');
// switch (day_number) {
//     case'1':
//     console.log('monday');
//     break;
//     case'2':
//         console.log('tuesday');
//         break;
//     case'3':
//         console.log('wednesday');
//         break;
//     case'4':
//         console.log('thursday');
//         break;
//     case'5':
//         console.log('friday');
//         break;
//     case'6':
//         console.log('saturday');
//         break;
//     case'7':
//         console.log('sunday');
//         break;
//     default:
//         console.log('learn to count the days fool!')
// }

//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.


// let x = +prompt();
// let y = +prompt();
// if (x>y) {
//     console.log('x');
// }else if (x<y) {
//     console.log('y');
// }else if (x=y) {
//     console.log('are the same');
// }else {
//     console.log('incorrect date');
// }

  //  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = 'vdfbkj';
if (!!x===false) {
    console.log('default');
}else {
    console.log('hello');
}

