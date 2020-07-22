
const myString = "hello , world";
console.log(myString);
const myArray = [myString , "second , string"];
console.log(myArray);

const myPersonArray = [ "hennery" ,//name, 
31 , //age
["program" , "movies" , "hike"] // hobbies
];



// Object are just similar to dictionaries in python
 myObject = {
     name: "hennery",
     age: "31",
     hobbies: ["program", "movies ", "hike"]

 };
 console.log("my name is: " + myObject.name);
 console.log("my age is :" + myObject.age);
 console.log("i like to :" + myObject.hobbies);
 const validJson = JSON.stringify(myObject);
 console.log(validJson);



 class Person {
     constructor( name = "" , age = 0 , hobbies = [])
     {
         this.name = name;
         this.age = age;
         this.hobbies = hobbies;
     }

     
 }


 //leyts make some people now
 const sarah = new Person ("sarah " , 30 , ["sleep", "cosplay"]);

 console.log(sarah)
