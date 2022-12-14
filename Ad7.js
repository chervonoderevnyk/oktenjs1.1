
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

let TegsArray = [
    {
    titleOfTag: 'a',
        action: `HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання)`,
    attrs: [
    {titleOfAttr: 'href', actionOfAttr: 'вказує місце, куди буде посилатися створене посилання'},
        {titleOfAttr:'download',actionOfAttr:'Пропонує завантажити вказаний за посиланням файл'},
        {titleOfAttr:'target',actionOfAttr:'Ім*я вікна або фрейму, куди браузер буде завантажувати документ'},
        {titleOfAttr:'media',actionOfAttr:'Вказує, що пов’язаний документ оптимізований під деякий пристрій'},
]},
    {
        titleOfTag: 'div',
        action: `Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.`,
        attrs: [
            {titleOfAttr: 'align',
                actionOfAttr: 'Визначає вирівнювання вмісту всередині `<div>` елемента.'},
            {titleOfAttr:'class',actionOfAttr:'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS)'},
            {titleOfAttr:'id',actionOfAttr:'Задає унікальний ідентифікатор для елемента.'},
            {titleOfAttr:'style',actionOfAttr:'Задає вбудований (inline) CSS стиль для елемента'},
        ]},
    {
        titleOfTag: 'h1',
        action: `Teg <H1> визначає найбільш важливі заголовки`,
        attrs: [
            {titleOfAttr: 'align',
                actionOfAttr: 'Вирівнювання заголовку.'},
            {titleOfAttr:'lang',actionOfAttr:'Визначає основну мову вмісту елемента'},
            {titleOfAttr:'hidden',actionOfAttr:'Приховує вміст елемента від перегляду'},
            {titleOfAttr:'dropzone',actionOfAttr:'Вказує, що робити з перетягувати елементи.'},
        ]},
    {
        titleOfTag: 'span',
        action: `Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом, або згрупувати вкладені елементи для їх подальшої стилізації засобами CSS, і при необхідності динамічно маніпулювати ними з використанням скриптів`,
        attrs: [
            {titleOfAttr: 'title',
                actionOfAttr: 'Вказує додаткову текстову підказку'},
            {titleOfAttr:'class',actionOfAttr:'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS)'},
            {titleOfAttr:'style',actionOfAttr:'Задає вбудований (inline) CSS стиль для елемента'},
            {titleOfAttr:'dropzone',actionOfAttr:'Вказує, що робити з перетягувати елементи.'},
        ]},
    {
        titleOfTag: 'input',
        action: `Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців.`,
        attrs: [
            {titleOfAttr: 'value',
                actionOfAttr: 'Задає значення елемента.'},
            {titleOfAttr:'step',actionOfAttr:'Встановлює інтервал збільшення значення числового поля або повзунка'},
            {titleOfAttr:'size',actionOfAttr:'Встановлює ширину текстового поля за кількістю символів.'},
            {titleOfAttr:'required',actionOfAttr:'Вказує що поле обов\'язкове для заповнення.'},
        ]},
    {
        titleOfTag: 'form',
        action: `HTML теґ <form> використовується для створення HTML форми на сторінці.`,
        attrs: [
            {titleOfAttr: 'accept',
                actionOfAttr: 'Визначає, розділений комами, перелік типів файлів, які можуть бути завантажені на сервер.'},
            {titleOfAttr:'action',actionOfAttr:'Вказує URL адресу обробника форми'},
            {titleOfAttr:'name',actionOfAttr:'Вказує унікальне імʼя форми.'},
            {titleOfAttr:'target',actionOfAttr:'Фрейм або вікно в яке буде завантажена відповідь сервера.'},
        ]},
    {
        titleOfTag: 'option',
        action: `HTML тег option призначений для створення пункту списку для тега select чи datalist`,
        attrs: [
            {titleOfAttr: 'disabled',
                actionOfAttr: 'Відключає пункт списку.'},
            {titleOfAttr:'selected',actionOfAttr:'Задає пункт списку, який буде обраний за дефолтом.'},
            {titleOfAttr:'value',actionOfAttr:'Задає значення елементу `select`, яке буде обробляти скрипт.'},
            {titleOfAttr:'label',actionOfAttr:'Вказує короткий опис для пункту списку'},
        ]},
    {
        titleOfTag: 'select',
        action: `Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором`,
        attrs: [
            {titleOfAttr: 'disabled',
                actionOfAttr: 'Блокує доступ та зміну елемента.'},
            {titleOfAttr:'form',actionOfAttr:'Повʼязує список з однією або з кількома формами.'},
            {titleOfAttr:'multiple',actionOfAttr:'Множинний вибір'},
            {titleOfAttr:'size',actionOfAttr:'Кількість видимих елементів спску.'},
        ]}]

    for (const item of TegsArray) {

        let mainDiv = document.createElement('div');
        document.body.append(mainDiv);

        let titleOfTagDiv = document.createElement('div');
        titleOfTagDiv.innerText = `${item.titleOfTag}`;
        titleOfTagDiv.style.fontSize = '25px';
        titleOfTagDiv.style.borderTop = '3px solid blue';
        mainDiv.append(titleOfTagDiv);

        let actionDiv = document.createElement('div');
        actionDiv.innerText = `${item.action}`;
        actionDiv.style.fontSize = '20px';
        mainDiv.append(actionDiv);

        // let attrsDiv = document.createElement('div');
        // attrsDiv.innerText = `${item.attrs}`;
        // mainDiv.append(attrsDiv);

        let ul = document.createElement('ul');
        mainDiv.append(ul);

        for (const itemElement of item.attrs) {
            let li = document.createElement('li');
            li.innerText = `${itemElement.titleOfAttr} - ${itemElement.actionOfAttr}`;
            li.style.fontSize = '18px';

            ul.append(li);
        };

    };
