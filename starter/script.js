/**let js = 'amazing';
console.log( 40+8+23-10);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/
/*
Javascript Conversion Rule
in JS CamelCase is used first letter of the first word should be letter and the first letter of the second word should capital letter.

Examples 
firstName not firstname
There also other ways of writing variable names with an underscore like first_name.

Variable names shouldn't start with a number such 5, it is an illegal way to declare a variable.
Errors may occurs when you use keywords in javascript such as new,function
if you want to use a keyword u should start the declaration with an underscore or dollar sign.
we should also not start with a capital letter, capital letter are refered for constants, such as PI = 3.14, God... etc
*/


/**
 * Data Types
 * In javascript everything value is either an object or primitive
 * Object
 *  let me = {
 * name: 'Abraham'};
 * 
 * Everything else is primitive
 * let firstName = 'Abraham';
 * let age = 30;
 * 
 * a value is only a primitive when it's not an object
 * 
 * The 7 primitive data types 
 * 1 . Number: Floating point numbers = used for decimal and integers e.g let age = 23;
 * 2 . String: Sequence of character = used for text e.g let firstName = "Abraham";
 * 3 . Boolean: Logical type that can only be true or false = used for taking decisions
 * These 3 data types are what shall be used the most, the other data types are a bit confusing.
 * and they are as follows;-
 * 4. undefined: value taken by a variable that is not yet defined(empty value) e.g let children;
 * 5. Null: also means 'empty value'
 * 6.Symbol(ES2015): value that is unique and cannot be changed[not useful for now]
 * 7.BigInt(ES2020): Larger integers that number type can hold
 * 
 * Javascript has dynamic typing: we do not have to manually define the data type of the value stored in a variable(value has type,NOT variable).... instead, data types are determined automatically.
 * 
 * One important feature in programming is commenting,
 * it is used to comment code and also disactivate code
 * // is used to write a single linee comment &
 * /* / = is used to multiple line comments.
 * 
 */




/**
let javascriptIsFun = true;
console.log(javascriptIsFun);
// typeof operator is like the + or - operator
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Abraham");

//Dynamic Typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined data type exampe
let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(year);
console.log(typeof year);

*/
// LET CONST AND VAR
/**
 * we use the let keyword to declare variables that can change later on
 * Reassigning variable 
 * another word mutuating variable.
 * e.g let age =25;
 * age can change age = 26;
 * 
 * Use Const to declare variable that cannot change.
 * such as birthYear
 * example
 * const birthYear = 1997;
 * birthYear = 1998;
 * will display an assigment to constant variable error because it's not suppossed to change.
 * in technical terms unmutuable variable.
 * mutual meaning can change 
 * immutuable cannot change.
 */
/*
//Basic operator
const now =2037
const ageAbraham = now-1991;
const ageSarah = now-1997;
console.log(ageAbraham,ageSarah);
console.log(ageAbraham * 2, ageSarah/ 10,2**3)
//2 *** means 2 to the power of 3 = 2*2*2
const firstName = "Abraham Denis";
const lastName = "Omongole";
console.log(firstName + '' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++;
x--;
x--;
console.log(x);

//comparison operators
console.log(ageAbraham > ageSarah);
console.log(ageSarah >= 18);
*/










/*
mark and john are trying to compare their 
BMI(body mass index),
 which is calculated using the formaula 
 BMI =mass/height**2 = mass /(height).
  (mass in kg and height in meters)

1.Store mark's and john's mass and height in variables
2. calculate both their BMIs using the formula 
(you can even implement both versions)
3.create a boolean variable markHiger
BMI containing information about 
whether mark has a higher BMI than John.

TEST DATA 1: mark weighs 78kg and is 1.69 m tall
john weighs 92kg and is 1.95 m tall
TEST DATA 2: marks weights 95kg and is 1.88 m tall.
john weighs 85kg and is 1.76m tall

 */

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass/markHeight**2
const johnBMI = johnMass / (johnHeight* johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI,johnBMI,markHeight);


