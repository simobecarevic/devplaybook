"Comparison Operators": "=== // Equal value and equal type <br/> == &nbsp;// Equal to (after type conversion if operands are different data types) <br/> !== // Not equal value nor equal type <br/> != &nbsp// Not equal (after type conversion if operands are different data types) <br/> > &nbsp&nbsp// Greater than <br/> < &nbsp&nbsp// Less than <br/> >= &nbsp// Greater than or equal to <br/> <= &nbsp// Less than or equal to", 

        "Logical Operators": "&& // And <br/> || // Or <br/> ! &nbsp// Not",  
        
        "Data Types": "/* Primitive Data Types */ <br/> 1. Number: includes integers, floating-point, or scientific notation (append with \"e\") <br/>&emsp; 15 <br/>&emsp; 4.9 <br/>&emsp; 456e3 // === 456000 <br/> 2. String <br/>&emsp; \"hello world\" <br/> 3. Boolean <br/>&emsp; true <br/>&emsp; false <br/> 4. null: an assigned date type that represents no value. <br/>&emsp; let x = null; <br/> 5. undefined: represents a variable having not yet been assigned a value <br/>&emsp; let y; // y returns undefined <br/> 6. Symbol:  instances of this data type are unique & immutable; often used to add unique property keys to an object <br/>&emsp; let unique_key = Symbol(\"hello world\") <br/> 7. BigInt: used to represent big integer values that are too big to be represented by the Number data type (i.e. 16 digits & over). To create a BigInt, append n to the end of an integer or call BigInt() <br/>&emsp; let x = 1234567890123456789012345n; <br/>&emsp; let y = BigInt(1234567890123456789012345) <br/><br/> /* Compound Data Types */ <br/> 8. Object: key-value pairs of collection of data <br/>&emsp; let obj = {a: \"hello world\", \"key with spaces\": 450}",

        /* Encap & Gen */

        "Assignment, Variables, Scope": "// Assignment operator <br/>&emsp; = <br/> 1. let : block scope, function scope, mutable, not hoisted <br/> &emsp; let x = \"hello world \" <br/> &emsp; let y; <br/> &emsp; y = 400 <br/> 2. const: block scope, function scope, immutable (must be defined on declaration), not hoisted <br/> &emsp; const x = 10; <br/> &emsp; const y = \"can't change this val\" <br/> 3. var : no block scope, function scope, mutable, hoisted <br/> &emsp; var x; <br/> &emsp; var y = 100; <br/> &emsp; y = \"one hundred\"",

        Functions: "1. Regular Function <br/><br/> function functionName (pm1, pm2) { <br/> &emsp; /* function body */ <br/> } <br/><br/> 2. Anonymous Function: A function without a name; typically assigned to a variable or passed as an argument. <br/><br/> function(pm1) { <br/>&emsp; /* function body */ <br/> } <br/> const nameOfFunction = function(pm2) { <br/>&emsp; /* function body */ <br/> } <br/> array.forEach(function(item) {console.log(item)})",

        "Functions Shorthand": "1. Arrow Function shorthand for declaring anonymous functions. <br/><br/> const functionOne = (pm1, pm2) => { <br/> &emsp; /* function body */} <br/><br/> 2. If there is one one parameter, parentheses can be dropped. <br/><br/> const secondFunction = pm1 => { <br/> &emsp; /* function body */<br/>} <br/><br/> 3. If there is only one statement in the function body, curly braces can be dropped. <br/><br/> const logParameter = pm => console.log(pm);",

        /* Control Flow */
    
        "Conditional Statements": "if (condition) { <br/> &emsp; /* code block executed if the condition is true */ <br/> } else { <br/> &emsp; /* code block executed if the condition is false */ <br/> } <br/><br/> // else if : specifies alternate condition if the first condition is false <br/> if (condition) { <br/> &emsp; /* block of code to be executed if the condition is true */ <br/> } else if { <br/> &emsp; /* code block executed if alternate condition is true */ <br/> } else { <br/> &emsp; /* code block executed if all conditions are false */ <br/> }",

        "Matching Conditional": "Switch statement: evaluates an expression, compares this value against case values, executes statements after first case with matching value until a \"break\" statement is encountered. <br/> &emsp; - If there is no matching case value, the (optional) default code block is executed <br/>&emsp; - omitting the \"break\" statement, will cause next case to be executed even if the evaluation does not match the case; no \"break\" needed in the last switch block because the switch construct breaks (ends) there <br/><br/>switch(expression) { <br/>&emsp; case x: <br/>&emsp;&emsp; // code block <br/>&emsp;&emsp; break; <br/>&emsp; case y: <br/>&emsp;&emsp; // code block <br/>&emsp;&emsp; break; <br/> &emsp; default: <br/>&emsp;&emsp; // code block <br/>}",

        "For Loop": "For Loop: loop header parentheses contains, in following order, 3 expressions: i) initialization expression, where set or declare loop variable ii) loop condition expression, boolean expression including loop variable that determines whether loop body executed iii) loop variable update expression executed after loop executed. <br/><br/> for (let loopVar = 0; loopVar<= 10; loopVar++ ) { <br/> &emsp; // loop body <br/> } <br/><br/> 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object <br/><br/> for (item of myArray) { <br/> &emsp; // loop body <br/>} <br/><br/> 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided <br/><br/> for (key in obj) { <br/> &emsp; console.log(`${key}: ${object[key]}`) <br/> }",

        "While Loop": "While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. <br/><br/> let loopVar = 0; <br/> while (loopVar < x) { </br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } <br/><br/> 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations <br/></br/> let loopVar = y; </br> do { <br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } while (loopVar < z);",

        "Error Handling": "\"try ... catch\" statement : code that may throw an error (or multiple errors) when executed is written within the try block, and actions for handling these errors are written within the catch block, which executes only if an error occurs in try block; allows the program to continue running. Error thrown in catch block can be built-in or user-defined using \"throw\" keyword. Optional \"finally\" statement executes code, after try...catch, regardless of result. <br/><br/> try { <br/>&emsp; // code block <br/>&emsp; if (condition) {<br/>&emsp;&emsp; throw Error(\"error message\") <br/>&emsp;} <br/>} <br/> catch(errorObj) { <br/>&emsp; // code block to handle Error <br/> } <br/> finally { <br/> &emsp; // code block to execute regardless of catch...try result <br/> }",

        /* OOP */

        "Objects": "Object literal is enclosed with curly braces {}. Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not. Key-value pairs of an object are also referred to as properties <br/><br/> const objID = { <br/> &emsp; name: \"John Doe\", <br/> &emsp; age: 40 <br/> } <br/><br/> ",

        "Classes": "Constructor Method is where all instance properties are declared, prepended with \"this\" keyword. Methods in classes do not have any separators between them. New instances are created using the \"new\" keyword. Methods prepended w \"static\" aka static methods are only callable on classes, not on instances. <br/><br/> class Animal { <br/>&emsp; constructor(name) { <br/>&emsp;&emsp; this._name = name; <br/>&emsp;&emsp; this._behaviour = 0; <br/>&emsp; } <br/></br/>&emsp; setName(newName) { </br/>&emsp;&emsp; if (typeof newName === \"string\") { </br/>&emsp;&emsp;&emsp; this._name = newName; </br/>&emsp;&emsp;}</br/>&emsp; } <br/><br/>&emsp; static generateName() { <br/>&emsp;&emsp; const names = ['Winnie', 'Bambi', 'Zoboomafoo', 'Harambe', 'Tony', 'Minnie'] <br/>&emsp;&emsp; const randomNumber = Math.floor(Math.random()*5); <br/>&emsp;&emsp; return names[randomNumber];<br/>&emsp; } <br/>} </br></br> const newPet = new Animal(Animal.generateName());",

        "Inheritance": "Child class is created using \"extends\" keyword. A child class constructor calls the parent class constructor using the super() method. </br></br> // Parent class </br> class ConstructionProject { </br> &emsp; constructor(info) { </br>&emsp;&emsp; this.buildDate = info.buildDate; </br>&emsp;&emsp; this.name = info.name; } </br> } </br> // Child class <br/> class House extends ConstructionProject { </br>&emsp; constructor(houseData) { </br>&emsp;&emsp; super(houseData); </br>&emsp;&emsp; this.designer = houseData.designer; } </br> } </br></br> const myHouse = new House({ designer: 'Da Vinci', name: 'Hello World Museum', buildDate: 2023});",

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
