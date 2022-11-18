// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

//let a = [1, 2 ,3, 4, 5];
//let b = ['nebo', 'zemlja', 'raj', 'peklo', 'ljudyna'];
//let c = true;
 //  console.log(a, b);
 //  console.log(a>b, a!=b, a<=b, a==b, a===b);
 // console.log(+a, +b, +a + +b, +a>+b, +'12345678', !!'asgsdhsdf'  );

//let arr= [8, false, 'zemlja', '8', true];
//for (const arrElement of arr) {
//    if (typeof arrElement === 'boolean') {
    //    console.log(arrElement);
  //  }
//}



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

//let arr = [ , , , , , ];
// arr[0] = 'q';
// arr[1] = 'w';
// arr[2] = 'e';
// arr[3] = 'r';
// arr[4] = 't';
// arr[5] = 'y';
// console.log(arr);


//---------------------

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
 //1. перебрати його циклом while
// Зроблено в кожному завданні другим стовпчиком = // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//let arr = [2,17,13,6,22,31,45,66,100,-18];
 // let i = arr.length - 1;
 // while (i<=0) {
 // }
 // i--;
 // console.log(arr);

// (с заду на перед):

// let i = arr.length -1;
// while (i >= 0) {
//   {
//   console.log(arr[i]);
//   }
//   i--;
// }


//     2. перебрати його циклом for

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i =0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// (с заду на перед):

// for (i = arr.length -1; i >=0; i--) {
//  console.log(arr[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// (с заду на перед):

// let i = arr.length -1;
// while (i >= 0) {
//   if (i % 2 ===0) {
//   console.log(arr[i]);
//   }
//   i--;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

//let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i =1; i < arr.length; i+=2) {
//    console.log(arr[i]);
// }

// (с заду на перед):

// for (i = arr.length -1; i >=0 ; i--) {
//     if (i%2)
//  console.log(arr[i]);
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

//let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < arr.length) {
//      if (arr[i] %2 ===0){
//         console.log(arr[i]);
//     }
//     i++;
// }

// (с заду на перед):

// let i = arr.length -1;
// while (i >= 0) {
//      if (arr[i] %2 ===0){
//         console.log(arr[i]);
//     }
//     i--;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

//let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i =0; i < arr.length; i++) {
//     if (arr[i] %2 ===0)
//     console.log(arr[i]);
// }

// (с заду на перед):

// for (let i = arr.length ; i >=0; i--) {
//     if (arr[i] %2 ===0)
//     console.log(arr[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//  for (let i =0; i < arr.length; i++) {
//      if (arr[i] % 3 === 0) {
//       arr[i] ='octen';
//      }
//      console.log(arr[i]);
// }

// (с заду на перед):

// for (let i = arr.length -1; i >=0; i--) {
//      if (arr[i] % 3 === 0) {
//       arr[i] ='octen';
//      }
//      console.log(arr[i]);
// }

// 8. вивести масив в зворотньому порядку.

// let narr = [];
//  for (let i = arr.length -1, j = 0; i >=0; i--, j++) {
// narr[j] = arr[i];
//  }
// console.log(narr);



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let a = [2, 3, 9 ,45, 999, 457, 1000, 0, 84, 300];
// for (let i =0; i < a.length; i++) {
//     console.log(a[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let b = ['go-go-go', 'honor', 'yjo', , 'speed', 'jkhg', 'honesty'];
// for (let i =0; i < b.length; i++) {
//     console.log(b[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let c = [3, 9 ,45, 1000, 'yes', 'coloring page', 'm-m', 'lunx', 84, 300];
// for (let i =0; i < c.length; i++) {
//     console.log(c[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

//  let c = [3, 9, true, 1000, 'yes', 'coloring page', 'm-m', 'lunx', 84, false];
//  //for (let i =0; i < c.length; i++) {
// for (const cel of c) {
//     if (typeof cel === 'boolean') {
//         console.log(cel);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

//  let c = [3, 9, true, 1000, 'yes', 'coloring page', 'm-m', 'lunx', 84, false];
//  //for (let i =0; i < c.length; i++) {
// for (const cel of c) {
//     if (typeof cel === 'number') {
//         console.log(cel);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

//  let c = [3, 9, true, 1000, 'yes', 'coloring page', 'm-m', 'lunx', 84, false];
//  //for (let i =0; i < c.length; i++) {
// for (const cel of c) {
//     if (typeof cel === 'string') {
//         console.log(cel);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [ , , , , , , , , , ];
// arr[0] = 'q';
// arr[1] = 5;
// arr[2] = 'true';
// arr[3] = 'r';
// arr[4] = true;
// arr[5] = 'y';
// arr[6] = 18;
// arr[7] = 'lebron';
// arr[8] = '92';
// arr[9] = 'ground';
// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i +=1) {
//     console.log(i);
// }

// document.write() - не розумію як то вивести. Декілька раз дивився про document.write і не розумію як то робити. Мабуть поки не дано...
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i +=1) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

//for (let i = 0; i < 100; i +=2) {
 //   console.log(i);
//}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i +=2) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i +=2) {
//     console.log(i);
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books = [
//     {title: 'book1', pagecount: 180, genres: ['novel'], authors: ['bubaOld']},
//     {title: 'bookBig', pagecount: 800, genres: ['novel','story','history'], authors: ['bubaOld','bubaJ']},
//     {title: 'book3', pagecount: 240, genres: ['story','history'], authors: ['bubaJ']},
//     {title: 'bookBlue', pagecount: 300, genres: ['prose','story'], authors: ['bubaS']},
//     {title: 'bookRed', pagecount: 93, genres: ['history'], authors: ['bubaOld','bubaLo','bubaK']},
// ]

// -знайти наібльшу книжку.

// let b = books[0];
// for (const book of books){
//     if (book.pagecount > b.pagecount) {
//         b = book;
//     }
// }
// console.log(b);

// - знайти книжку/ки з найбільшою кількістю жанрів

// let b = books[0];
// for (const book of books){
//     if (book.genres.length > b.genres.length) {
//         b = book;
//     }
// }
// console.log(b);

// - знайти книжку/ки з найдовшою назвою

// let b = books[0];
// for (const book of books){
//     if (book.title.length > b.title.length) {
//         b = book;
//     }
// }
// console.log(b);

// - знайти книжку/ки які писали 2 автори

// for (let b = 0; b < books.length; b++){
//     const book = books[b];
//     if (book.authors.length === 2){
//         console.log(book);
//     }
// }

// - знайти книжку/ки які писав 1 автор

// for (let b = 0; b < books.length; b++){
//     const book = books[b];
//     if (book.authors.length === 1){
//         console.log(book);
//     }
// }