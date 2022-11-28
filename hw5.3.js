// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const chyslo = (a, b, c) => {
//     if (a<b && a<c){
//         console.log(a);
//     }else if (b<a && b<c){
//         console.log(b);
//     }else if (c< a && c<b){
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// };
// chyslo(12,23,34)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const chyslo = (a, b, c) => {
//     if (a>b && a>c){
//         console.log(a);
//     }else if (b>a && b>c){
//         console.log(b);
//     }else if (c>a && c>b){
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// };
// chyslo(12,23,34)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [12,34,56,78,89,3];
//
// const chyslo = abc => {
//  let max = abc[0];
//  for (const sdf of abc){
//   if (sdf > max){
//    max = sdf;
//   }
//  }
//  return max;
// };
// let qwe = chyslo(arr);
// console.log(qwe);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [12,34,56,78,89,3];
//
// const chyslo = abc => {
//  let min = abc[0];
//  for (const sdf of abc){
//   if (sdf < min){
//    min = sdf;
//   }
//  }
//  return min;
// };
// let qwe = chyslo(arr);
// console.log(qwe);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mass = [87,54,9,98675,2];
// const hugo = arr => {
//     let suma = 0;
//     for (const boss of arr) {
//         suma += boss;
//     }
//     return suma;
// };
// console.log(hugo(mass));

// - Дано натуральное число n. Выведите все числа от 1 до n.

// const dyv = (n) => {
//     for (let i = 1; i<=n; i++){
//         console.log(i);
//     }
// }
// dyv(8);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const dyvo = (a, b) => {
//     if (a < b) {
//         for (let i = a; i<=b; i++){
//             console.log(i);
//         }
//     }else if (a>b){
//         for (let i = a; i >= b; i--){
//             console.log(i);
//         }
//     }
//
// };
// dyvo(5,1)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr = [1,0,6,0,3];
//console.log(arr.indexOf(0));
// arr.splice(arr.indexOf(0),1);
// console.log(arr)
// arr.splice(arr.indexOf(0),1);
// console.log(arr);
// console.log(arr.splice);
console.log(str.indexOf('0',0));
console.log(str.indexOf('0',2));
console.log(arr);




// for (let i = 0; i < arr.length; i++) {
//     const us = arr[i];
//     if (us === 0) {
//         console.log(us);
//     }
// }
//--------------------------------------------------
// let arr0 = [];
// let arrChyslo = [];
//
// function asd(abc) {
//     for (let i = 0; i < arr.length; i++) {
//         const us = arr[i];
//         if (us === 0) {
//             arr0[i] = us;
//             console.log(us);
//         }
//
//     }
//     return us;
// }
// console.log(arr0)
// console.log(arr)
// console.log(arrChyslo)
//---------------------------------------------------

// function xxx(maas) {
//     for (const rem of maas) {
//         if (rem > 0) {
//             console.log(rem);
//         }
//     }
// }
//
// xxx(arr);
// console.log(xxx(arr));

