//let chysla;
//chysla = [343, 7, 425, 900, 404, 3, 45423, 555, 66, 888];
//console.log(chysla);

//chysla[0] = 1;
//chysla[1] = 'he';
//chysla[10] = true;
//chysla[5] = 'world';
//console.log(chysla);

//console.log(chysla[3]);


//let book = {name: 'europa', page: 500, genre: 'psykhology'}
//let book = {name: 'animal farm', page: 185, genre:'story'}
//let book = {name: 'little prince', page: 110, genre:'novel'}


//let book =  {name: 'europa', page: 500, genre: 'psykhology', writer : [{name: 'Komarek', age: 64}, {name: 'Orwel', age: 'died'}]}
//let book =  {name: 'animal farm', page: 185, genre: 'story', writer : [{name: 'Orwel', age: 'died'}, {name: 'Saint Exupery', age: 'died'}]}
//let book = {name: 'little prince', page: 110, genre: 'novel', writer : [{name: 'Saint Exupery', age: 'died'}, {name: 'Orwel', age: 'died'}]}


let arr = [
    {
        title: 'europa',
        page: 500,
        genre: 'psykhology',
        authors: [
            {name: 'Komarek', age: 64},
            {name: 'Orwel', age: 'died'}],
    },
    {
        title: 'animal farm',
        page: 185,
        genre: 'story',
        authors: [
            {name: 'Orwel', age: 'died'},
            {name: 'Saint Exupery', age: 'died'}]
    },
    {
        title: 'little prince',
        page: 110,
        genre: 'novel',
        authors: [
            {name: 'Saint Exupery', age: 'died'},
            {name: 'Orwel', age: 'died'}]
    },
]

console.log(arr[0].title);
console.log(arr[0].authors);
console.log(arr[0].authors[0]);
console.log(arr[0].authors[0]['age']);
console.log(arr[0].authors[0].age);
console.log(arr[0].authors[0].name);