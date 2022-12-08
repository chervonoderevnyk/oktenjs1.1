// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//     const arr = [];
//     for (let i = 0; i < str.length; i += n) {
//         arr.push(str.slice(i, n + i));
//     }
//     return arr;
// }
// let cutString1 = cutString('блаженство',3);
// console.log(cutString1);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// const delete_characters = (str, length) => str.slice(0,length);
// let deleteCharacters = delete_characters(str,7);
// console.log(deleteCharacters);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let repl = str.replaceAll(' ', '-');
// console.log(repl.toUpperCase());

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'ukraine';
// console.log(str[0].toUpperCase() + str.substring(1,7));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let n1q = n1.replaceAll('..', ' ');
// let n2q = n2.replaceAll('---', ' ');
// let n3q = n3.replaceAll('__', ' ');
// console.log(n1q, n2q, n3q);


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let array = [];
// for (let i = 0; i < 5; i++){
//     array.push(Math.round(Math.random()*100));
// }
// console.log(array)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let array = [];
// for (let i = 0; i < 5; i++){
//     array.push(Math.round(Math.random()*100));
// }
// console.log(array.sort());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let array = [];
// for (let i = 1; i < 6; i++) {
//     array.push(Math.round(Math.random() * 100));
// }
// console.log(array.filter((arr)=> arr %2===0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'всякому місту звичай і права';
// const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//let str = 'someemail@gmail.com';

// const ttestt = (str1) => {
//     let str = str1.toLowerCase();
//     if (str.includes('@') && str.indexOf('@') > 0 && str.lastIndexOf('.') > str.indexOf('@') + 2){
//
//         console.log('Good!');
//     } else {
//         console.log('Not Goood!');
//     }
//         }
//
// ttestt('someemail@gmail.com');
// ttestt('someeMAIL@gmail.com');
// ttestt('someeMAIL@i.ua');
// ttestt('some.email@gmail.com');

// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.sort((a,b) => {
//     if (a.modules.length > b.modules.length) {
//         return 1;
//     }
//     if (a.modules.length < b.modules.length) {
//         return -1;
//     }
//     if (a.modules.length === b.modules.length) {
//         return 0;
//     }
// }));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symb = "о";
// let str = "Астрономія це наука про небесні об'єкти";
//
// const lichylnyk = (str,symb) => {
//     let lichylnyk = 0;
//     let split = str.split('');
//     for (const planet of split) {
//         if (planet === symb) {
//             lichylnyk++;
//         }
//     }
//     return lichylnyk;
// }
// console.log(lichylnyk(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжкості прикладена до центру мас тіла";
// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(str, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

// let books = [
//     {title: 'book1', pagecount: 180, genres: ['novel'], authors: ['bubaOld']},
//     {title: 'bookBig', pagecount: 800, genres: ['novel','story','history'], authors: ['bubaOld','bubaJ']},
//     {title: 'book3', pagecount: 240, genres: ['story','history'], authors: ['bubaJ']},
//     {title: 'bookBlue', pagecount: 300, genres: ['prose','story'], authors: ['bubaS']},
//     {title: 'bookRed', pagecount: 93, genres: ['history'], authors: ['bubaOld','bubaLo','bubaK']}
// ];

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

// - вісортувати книжки по кількості сторінок по зростанню

// let sort = books.sort((a, b) => {
//     return a.pagecount - b.pagecount;
// });
// console.log(sort);
