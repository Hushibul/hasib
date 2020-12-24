// Variable and Operators
// var num1=2;
// var num2=5;
// var numfloat=2.545;

// In javascript every variable is float or String. There is no specific data_type in javascript. By writing var in front of varable_name you can initialize a variable.

// console.log("Addition: num1+num2 = "+(num1+num2));
// console.log("Subtraction: num1-num2 = "+(num1-num2));
// console.log("Multiplication: num1*num2 = "+(num1*num2));
// console.log("Division: num1/num2 = "+(num1/num2));
// console.log("Modulas: num1%num2 = "+(num1%num2));
// console.log("Exponant: num1**num2 = "+(num1**num2));
// console.log("Increament: num1++ = "+(num2++));
// console.log("Increament: num1++ = "+(++num2));
// console.log("Decrement: num1-- = "+(num2--));
// console.log("Increament: num1++ = "+(--num2));



// String in javascript
// var string1="I am String with double quote";
// var string2="I am String with single quote";
// var whenToUseSingleQuote='He said, "I am ill"';
// var backtiks=`${string1} "and"'We can use single quote and double quote inside of backtiks and it won't be a problem' "But we have to write in between strings" ${string2}`;
// var string_length=backtiks.length;
// var conString=new String("this");


// console.log(string1);
// console.log(string2);
// console.log(whenToUseSingleQuote);
// console.log(backtiks);
// console.log(`Length of backtiks is ${string_length}`);
// console.log("lenght of the backtik "+string_length);
// console.log(conString);



// String function in javascript
// var str="This is a string";
// console.log(str);

// First occurence of a substring
// var position=str.indexOf('is');
// console.log(position);

// Last occurence of a substring
// position=str.lastIndexOf('is');
// console.log(position);

// substring from a String: slice can take both positive and negative value
// var substr=str.slice(1,6);
// console.log(substr);

// console.log(str[2]);
// substring from a String: subString can take only positive value
// var subst=str.substring(1,7);
// console.log(subst);

// var substr1=str.substr(1,9);
// console.log(substr1);

// Replace function
// var replaced=str.replace('This', 'That');
// console.log(str);
// console.log(replaced);

// Uppercase and LowerCase function
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// var newString=str.concat(' new String');
// console.log(newString);

// var char2=str.charAt(2);
// console.log(char2);

// var char1=str.charCodeAt(2);
// console.log(char1);



// Scope in javascript
// let a='u1';
// let is used for declaring a variable like var. But unlike var let can not be override. Let can override within a block.
// {
//     let a='u5';
//     console.log(a);
// }
// console.log(a);

// const b=2.4;
// console.log(b);
// const cannot be override in any cause or way


// If_else Conditional statment in javascript
// let age=34;
// if(age>18){
//     console.log("You can drink alcohole");
// }
// else if(age<6){
//     console.log("You can drink milk");
// }
// else{
//     console.log("You can drink soda");
// }


// switch statment in javascript
// const cups = 45;
// switch (cups) {
//     case 4:
//         console.log("There are 4 cups");
//         break;

//     case 41:
//         console.log("There are 41 cups");
//         break;

//     case 44:
//         console.log("There are 44 cups");
//         break;

//     case 20:
//         console.log("There are 20 cups");
//         break;

//     case 34:
//         console.log("There are 34 cups");
//         break;

//     default:
//         console.log("These cup is not listed on the item_list");
//         break;
// }


// Arryas and Object in javascript
// let myVar1=24;
// let myVar2="string";
// let myVar3=null;
// let myVar4=undefined;

// Object
// let employee={
//     name: "Shaw",
//     salary: 15,
//     "Per Add": 'Sydney',
//     NewAdd: "Tokiyo",
// }
// console.log(employee);
// console.log(employee.name);
// console.log(employee["Per Add"]);


// Array
// let names=["Lucy", "Mark", "Jhon"];
// let name=new Array("Luke", "Mike", "Luny");
// names=names.sort();
// names.push("This is pushed");
// console.log(names);
// console.log(name);



// Functions in javascript
// let name1="Zoro";
// let name2="Goku";
// let name3="Trunks";
// let name4="Golem";

// function greet(name, greetText="Get out from here"){
//     console.log(greetText+ " "+name);
//     console.log(name + " is a good boy");
// }
// greetText="Hello"

// greet(name1,greetText);
// greet(name2,greetText);
// greet(name3,greetText);
// greet(name4);


// function sum(a, b, c){
//     let d=a+b+c;
//     return d;
// }
//a function stop working after executing the return statement


// Alert, Prompt, Confirm pop up window 
// Alert
// Alert is a pop up message which does not return anything just shows the message
// alert("This is alert message");

// Prompt 
// Prompt is a pop up window which can take user input
// let names=prompt("What is your name", "Guest");
// console.log(names);

// Confirm 
// let deletePost=confirm("Do you really want to delete this post?");
// console.log(deletePost);

// if(deletePost){
//     console.log("Your post has been deleted");
// }
// else{
//     console.log("You successfully declined the delete request");
// }

// Practice of 
// let age=prompt("Enter your age", "18");
// console.log(age);
// if(age>=18){
//     alert("You can enter the club");
// }
// else{
//     alert("You are not eligable for this club");
// }


// Using Loops in Arrays
let friends=["Rimel", "Mahdi", "Koushal", "Tanvi", "Jaber"];
// regular for loop
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);   
// }

// foreach loop
// friends.forEach(function f(element){
//     console.log(element);
// });

// forof loop
for (element of friends){
    console.log(element);
}