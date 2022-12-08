// - Знайти та вивести довижину настипних стрінгових значень

// let str = 'hello world'
// console.log(str.length);

// let str ='lorem ipsum'
//     console.log(str.length);

// let str ='javascript is cool'
//     console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення

// let str = 'lorem ipsum';
//     console.log(str.toUpperCase());

// let str ='lorem ipsum';
//     console.log(str.toUpperCase());

// let str = 'javascript is cool';
// console.log(str.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());

// let str ='LOREM IPSUM';
// console.log(str.toLowerCase());

// let str ='JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let ggg = str.substring(1,13);
// console.log(ggg);
// console.log(ggg.length);

// let str = ' dirty string   ';
// let ggg = str.trim();
// console.log(ggg);
// console.log(ggg.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);


// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// let mapeArr = arr.map(number => '' + number);
// console.log(mapeArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//  let nums = [11,21,3];
//
// const sortNums = (direction, arr)=> {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
// console.log(sortNums('ascending',nums));
// console.log(sortNums('descending', nums));

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration > b.monthDuration){
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration){
//         return 0
//     }
// }))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let longmonth = coursesAndDurationArray.filter(value => value.monthDuration >4);
// console.log(longmonth);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// Для мене це досить невдалий приклад.
//     З картами пов*язані кроваві сторінки моєї родини. Вони стали уособленням злочинного і лузерного способу життя.
// Тому ніколи дне грав і розбиратись в них не маю бажання.
// Шкода пропустити завдання, але...