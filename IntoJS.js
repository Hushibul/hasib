/*
If-else statement:
var myAccountBalance=300;
var nikeSBShoe=799.23;
var coupon=500;

if(nikeSBShoe<=myAccountBalance){
    myAccountBalance-=nikeSBShoe;
    console.log("Purchase succeeded");
    console.log("My Account: "+myAccountBalance);
}

else if(nikeSBShoe-coupon <=myAccountBalance){
    myAccountBalance-=nikeSBShoe-coupon;
    console.log("Purchase succeeded with coupon");
    console.log("My Account: "+myAccountBalance);
}

else{
    console.log("Insufficient balance. You are too broke");
}


Using of the === in javascript
var number1=23;
var number2="23";
//=== and !== is one equal extra in javascript for--
//--defining data type
if(number1===number2){
    console.log("They are the same");
}
else{
    console.log("They are different");
}


Some old logical operator using: 
var cat1=5;
var cat2=10;
var cat3=7;

if(cat1 > cat2 && cat1 > cat3){
    console.log("Cat1 is the cutest");
}

else if(cat2 > cat1 && cat2 >cat3){
    console.log("Cat2 is the cutest");
}

else{
    console.log("Cat3 is the cutest");
}

Arrays with javascript
var student=["Timmy", "Jesica", "Arun"];

var naughtyList=[];
naughtyList.push(student[0]);//pushing element to an array

var index=naughtyList.indexOf("Timmy");
console.log(naughtyList);

if(index > -1){
    naughtyList.splice(index, 1);//deleting element from array
}

console.log(naughtyList);


Simple Function in javascript
function area(length, width){
    return length*width;
}

var rectanglesAreas=[];

rectanglesAreas.push(area(30, 10));
rectanglesAreas.push(area(3, 2));
rectanglesAreas.push(area(20, 10));

console.log(rectanglesAreas);


Another function Example: 
var bankBalance=300;
function makeTransaction(priceOfSale){

    if(priceOfSale <= bankBalance){
        bankBalance-=priceOfSale;
        console.log("Purchased Successfully");
    }
    else{
        console.log("Insufficient Funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.57);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);
makeTransaction(400);
console.log(bankBalance);

Creating an object:
var student1 = {
    firstName: "Jason",
    lastName: "Willy",
    age: 7
};

Creating an empty object:
var student2=new Object;

student2.firstName = "Jhon";
student2.lastName = "Liam";
student2.age =6;

Another way to creating an empty object:
var student3 ={};

student3.firstName = "Mark";
student1.lastName = "Price";
student1.age = 9;

Pushing the objects to an array
var student=[];
student.push(student1);
student.push(student2);
student.push(student3);

for(var index=0; index < student.length; index++){
    console.log(student[index]);
}


//Creating a constructor in javascript
function Student(first, last, age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.greeting=function(){
        return "Hi I'm "+this.firstName+" And I'm "+this.age+" year old";
    };
}

// var s1=new student("Jenny", "Laga", 6);
// console.log(s1);
// console.log(s1.greeting());
var students=[];

students.push(new Student("Jimmy", "Den", 6));
students.push(new Student("Kimmy", "Kend", 7));
students.push(new Student("Timmy", "Leng", 8));

// for(var index=0; index < students.length; index++){
//     var student=students[index];
//     console.log(student.greeting());
// }

var student=students[0];
//Enhanced for loop in javascript:
for(var key in student){
    console.log(student[key]);
}
*/

this.car="Honda Civic";

var markGarage={
    car: "Aston Martin",
    getCar: function(){
        return this.car;
    }
}

console.log(markGarage.getCar());

var storeGetCarForLater=markGarage.getCar;
console.log(storeGetCarForLater());

var theRealGetCarFunction=markGarage.getCar.bind(markGarage);
console.log(theRealGetCarFunction());