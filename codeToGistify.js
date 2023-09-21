
        "Data Types": "/* Primitive Data Types */ 
 1. Number: includes integers, floating-point, or scientific notation (append with \"e\") 
     15 
     4.9 
     456e3 // === 456000 
 2. String 
     \"hello world\" 
 3. Boolean 
     true 
     false 
 4. null: an assigned date type that represents no value. 
     let x = null; 
 5. undefined: represents a variable having not yet been assigned a value 
     let y; // y returns undefined 
 6. Symbol:  instances of this data type are unique & immutable; often used to add unique property keys to an object 
     let unique_key = Symbol(\"hello world\") 
 7. BigInt: used to represent big integer values that are too big to be represented by the Number data type (i.e. 16 digits & over). To create a BigInt, append n to the end of an integer or call BigInt() 
     let x = 1234567890123456789012345n; 
     let y = BigInt(1234567890123456789012345) 

 /* Compound Data Types */ 
 8. Object: key-value pairs of collection of data 
     let obj = {a: \"hello world\", \"key with spaces\": 450}",

        /* Encap & Gen */

        "Assignment, Variables, Scope": "// Assignment operator 
     = 
 1. let : block scope, function scope, mutable, not hoisted 
      let x = \"hello world \" 
      let y; 
      y = 400 
 2. const: block scope, function scope, immutable (must be defined on declaration), not hoisted 
      const x = 10; 
      const y = \"can't change this val\" 
 3. var : no block scope, function scope, mutable, hoisted 
      var x; 
      var y = 100; 
      y = \"one hundred\"",

        Functions: "1. Regular Function 

 function functionName (pm1, pm2) { 
      /* function body */ 
 } 

 2. Anonymous Function: A function without a name; typically assigned to a variable or passed as an argument. 

 function(pm1) { 
     /* function body */ 
 } 
 const nameOfFunction = function(pm2) { 
     /* function body */ 
 } 
 array.forEach(function(item) {console.log(item)})",

        "Functions Shorthand": "1. Arrow Function shorthand for declaring anonymous functions. 

 const functionOne = (pm1, pm2) => { 
      /* function body */} 

 2. If there is one one parameter, parentheses can be dropped. 

 const secondFunction = pm1 => { 
      /* function body */
} 

 3. If there is only one statement in the function body, curly braces can be dropped. 

 const logParameter = pm => console.log(pm);",

        /* Control Flow */
    
        "Conditional Statements": "if (condition) { 
      /* code block executed if the condition is true */ 
 } else { 
      /* code block executed if the condition is false */ 
 } 

 // else if : specifies alternate condition if the first condition is false 
 if (condition) { 
      /* block of code to be executed if the condition is true */ 
 } else if { 
      /* code block executed if alternate condition is true */ 
 } else { 
      /* code block executed if all conditions are false */ 
 }",

        "Matching Conditional": "Switch statement: evaluates an expression, compares this value against case values, executes statements after first case with matching value until a \"break\" statement is encountered. 
      - If there is no matching case value, the (optional) default code block is executed 
     - omitting the \"break\" statement, will cause next case to be executed even if the evaluation does not match the case; no \"break\" needed in the last switch block because the switch construct breaks (ends) there 

switch(expression) { 
     case x: 
         // code block 
         break; 
     case y: 
         // code block 
         break; 
      default: 
         // code block 
}",

        "For Loop": "For Loop: loop header parentheses contains, in following order, 3 expressions: i) initialization expression, where set or declare loop variable ii) loop condition expression, boolean expression including loop variable that determines whether loop body executed iii) loop variable update expression executed after loop executed. 

 for (let loopVar = 0; loopVar<= 10; loopVar++ ) { 
      // loop body 
 } 

 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object 

 for (item of myArray) { 
      // loop body 
} 

 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided 

 for (key in obj) { 
      console.log(`${key}: ${object[key]}`) 
 }",

        "While Loop": "While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. 

 let loopVar = 0; 
 while (loopVar < x) { </br/>      // loop body 
      loopVar++; 
 } 

 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations 
</br/> let loopVar = y; </br> do { 
      // loop body 
      loopVar++; 
 } while (loopVar < z);",

        "Error Handling": "\"try ... catch\" statement : code that may throw an error (or multiple errors) when executed is written within the try block, and actions for handling these errors are written within the catch block, which executes only if an error occurs in try block; allows the program to continue running. Error thrown in catch block can be built-in or user-defined using \"throw\" keyword. Optional \"finally\" statement executes code, after try...catch, regardless of result. 

 try { 
     // code block 
     if (condition) {
         throw Error(\"error message\") 
    } 
} 
 catch(errorObj) { 
     // code block to handle Error 
 } 
 finally { 
      // code block to execute regardless of catch...try result 
 }",

        /* OOP */

        "Objects": "Object literal is enclosed with curly braces {}. Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not. Key-value pairs of an object are also referred to as properties 

 const objID = { 
      name: \"John Doe\", 
      age: 40 
 } 

 ",

        "Classes": "Constructor Method is where all instance properties are declared, prepended with \"this\" keyword. Methods in classes do not have any separators between them. New instances are created using the \"new\" keyword. Methods prepended w \"static\" aka static methods are only callable on classes, not on instances. 

 class Animal { 
     constructor(name) { 
         this._name = name; 
         this._behaviour = 0; 
     } 
</br/>     setName(newName) { </br/>         if (typeof newName === \"string\") { </br/>             this._name = newName; </br/>        }</br/>     } 

     static generateName() { 
         const names = ['Winnie', 'Bambi', 'Zoboomafoo', 'Harambe', 'Tony', 'Minnie'] 
         const randomNumber = Math.floor(Math.random()*5); 
         return names[randomNumber];
     } 
} </br></br> const newPet = new Animal(Animal.generateName());",

        "Inheritance": "Child class is created using \"extends\" keyword. A child class constructor calls the parent class constructor using the super() method. </br></br> // Parent class </br> class ConstructionProject { </br>      constructor(info) { </br>         this.buildDate = info.buildDate; </br>         this.name = info.name; } </br> } </br> // Child class 
 class House extends ConstructionProject { </br>     constructor(houseData) { </br>         super(houseData); </br>         this.designer = houseData.designer; } </br> } </br></br> const myHouse = new House({ designer: 'Da Vinci', name: 'Hello World Museum', buildDate: 2023});",

        /* 
        // FE Individ Rsrcs
// Export 
export const toggleHiddenElement = (domElement) => {...} // or 
export {resourceToExportA, resourceToExportB, ...} 
// Import 
import {exportedResourceA, exportedResourceB} from './path/to/module.js' //or, avoiding name collisiong
import {method as uniqueMdName} from 'mdu.js'

// FE Entire Mdu 
// Import 
import importedResources from 'module.js'; // Vr name is Arb; Dropped Curly Braces Shorthand of: import { default as importedResources } from 'module.js';
// Export
// Obj containing Mdu rsrcs must 1st decl'd 
const resources = {
    valueA,
    ...
}
export default resources; // Shorthand verxn of export { resources as default };

// External Rsrc: Using Named and Default Exports at the same time: both will be imported in the same file.
//module.js
var x=2;
const y=4;
function fun() {
   return "This a default export."
}
function square(x) {
  return x * x;
}
export { fun as default, x, y, square };
// Importing, can use any name for fun because it is a default export and curly braces for other named exports. 
import anyname, {x, y, square} from './module.js';
console.log(anyname()); //This is a default export.

// DEFAULT Export INLINE: "useful to export only a single obj, FN, variable, or to have a fallback val for your MDU"
export default function cube(x) {
  return x * x * x;
}
        */
        
        /* Modulaity */ 
