// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// const user1 = new User(1, 'Bobik', 'Guma', 'asdfG@gmail.com', '123456789');
// const user2 = new User( 2, 'Tobik', 'Guba', 'advvfdfG@gmail.com', '123456689');
// const user3 = new User( 3, 'Bolik', 'Guna', 'bbbdkkfG@gmail.com', '123444489');
// const user4 = new User( 4, 'Lolik', 'Guga', 'asdfcbv@gmail.com', '1234534678');
// const user5 = new User( 5, 'Dobik', 'Guta', 'askjG@gmail.com', '777456789');
// const user6 = new User( 6, 'Gobik', 'Gura', 'assSfG@gmail.com', '126566789');
// const user7 = new User( 7, 'Robik', 'Gupa', 'astytert@gmail.com', '123456111');
// const user8 = new User( 8, 'Borik', 'Gusa', 'asgggG@gmail.com', '123444678');
// const user9 = new User( 9, 'Kobik', 'Guda', 'asdkjfdkfd@gmail.com', '335456789');
// const user10 = new User( 10, 'Sobik', 'Gula', 'asdfsdfG@gmail.com', '123456854');
//
//  const arrUsers = [];
//
//  console.log(arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10));

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// const user1 = new User(1, 'Bobik', 'Guma', 'asdfG@gmail.com', '123456789');
// const user2 = new User( 2, 'Tobik', 'Guba', 'advvfdfG@gmail.com', '123456689');
// const user3 = new User( 3, 'Bolik', 'Gena', 'bbbdkkfG@gmail.com', '123444489');
// const user4 = new User( 4, 'Lolik', 'Gyga', 'asdfcbv@gmail.com', '1234534678');
// const user5 = new User( 5, 'Dobik', 'Gata', 'askjG@gmail.com', '777456789');
// const user6 = new User( 6, 'Gobik', 'Gura', 'assSfG@gmail.com', '126566789');
// const user7 = new User( 7, 'Robik', 'Gupa', 'astytert@gmail.com', '123456111');
// const user8 = new User( 8, 'Borik', 'Susa', 'asgggG@gmail.com', '123444678');
// const user9 = new User( 9, 'Kobik', 'Gida', 'asdkjfdkfd@gmail.com', '335456789');
// const user10 = new User( 10, 'Sobik', 'Gula', 'asdfsdfG@gmail.com', '123456854');
//
//  const arrUsers = [];
//  arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
 // let filter = arrUsers.filter(value => value.id% 2 === 0);
 // console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// const user1 = new User(1, 'Bobik', 'Guma', 'asdfG@gmail.com', '123456789');
// const user2 = new User( 2, 'Tobik', 'Guba', 'advvfdfG@gmail.com', '123456689');
// const user3 = new User( 3, 'Bolik', 'Gena', 'bbbdkkfG@gmail.com', '123444489');
// const user4 = new User( 4, 'Lolik', 'Gyga', 'asdfcbv@gmail.com', '1234534678');
// const user5 = new User( 5, 'Dobik', 'Gata', 'askjG@gmail.com', '777456789');
// const user6 = new User( 6, 'Gobik', 'Gura', 'assSfG@gmail.com', '126566789');
// const user7 = new User( 7, 'Robik', 'Gupa', 'astytert@gmail.com', '123456111');
// const user8 = new User( 8, 'Borik', 'Susa', 'asgggG@gmail.com', '123444678');
// const user9 = new User( 9, 'Kobik', 'Gida', 'asdkjfdkfd@gmail.com', '335456789');
// const user10 = new User( 10, 'Sobik', 'Gula', 'asdfsdfG@gmail.com', '123456854');
//
// const arrUsers = [];
// arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(arrUsers.sort((a, b) => b.id - a.id));

// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const user1 = new Client( 1, 'Bobik', 'Guma', 'asdfG@gmail.com', '123456789', [1,2,3,4]);
// const user2 = new Client( 2, 'Tobik', 'Guba', 'advvfdfG@gmail.com', '123456689', [33,5,6]);
// const user3 = new Client( 3, 'Bolik', 'Gena', 'bbbdkkfG@gmail.com', '123444489', [5,6,7,9,0,9]);
// const user4 = new Client( 4, 'Lolik', 'Gyga', 'asdfcbv@gmail.com', '1234534678', [4,4,4,4,5]);
// const user5 = new Client( 5, 'Dobik', 'Gata', 'askjG@gmail.com', '777456789', [213,3,5]);
// const user6 = new Client( 6, 'Gobik', 'Gura', 'assSfG@gmail.com', '126566789', [1,1,1,1,4,4]);
// const user7 = new Client( 7, 'Robik', 'Gupa', 'astytert@gmail.com', '123456111', [3,4,5,6,7,7,8,6]);
// const user8 = new Client( 8, 'Borik', 'Susa', 'asgggG@gmail.com', '123444678', [1,1,1,1,1,1,1]);
// const user9 = new Client( 9, 'Kobik', 'Gida', 'asdkjfdkfd@gmail.com', '335456789', [4,4,4,7,5,9,2]);
// const user10 = new Client( 10, 'Sobik', 'Gula', 'asdfsdfG@gmail.com', '123456854', [8,8,8,2,2]);
//
// const arrUsers = [];
// arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(arrUsers.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (const carKay in this) {
//             if (typeof this[carKay] !== 'function') {
//                 console.log(`${carKay} -- ${this[carKay]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Tuareg', 'Nimec', '2020', 280, 2.8);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(60);
// car.changeYear(2021);
// car.addDriver({name: 'Leleka'});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info () {
//         for (const carKay in this) {
//             if (typeof this[carKay] !== 'function') {
//                 console.log(`${carKay} -- ${this[carKay]}`);
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Tuareg', 'Nimec', '2020', 280, 2.8);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(60);
// car.changeYear(2021);
// car.addDriver({name: 'Leleka'});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popa {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// const Popa1 = new Popa('lora',19,37);
// const Popa2 = new Popa('Anna',26,36);
// const Popa3 = new Popa('Olya',22,30);
// const Popa4 = new Popa('Mira',63,45);
// const Popa5 = new Popa('Zoya',16,31);
// const Popa6 = new Popa('Manya',17,33);
// const Popa7 = new Popa('Ira',18,39);
// const Popa8 = new Popa('Nata',19,36);
// const Popa9 = new Popa('Tera',20,35);
// const Popa10 = new Popa('Emma',25,29);
//
// const arrPopa = [];
// arrPopa.push(Popa1, Popa2, Popa3, Popa4, Popa5, Popa6, Popa7, Popa8, Popa9, Popa10);
//
// class Prince {
//     constructor(name, age, labatenes) {
//         this.name = name;
//         this.age = age;
//         this.labatenes = labatenes;
//     }
// }
// const prince = new Prince('VovaziLvova', 18, 45);
//
// const Prumirochna = (array, realnyjPaca) => {
//     for (const item of array) {
//         if (item.footSize === realnyjPaca.labatenes) {
//             console.log(`Fajna divka, maje dobri grabli: ${item.name}`);
//         }
//     }
// }
//
// console.log(Prumirochna(arrPopa, prince));
//
// let find = arrPopa.find(value => value.footSize === prince.labatenes);
// console.log(find)


