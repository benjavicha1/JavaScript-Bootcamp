/* Facts:
    1) In JavaScript, the 'console' keyword refers to an object = a collection of data and actions.
    2) Keywords are words that are built into the JavaScript language, so the computer will recognize them
        and treats them specially.
    3) ".log()" method is the built-in method or action on the console object. 
    4) The semicolon, ";" denotes the end of the line, or statement. 
    5) In JavaScript, the semicolon is not required but recommended. 
    Related source:     1. https://developer.mozilla.org/en-US/docs/Web/API/Console/log
                        2. https://developer.mozilla.org/en-US/docs/Web/API/console 
*/

// Outputting a single number
    console.log(25); // Output: 25

// Outputting a single object
    var someObject = { str: "Some text", id: 5 };
    console.log(someObject); // Output: { str: 'Some text', id: 5 }

// Outputting multiple objects
    var car = "Volvo";
    console.info("My first car was a", car, ". The object is:", someObject);
    // Output: My first car was a Volvo . The object is: { str: 'Some text', id: 5 }
    // Problem: extra sapce after car is generated

// Using string substitutions
    // object
    console.log('This is my object: %o', { str: "Some text", id: 5 } );

    // string
    console.log('Hi! My name is %s', 'Ben');
    
    // integer
    console.log("My integer: %i", 1.19999);

// To start a timer, call the console.time() method
    console.time("time");

    for (var i=0; i<5; i++) {
        console.log("Hello, %s. You've called me %d times.", "Ben", i+1);
        console.timeLog("time");
      }

// To stop the timer, and to get the elapsed time in milliseconds
    console.timeEnd("time");
