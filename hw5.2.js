// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function chyslo (a,b,c){
//     if (a<b && a<c){
//         console.log(a);
//     }else if (b<a && b<c){
//         console.log(b);
//     }else if (c< a && c<b){
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// }
// chyslo(12,23,34)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function chyslo (a,b,c){
//     if (a>b && a>c){
//         console.log(a);
//     }else if (b>a && b>c){
//         console.log(b);
//     }else if (c>a && c>b){
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// }
// chyslo(12,23,34)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [12,34,56,78,89,3];
//
// function chyslo(abc){
//  let max = abc[0];
//  for (const sdf of abc){
//   if (sdf > max){
//    max = sdf;
//   }
//  }
//  return max;
// }
// let qwe = chyslo(arr);
// console.log(qwe);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1,2,3,4,5];
//
// function chyslo(abc){
//  let suma = 0;
//  for (const sdf of abc){
//    suma += sdf;
//  }
//  return suma/abc.length;
// }
// console.log(chyslo(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//???? не знав як зробити. Добре ,що є практична.

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
// function rand(){
//     for (let i=0; i<5; i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }
// rand()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// function rand(limit){
//     for (let i=0; i<limit; i++){
//         arr[i] = Math.round(Math.random()*limit);
//     }
//     console.log(arr);
// }
// rand(8);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1,2,3];
// function mas(array){
//     let newarray = [];
//     for (let i=array.length - 1, j=0; i>=0; i--){
//         newarray[j++] = array[i];
//     }
//     return newarray;
// }
// console.log(mas(arr));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function fanc () {
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }else if (arguments.length ===1){
//         return arguments[0];
//     }
// }
// console.log(fanc('A',4));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// function nik(arr1b, arr2b){
//     let resultuj = [];
//     let newarr = arr1b + arr2b;
//       for (let i=0; i < 4; i++){
//           resultuj[i] = arr1b[i] + arr2b[i];
//       }
//       return resultuj;
// }
// console.log(nik(arr1,arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function asd(array){
//     let newarray = [];
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             newarray[j++] = key;
//         }
//     }
//     return newarray;
// }
// console.log(asd(arr));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function asd(array){
//     let newarray = [];
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             newarray[j++] = array[i][key];
//         }
//     }
//     return newarray;
// }
// console.log(asd(arr));



