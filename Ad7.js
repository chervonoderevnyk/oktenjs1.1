// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let note = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// };
// class User {
//     constructor(id,name,username,email,address,phone,website,company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
// class Address {
//     constructor(street,suite,city,zipcode,geo,) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
// class Geo {
//     constructor(lat,lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Company {
//     constructor(name,catchPhrase,bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// let user = new User(1,'Leanne Graham','Bret','Sincere@april.biz',
//     new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',
//         new Geo('-37.3159','81.1496')),'1-770-736-8031 x56442','hildegard.org',
//         new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets'));
// console.log(user);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// class ATeg {
//     constructor (titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// }
//
// class Attrs {
//     constructor(titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
//         this.titleOfAttr1 = titleOfAttr1;
//         this.actionOfAttr1 = actionOfAttr1;
//         this.titleOfAttr2 = titleOfAttr2;
//         this.actionOfAttr2 = actionOfAttr2;
//         this.titleOfAttr3 = titleOfAttr3;
//         this.actionOfAttr3 = actionOfAttr3;
//     }
// }
//
// let arrTeg1 = new ATeg('a', `HTML теґ створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання)`,
//     new Attrs( 'href', 'вказує місце, куди буде посилатися створене посилання', 'download', 'Пропонує завантажити вказаний за посиланням файл', 'target', 'Пропонує завантажити вказаний за посиланням файл'));
//
// let arrTeg2 = new ATeg('div', `Тег використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.`,
//     new Attrs('align', 'Визначає вирівнювання вмісту всередині елемента.', 'class', 'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS)', 'id', 'Задає унікальний ідентифікатор для елемента.'));
//
// let arrTeg3 = new ATeg('h1', `Teg визначає найбільш важливі заголовки`,
//     new Attrs('align', 'Вирівнювання заголовку.', 'lang', 'Визначає основну мову вмісту елемента','hidden', 'Приховує вміст елемента від перегляду'));
//
// let arrTeg4 = new ATeg( 'span', `Тег являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом, або згрупувати вкладені елементи для їх подальшої стилізації засобами CSS, і при необхідності динамічно маніпулювати ними з використанням скриптів`,
//     new Attrs('title', 'Вказує додаткову текстову підказку', 'class', 'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS)', 'style', 'Задає вбудований (inline) CSS стиль для елемента'));
//
// let arrTeg5 = new ATeg( 'input', `Головним чином призначений для створення текстових полів, різних кнопок, перемикачів і прапорців.`,
//     new Attrs('value', 'Задає значення елемента.', 'step', 'Встановлює інтервал збільшення значення числового поля або повзунка', 'size', 'Встановлює ширину текстового поля за кількістю символів.'));
//
// let arrTeg6 = new ATeg( 'form', `HTML теґ використовується для створення HTML форми на сторінці.`,
//     new Attrs('accept','Визначає, розділений комами, перелік типів файлів, які можуть бути завантажені на сервер.', 'action', 'Вказує URL адресу обробника форми', 'name', 'Вказує унікальне імʼя форми.'));
//
// let arrTeg7 = new ATeg( 'option', `HTML тег option призначений для створення пункту списку для тега select чи datalist.`,
//     new Attrs('disabled', 'Відключає пункт списку.', 'selected', 'Задає пункт списку, який буде обраний за дефолтом.', 'value', 'Задає значення елементу `select`, яке буде обробляти скрипт.'));
//
// let arrTeg8 = new ATeg('select', `Тег дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором`,
//     new Attrs('disabled', 'Блокує доступ та зміну елемента.', 'form', 'Повʼязує список з однією або з кількома формами.', 'multiple', 'Множинний вибір'));
//
// console.log(arrTeg1,arrTeg2,arrTeg3,arrTeg4,arrTeg5,arrTeg6,arrTeg7,arrTeg8);
