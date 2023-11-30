/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b){
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => { return a + b; }
// let sum = addTwoNumbers(3, 5);
// console.log(sum)

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); // also valid
// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers2(3, 5);
// console.log(sum2);

// Implicit Returns
// const saySomething = message => console.log(message);
// saySomething('Hello there!');

// const sayHello = () => console.log('hello');
// sayHello();

// Returning Multiple Lines
// const returnMultipleLines = () => (
//     `<p>
//         This is a multiple string!
//     </p>`
// )
// console.log(returnMultipleLines());


/** map, filter and reduce */

// let nums = [1, 2, 3, 4, 5];

// For Loop
// let results = [];
// for (let num of nums){
//     results.push(num * 2);
// }
// console.log(results);

// Map Method
// const results1 = nums.map(num => num * 2);
// console.log(results1);

// The filter() Method
// let nums1 = [1,2,3,4,5,6,7,8,9,10];
// let filteredResults = nums1.filter(num => num % 2 === 0);
// console.log(filteredResults);

// let names = ['mike', 'jill', 'matt', 'jenny'];
// let mNames = names.filter(name => name.charAt(0) === 'm');
// console.log(mNames);


// The reduce() Method
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Map in detail
// let nums = [1, 2, 3, 4, 5];
// let results = [];
// for (let num of nums){
//     results.push(num * 2);
// }
// console.log(results);

// // Using map()
// const multByTwo = function (num) {
//     return num * 2;
// }

// const mapResults = nums.map(multByTwo);
// const mapResults1 = nums.map(function (num){return num * 2});
// const mapResults2 = nums.map( num => num * 2);
// console.log(mapResults);
// console.log(mapResults1);
// console.log(mapResults1);
// console.log(mapResults2);

// // with objects:
// const students = [
//     {
//         id: 1,
//         name: 'Mark',
//         profession: 'Developer',
//         skill: 'JavaScript'
//     },
//     {
//         id: 2,
//         name: 'Ariel',
//         profession: 'Developer',
//         skill: 'HTML'
//     },
//     {
//         id: 3,
//         name: 'Jason',
//         profession: 'Designer',
//         skill: 'CSS'
//     }
// ];

// const studentsWithIds = students.map( student => [student.name, student.id]);
// console.log(studentsWithIds);

/** The filter() Method */
// const people = [
//     {
//         name: 'Michael',
//         age: 23,
//     },
//     {
//         name: 'Lianna',
//         age: 16,
//     },
//     {
//         name: 'Paul',
//         age: 18,
//     },
// ];

// const oldEnough = people.filter(person => person.age >= 21);
// console.log(oldEnough);

// const paul = people.filter(person => person.name === 'Paul')[0];
// console.log(paul);

// const students = [
//     {
//         id: 1,
//         name: "Mark",
//         profession: "Developer",
//         skills: [
//             { name: "javascript", yrsExperience: 1 },
//             { name: "html", yrsExperience: 5 },
//             { name: "css", yrsExperience: 3 },
//         ]
//     },
//     {
//         id: 2,
//         name: "Ariel",
//         profession: "Developer",
//         skills: [
//             { name: "javascript", yrsExperience: 0 },
//             { name: "html", yrsExperience: 4 },
//             { name: "css", yrsExperience: 2 },
//         ]
//     },
//     {
//         id: 3,
//         name: "Jason",
//         profession: "Designer",
//         skills: [
//             { name: "javascript", yrsExperience: 1 },
//             { name: "html", yrsExperience: 1 },
//             { name: "css", yrsExperience: 5 },
//         ]
//     }
// ];

// const candidats = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5 );
//     return strongSkills.length > 0;
// });
// const has5yearsExp = skill => skill.yrsExperience >= 5;
// const hasStrongSkills = student => student.skills.filter( has5yearsExp ).length > 0;
// const candidats = students.filter(hasStrongSkills);

// console.log(candidats);

/** The reduce() Method */
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//     console.log(
//         "Accumulator:", acc,
//         "Current Value:", curr,
//         "Total:", acc + curr
//     );
//     return acc + curr;
// }, 10);
// let sum = nums.reduce((acc, curr) => acc + curr, 10);
// console.log(sum);



const teamMembers = [
    {
        name: "Andrew",
        profession: "Developer",
        yrsExperience: 5
    },
    {
        name: "Ariel",
        profession: "Developer",
        yrsExperience: 7
    },
    {
        name: "Michael",
        profession: "Designer",
        yrsExperience: 1
    },
    {
        name: "Kally",
        profession: "Designer",
        yrsExperience: 3
    },
];

// Totaling a specific property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <--- this is what we want!
let experienceProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]){
        acc[key] = curr.yrsExperience;
    }else{
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});
console.log(experienceProfession);