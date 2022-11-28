
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let Srestangle = (a, b) => a * b;
// console.log(Srestangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

 // let Skolo = (r) => 3.14 * (r*r);
 // console.log(Skolo(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let Sculindr = (h, r) => 2*3.14*(r*r) + 2*3.14*r*h;
// console.log(Sculindr(10, 20))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = ['as','sd','df','fg'];
// function xxx(maas){
//  for (const rem of maas) {
//   console.log(rem);
//  }
// }
// xxx(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function story(novel) {
//  console.log(arguments);
// }
// story('$Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, iusto.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function mebli(text) {
//    document.write(`<ul>
//      <li>${text}</li>
//      <li>${text}</li>
//      <li>${text}</li>
//    </ul>`)
// }
// mebli('green mebli');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function mebli(text,num) {
//    document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//        document.write(`<li>${text}</li>`)
//     }
// document.write(`</ul>`)
// }
// mebli('green mebli',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = ['33','sd','df',true];
// const xxx = function (buba) {
//     document.write(`<ul>`)
//     for (const bibi of buba) {
//         document.write(`<li>${bibi}</li>`);
//     }
//     document.write(`</ul>`)
// }
// xxx(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const kents = [
//     {
//         id:1,
//         name: 'lolik',
//         age: 16
//     },
//     {
//         id: 2,
//         name: 'bolik',
//         age: 14
//     },
// ]
// const frends = function (kents){
//     for (const frend of kents){
//         document.write(`<div>${frend.id} - ${frend.name} - ${frend.age}</div>`)
//     }
// }
// frends(kents);

// - створити функцію яка повертає найменьше число з масиву

// let hlib = [12,34,56,78,89,3];
//
// function boroshno(pshenycja){
//  let min = pshenycja[0];
//  for (const banka of pshenycja){
//   if (banka < min){
//    min = banka;
//   }
//  }
//  return min;
// }
// let batonsyhiv = boroshno(hlib);
// console.log(batonsyhiv);

// - створити функцію яка приймає масив чисел,сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mass = [87,54,9,98675,2];
// function hugo(arr){
//     let suma = 0;
//     for (const boss of arr) {
//         suma += boss;
//     }
//     return suma;
// }
// console.log(hugo(mass));

