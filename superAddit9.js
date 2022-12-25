// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }
];


arr = [];
for (const user of users) {
    arr.push(JSON.parse(JSON.stringify(user.address)));
}
;
console.log(arr);


let block0 = document.createElement('div');
block0.style.border = '3px solid black';
block0.style.width = '40%';
block0.style.margin = '1% 20% 1% 25%';
document.body.append(block0);

for (const user of users) {

    let block = document.createElement('div');
    block.style.border = '3px solid blue';
    block.style.margin = '12px';
    block.style.fontSize = '22px';
    block.innerText = `${user.name} -${user.age} -${user.status} -${user.address.city} -${user.address.country} -${user.address.street} -${user.address.houseNumber}`;
    block.style.textAlign = 'center';
    block0.append(block);
}
;


let block1 = document.createElement('div');
block1.style.border = '3px solid black';
block1.style.width = '40%';
block1.style.margin = '2% 20% 1% 25%';

document.body.append(block1);

for (const user of users) {

    let block2 = document.createElement('div');
    block2.style.border = '3px solid blue';
    block2.style.margin = '20px';
    //block2.style.fontSize = '22px';
    block1.append(block2)

    let name = document.createElement('div');
    name.style.border = '3px solid red';
    name.style.margin = '6px';
    name.style.fontSize = '22px';
    name.innerText = `${user.name}`;
    name.style.textAlign = 'center';
    block2.append(name);

    let age = document.createElement('div');
    age.style.border = '3px solid red';
    age.style.margin = '6px';
    age.style.fontSize = '22px';
    age.innerText = `${user.age}`;
    age.style.textAlign = 'center';
    block2.append(age);

    let status = document.createElement('div');
    status.style.border = '3px solid red';
    status.style.margin = '6px';
    status.style.fontSize = '22px';
    status.innerText = `${user.status}`;
    status.style.textAlign = 'center';
    block2.append(status);

    let address = document.createElement('div');
    address.style.border = '3px solid red';
    address.style.margin = '6px';
    address.style.fontSize = '22px';
    address.innerText = `${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`;
    address.style.textAlign = 'center';
    block2.append(address);
}
;


let block3 = document.createElement('div');
block3.style.border = '3px solid black';
block3.style.margin = '20px';
block3.style.width = '40%';
block3.style.margin = '2% 20% 1% 25%';
document.body.append(block3);

for (const user of users) {

    let block4 = document.createElement('div');
    block4.style.border = '3px solid red';
    block4.style.margin = '20px';
    //block4.style.fontSize = '18px';
    block3.append(block4)

    let name = document.createElement('div');
    name.style.border = '3px solid green';
    name.style.margin = '10px';
    name.style.fontSize = '22px';
    name.innerText = `${user.name}`;
    name.style.textAlign = 'center';
    block4.append(name);

    let age = document.createElement('div');
    age.style.border = '3px solid green';
    age.style.margin = '10px';
    age.style.fontSize = '22px';
    age.innerText = `${user.age}`;
    age.style.textAlign = 'center';
    block4.append(age);

    let status = document.createElement('div');
    status.style.border = '3px solid green';
    status.style.margin = '10px';
    status.style.fontSize = '22px';
    status.innerText = `${user.status}`;
    status.style.textAlign = 'center';
    block4.append(status);

    let address = document.createElement('div');
    address.style.border = '3px solid blue';
    address.style.margin = '10px';
    block4.append(address);

    let city = document.createElement('div');
    city.innerText = `${user.address.city}`;
    city.style.textAlign = 'center';
    city.style.border = '3px solid yellow';
    city.style.margin = '12px';
    city.style.fontSize = '22px';
    address.append(city);

    let country = document.createElement('div');
    country.innerText = `${user.address.country}`;
    country.style.textAlign = 'center';
    country.style.border = '3px solid yellow';
    country.style.margin = '12px';
    country.style.fontSize = '22px';
    address.append(country);

    let street = document.createElement('div');
    street.innerText = `${user.address.street}`;
    street.style.textAlign = 'center';
    street.style.border = '3px solid yellow';
    street.style.margin = '12px';
    street.style.fontSize = '22px';
    address.append(street);

    let houseNumber = document.createElement('div');
    houseNumber.innerText = `${user.address.houseNumber}`;
    houseNumber.style.textAlign = 'center';
    houseNumber.style.border = '3px solid yellow';
    houseNumber.style.margin = '12px';
    houseNumber.style.fontSize = '22px';
    address.append(houseNumber);
}


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Перше правило Бійцівского клубу.',
        body: 'Нікому не розповідати про Бійцівский клуб.'
    },
    {
        title: 'Друге правило Бійцівского клубу.',
        body: 'Ніколи нікому не розповідати про Бійцівский клуб.'
    },
    {
        title: 'Третє правило Бійцівского клубу.',
        body: 'В поєдинку беруть участь тільки двое.'
    },
    {
        title: 'Четверте правило Бійцівского клубу.',
        body: 'Не більше одного поединку одночасно.'
    },
    {
        title: 'П`яте правило Бійцівского клубу.',
        body: 'Бійці б`ются без взуття і голі по пояс.'
    },
    {
        title: 'Шосте правило Бійцівского клубу.',
        body: 'Поединок продовжуется стільки, скільки потрібно.'
    },
    {
        title: 'Сьоме правило Бійцівского клубу.',
        body: 'Якщо противник втратив свідомість або вдає, що втратив, або говорить «Досить» — поединок закінчений.'
    },
    {
        title: 'Восьме правило Бійцівского клубу.',
        body: 'Якщо ти вперше у Бійцівському клубі, ти МАЄШ битися.'
    },

];
