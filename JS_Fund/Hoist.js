// GIVEN
// console.log(example);
// var example = "I'm the example!";
// ------ Interpreter will see -------
// var example;
// console.log(example);
// example = "I'm the example!"
// ------ Predicted output -----------
// error that example is undefined

// GIVEN
// console.log(example);
// let example = "I'm the example!";
// ----------- Output -----------------------
// cannot access example before initialization

// console.log("---------- 1 ----------");
// // 1
// console.log(hello);
// var hello  = 'world';
// // -----
// // var hello;
// // console.log(hello);
// // hello = 'world';
// // -----
// // undefined

// console.log("---------- 2 ----------");
// // 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // -------
// // var needle;
// // function test(){
// //     var needle;
// //     needle = 'magnet';
// //     console.log(needle);
// // }
// // needle = 'haystack';
// // test();
// // --------
// // magnet

// console.log("---------- 3 ----------");
// // 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// // --------
// // var brendan;
// // function print(){
// //     brendan = 'only okay';
// //     console.log(brendan);
// // }
// // brendan = 'super cool';
// // console.log(brendan);
// // --------
// // super cool

// console.log("---------- 4 ----------");
// // 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // ---------
// // var food;
// // function eat(){
// //     var food;
// //     food = 'half-chicken';
// //     console.log(food);
// //     food = 'gone';
// // }
// // food = chicken;
// // console.log(food);
// // eat();
// // --------
// // chicken
// // half-chicken

// console.log("---------- 5 ----------");
// // 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// // --------
// // var mean;
// // mean();
// // console.log(food);
// // mean = function(){
// //     var food;
// //     food = 'chicken';
// //     console.log(food);
// //     food = 'fish';
// //     console.log(food);
// // }
// // console.log(food);
// // --------
// // mean is not a function

// console.log("---------- 6 ----------");
// // 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// // -------
// // var genre;
// // function rewind() {
// //     var genre;
// //     genre = "rock";
// //     console.log(genre);
// //     genre = "r&b";
// //     console.log(genre);
// // }
// // console.log(genre);
// // genre = "disco";
// // rewind();
// // console.log(genre);
// // -------
// // undefined
// // rock
// // r&b
// // disco

console.log("---------- 7 ----------");
// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// --------
// san jose
// seattle 
// burbank 
// san jose 

console.log("---------- 8 ----------");
// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// ------
// { name: 'Chicago', students: 65, hiring: true }
// TypeError: Assignment to constant variable at -> dojo = "closed for now";