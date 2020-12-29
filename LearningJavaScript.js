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
// var string_length=backticks.length;
// var conString=new String("this");


// console.log(string1);
// console.log(string2);
// console.log(whenToUseSingleQuote);
// console.log(backtiks);
// console.log(`Length of backticks is ${string_length}`);
// console.log("lenght of the backticks "+string_length);
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


// Using Loops in JS
// let friends=["Rimel", "Mahdi", "Koushal", "Tanvi", "Jaber"];
// regular for loop
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);   
// }

// foreach loop
// friends.forEach(function f(element){
//     console.log(element);
// });

// forof loop
// for (element of friends){
//     console.log(element);
// }

// forin loop
// forin loop is used in object 
// let employee ={
//     name: "Shawn",
//     salary: 2,
//     address: "USA"
// }

// for(key in employee){
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }

// while loop
// let i=0;
// while(i<4){
//     console.log(`${i} is less than four`);
//     i++;
// }

// Do while loop
// let i=0;
// do{
//     console.log(`${i} is less than four`);
//     i++;
// }while(i<=4);



// Maupulating DOM: Document Object Model
// getElementById
// let main=document.getElementById('main');
// console.log(main);
// let nav=document.getElementById('nav');
// console.log(nav);

// nav.innerHTML="<li>Dynamic</li>"

// getElementByClassName
// let container=document.getElementsByClassName('container');
// console.log(container);

// QuerySelector
// let sel=document.querySelector('.container');
// console.log('Selector Returns ', sel);

// let sel=document.querySelectorAll('.container');
// console.log(sel);


// EventListener in javascript
// let para=document.getElementById('para');
// para.addEventListener('mouseover', function run(){
//     alert("Mouse Inside");
// });

// let para=document.getElementById('para');
// para.addEventListener('mouseout', function run(){
//     alert("Mouse went outside");
// });

// function toggleHide(){
//     let btn=document.getElementById('btn');
//     let para=document.getElementById('para');

//     if(para.style.display !='none'){
//         para.style.display='none';
//     }
//     else{
//         para.style.display='block';
//     }
// }



// Some Useful function 
// setTimeout function: Allow us to run the function onece after the interval time.

// clearTimeout function: Allow us to run the function repeatedly after the interval time.

// console.log("calling function");
// function greet(name, byeText){
//     console.log("Hello, Good Morning " +name+ " "+byeText);
// }

// setTimeout function:
// timeout=setTimeout(greet, 5000, "Shawn", "Ba_bye");
// console.log(timeout);
//Inside setTimeout function you just need to write the name of the function like greet. Do not call the function greet().

// clearTimeout(timeout);


// setInterval:
// intervalId=setInterval(greet, 2000, "Leo", "Go away");
// clearInterval(intervalId);

//Making Time function:
// function displayTime(){
//     time=new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML(time);
// }

// setInterval(displayTime, 1000);


// Using Date and time Class in javascript
// let now=new Date();
// console.log(now);

// let dt=new Date(1000);//1000miliseconds=1second before
// console.log(dt);

// let futureDate=new Date("2050-09-13");
// console.log(futureDate);

// let newDate=new Date(year, month, day, hour, miniute, second, milisecond);
// let newDate=new Date(3000, 10, 25, 12, 16, 55);
// console.log(newDate);

// let yr=newDate.getFullYear();
// console.log("The year is : "+yr);

// let month=newDate.getMonth();
// console.log("The month is ", month);

// let date=newDate.getDate();
// console.log("The date is : "+date);

// let hour=newDate.getHours();
// console.log("The Hour is : "+hour);

// let miniute=newDate.getMinutes();
// console.log("The miniute is: ", miniute);

// newDate.setDate(12);
// console.log(newDate);

// Date.now();shows the miliseconds of the passing date

//Running watch in webpage
// setInterval(updateTime, 1000);
// function updateTime(){
//     Time.innerHTML=new Date();
// }


// Arrow function:
// Regular format:
// function greet(){
//     console.log("Good Morning");
// }
// greet();

// Arrow format:
//let greet = ()=> {
//     console.log("Good Morning");
// } 
// greet();

// let greet= () => console.log("Good Morning");
// greet();

// Function ShortCut using arrow funciton 
// let sum= (a, b) =>{
//     return a+b;
// };

// let sum= (a, b) =>(a+b);
// console.log(sum);

// let half= a =>a/2;

// let obj={
//     greeting: "Good Morning",
//     names: ["Doll", "Dim", "Danny", "Dom"],
//     speak(){
//         this.names.forEach((student)=>{
//             console.log(this.greeting+ "Go to hell"+ student);
//         });
//     }
// }

// obj.speak();



// Math in javascript
// using constant for math object:
// console.log("The value of E ",Math.E);
// console.log("The value of E ",Math.PI);
// console.log("The value of E ",Math.LN2);
// console.log("The value of E ",Math.SQRT2);
// console.log("The value of E ",Math.LOG2E);
// console.log("The value of E ",Math.SQRT1_2);

// Math object: 
// let a=34.5345353;
// let b=89;

// console.log("The value of a,b", a, b);

//Round, ceiling, floor value
// console.log("The value of rounded a, b", Math.round(a), Math.round(b));
// console.log("The ceiling value of a ", Math.ceil(a));
// console.log("The floor value of a ", Math.floor(a));

//power and square root
// console.log("The three to the four", Math.pow(3, 4));
// console.log("The squre root of 36", Math.sqrt(36));

//Absolute value
// console.log("The absolute value : ", Math.abs(4.66));
// console.log("The absolute value: "+Math.abs(4.66));

//Trigonmatric value
// console.log("The value of sin30", Math.sin(30));

//Maximum and minimum
// console.log("The maximum value: ", Math.max(4, 6, 2));
// console.log("The minimum value: ", Math.min(4, 6, 7));

//Random number
//random number b/w (a,b)= a+ (b-a)*Math.random();
// let j=1;
// let k=100;
// let rand=j+(k-j)*Math.random();
// console.log("The random number of 1 to 100: "+Math.round(rand));



//JSON: JSON stands for javascript object notation. It stands for storing and transporting object.
// let jsonObj={
//     name: "Leo",
//     work: "Beating",
//     friend: "Rio",
//     food: "junk"
// }
// console.log(jsonObj);

// let myjsonObj=JSON.stringify(jsonObj);
//this converts the object into string. Now, we can apply all string property.

// myjsonObj=myjsonObj.replace("Leo", "Deo");
// console.log(myjsonObj);

// newjsonObj=JSON.parse(myjsonObj);
//This converts the string file back to json file. But, the file must be a valid JSON string.
// console.log(newjsonObj);
