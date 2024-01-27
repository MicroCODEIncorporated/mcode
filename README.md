# MicroCODE's 'mcode' package
A public NPM Package of our internal logging tools for Frontend and Backend JavaScript NodeJS projects.

This is extremely an 'light weight' package with *zero dependencies*.

Identical logging on both...

* **Frontend** - logging into Browser Console
* **Backend** - logging into the Server Console


## Description

This is our internal logging code. It replaces the use of "console.log()" with "mcode.log()"
and "console.error()" with "mcode.exp()".

* **mcode.log()** - provides an ultra-consistent function for logging events into any console, with severity.
* **mcode.exp()** - provides an ultra-consistent function for logging exceptions (with a stack dump) into any console.
* ...and supporting / related functions, see table further on.


## Dependencies

* NO DIRECT DEPENDENCIES.
* Node.JS - standard environment
* JSDocs - our preferred JavaScript documentation system


## mcode.log() vs. console.log()

Why did we write this package? We were unhappy with the limitations of console.log() and the lack of a common
way to log events with:

1) timestamps,
2) source code origin, and
3) standardized severity marking.
4) We also wanted our app events to stand out, and not to get confused with events coming out of other packages into a console.
5) We wanted to use our own Object parsing / display to control what is shown from within teh Object...
* **mcode.log()** shows a pure data view of an object, parsing the methods and functions out of the view.
* **console.log()** shows a complex object filled with all methods, prototypes, and data mixed, and it must be 'drilled' to get to the data of interest while debugging.


<p align="left"><img src=".\.github\images\mcode-log-object.png" width="720" title="Complex Objects..."></p>

* An example of important object state information hidden by **console.log()**...

<p align="left"><img src=".\.github\images\console-log-complex.png" width="720" title="CONSOLE Object..."></p>

* The same object state information revealed by **mcode.log()**...

<p align="left"><img src=".\.github\images\mcode-log-complex1.png" width="720" title="MCODE Object 1..."></p>

<p align="left"><img src=".\.github\images\mcode-log-complex2.png" width="720" title="MCODE Object 2..."></p>


### Log Event Severities

This is an example of each **mcode.log()** and **mcode.exp()** event severity supported by the package...

* JavaScript calls...

<p align="left"><img src=".\.github\images\mcode-log-calls.png" width="720" title="Call examples..."></p>

* Example of the differing severities in the console output...

<p align="left"><img src=".\.github\images\mcode-log-severity.png" width="720" title="Event Severities..."></p>

* Example of typical app logging...

<p align="left"><img src=".\.github\images\mcode-log-examples.png" width="720" title="Differentiating Modules..."></p>


## Development

* When using mcode.log() for temporary output during development use a severity of 'debug'.
* These messages can be left in the code for future reference.
* These 'debug' messages are not logged in production mode.

### Installing

* Use "npm install" to load all recreated dependencies
```
npm install mcode
```

### Examples

* View of mcode.log() in a Browser...

<p align="left"><img src=".\.github\images\mcode-log-frontend.png" width="720" title="Frontend logging..."></p>

* View of mcode.log() in a Server...

<p align="left"><img src=".\.github\images\mcode-log-backend.png" width="720" title="Backend logging..."></p>

* View of mcode.exp() in a Server...

<p align="left"><img src=".\.github\images\mcode-exp-trace.png" width="720" title="Backend exception..."></p>


### Debugging Example

If you'd like see the values of any parameter--and the call stack that got you to a specific function--you
can place an 'exception' log statement on entry and you'll get the display shown below...

* Code import 'mcode' and define 'moduleName'...
* We recommend the 'moduleName' define is placed at the beginning of every file for use in mcode.log() and mcode.exp().
* This allows the module to continue to log source code origin even after 'webpack' processing.

<p align="left"><img src=".\.github\images\mcode-exp-debug0.png" width="720" title="Code to see params/call..."></p>

* Code to log parameters and call stack before the actual exception...

<p align="left"><img src=".\.github\images\mcode-exp-debug1.png" width="720" title="Code to see params/call..."></p>

* View of mcode.exp() in the console, and the handled exception (in a higher module) of the thrown exception.
* **Note**: The actual call stack if lost in the 'Higher Order Function' that is catching exception by default
        but it is present if the 'preemptive' logging for debug in the local function...

<p align="left"><img src=".\.github\images\mcode-exp-debug2.png" width="720" title="Params/Call Stack..."></p>


### Throwing 'Error' object and logging support...

The **mcode.exp()** function recognizes and logs the standard 'Error Object' created and thrown to a base condition handler.

<p align="left"><img src=".\.github\images\mcode-exp-throw1.png" width="720" title="Throw Error logging..."></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw2.png" width="720" title="Throw Error logging..."></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw3.png" width="720" title="Throw Error logging..."></p>


## Included Functions

These are the functions we want at the ready in any module for development and debug.

| Function	         | Description                                                 | Usage                     |
|--------------------|-------------------------------------------------------------|---------------------------|
| **vt**             | The definition of standard VT52,100,200 display codes       | mcode.vt.dim, mcode.vt.bright, mcode.vt.fg.red, mcode.vt.bg.white, etc.
| **log**            | Logs a standardized message into the console with objects   | mcode.log('message' or object, 'module name', 'severity')
| **exp**            | Logs a standardized exception with a collapsible stack dump | mcode.exp('message' or object, 'module name', 'exp text')
| **logify**         | Converts a message or JSON into text appropriate for log    | mcode.logify('object or JSON string')
| **simplify**       | Strips a string of BRACES, BRACKETS, QUOTES, etc.           | mcode.simplify('object or JSON string')
| **logifyObject**   | Converts a message or JSON into text appropriate for log    | mcode.logifyObject('object')
| **simplifyObject** | Object to string less BRACES, BRACKETS, QUOTES, etc.        | mcode.simplifyObject('object')
| **listifyArray**   | Converts an array of text items into a HTML or JSX List.    | mcode.listifyArray(array, 'html' or 'jsx');
| **extractId**      | Extracts the first alpha-numberic ID Field from a string.   | mcode.extractId("EP_**GPT13TZ1**_20231115_0800.L5K")
| **isString**       | Checks the type of an Object for String.                    | mcode.isString('stringToTest')
| **isObject**       | Checks the type of an Object for Object.                    | mcode.isObject(objectName)
| **isNumber**       | Checks the type of an Object for Number.                    | mcode.isNumber(102022 or numberName)
| **isJson**         | Checks the type of an Object for JSON.                      | mcode.isJson('JSON text' or objectName)
| **timeStamp**      | Returns - YYYY-MM-DD Day HH:MM:SS.mmm UTC                   | mcode.timeStamp() --> 2024-01-22 Mon 15:23:42.790 UTC


### Documentation

* This entire project is documented with JSDocs

* To install JSDocs use...
```
npm install -g jsdoc
```
* Configure JSDoc processing in...
```
.jsdoc.conf.json
```
* To regenerate the JSDocs from all source code use (from project root directory)...
```
jsdoc -c .jsdoc.conf.json
```

## Help

Contact Timothy McGuire, tmcguire@mcode.com.


## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  **NPM**	        | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  **NVM**	        | Node Version Manager, a tool that support changing NodeJS versions.
|  **MERN**         | MongoDB, Express, React, Node JS.
|  **MongoDB**      | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.
|  **Express**      | Express is *not* a database but rather an ‘extensible routing language’ for communication between a Client and a Server.
|  **React**        | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.
|  **Node JS**      | A development stack that executes from a local file store—on a local Server—instead of from a network of |  **JSDocs**           | A toolset to automatically generate API-style documentation from source tagging.


## Authors

Contributors names and contact info...

* Timothy J McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire)


## Version History

* 0.0.7
    * Changed the [mcode] identification in the left margin to dim cyan--like the data labels--to focus on App content, not the package.
* 0.0.6
    * in mcode.exp() recognize 'Error()' objects and log appropriately.
* 0.0.5
    * Reset terminal VT video after an Exception.
* 0.0.4
    * Exception formatting and simplification.
* 0.0.3
    * Icon and colors adjustments
* 0.0.2
    * Updates after testing and documentating README.
* 0.0.1
    * Initial movement of our internal code into an NPM package for ease of use in other projects.

## Future Development

* 0.0.*
    * Any additional core code we development for general JavaScript MERN coding, debug, and support.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
