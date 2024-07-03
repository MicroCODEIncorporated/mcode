// MicroCODE: define this module's name for  our 'mcode-log' package
const MODULE_NAME = 'examples.js';
const mcode = require('./index.js');

// test/demo code for mcode-log package...
const errorObject =
{
    message: 'Please enter the correct login details',
    inputError: 'email'
};

const exceptionJson = '{ "message": "This is an exception JSON, it can be whatever is presented in by the log call.",' +
    '"timestamp": "2019-01-01T00:00:00.000Z" }';
const exceptionObject =
{
    message: "This is an exception OBJECT, it can be whatever is presented in by the log call.",
    timestamp: new Date()
};

// to test 'logobj()' an Object
const dataObject =
{
    userName: 'John Doe',
    companyName: 'MicroCODE, Inc.',
    author: false,
    age: 23.5,
    birthDate: new Date('1988-08-21'),
    optionalData: null
};

const objectArray = [
    {name: 'John Doe', company: 'MicroCODE, Inc.', employee: false, age: 23.5, termination: new Date('1988-07-01')},
    {name: 'Jane Doe', company: 'MicroCODE, Inc.', employee: false, age: 21, termination: new Date('1981-01-21')},
    {name: 'Bob Doe', company: 'MicroCODE, Inc.', employee: true, age: 34, termination: ''},
    {name: 'Sam Doe', company: 'MicroCODE, Inc.', employee: false, age: 17.8, termination: new Date('2000-05-07')},
    {name: 'Robert Doe', company: 'MicroCODE, Inc.', employee: false, age: 61, termination: new Date('2010-11-30')},
    {name: 'Suzy Doe', company: 'MicroCODE, Inc.', employee: false, age: 55, termination: new Date('1982-03-22')},
];

// to test logobj() with JSON
const jsonString = '{ "userName": "Jason Smith", "companyName": "GitHub", "author": true, "age": 28.0, "birthDate": "1998-01-11" }';

// version display...
mcode.ready();

// mcode.log() form...
mcode.log(`This is an INFO log event`, MODULE_NAME, 'info');
mcode.log(`This is an WARNING log event`, MODULE_NAME, 'warning');
mcode.log(`This is an ERROR log event`, MODULE_NAME, 'error');
mcode.log(`This is an ERROR log event`, MODULE_NAME, 'error', 'ERR=this is the optional error message');
mcode.log(`This is an ERROR log OBJECT`, MODULE_NAME, 'error', errorObject);
mcode.log(`This is an SUCCESS log event`, MODULE_NAME, 'success');
mcode.log(`This is an DEBUG log event`, MODULE_NAME, 'debug');
mcode.log(`This is an UNKNOWN log event`, MODULE_NAME, 'unknown');

mcode.log(`This is an EXCEPTION 'log' event`, MODULE_NAME, 'exception');
mcode.log(`This is an EXCEPTION 'log' JSON`, MODULE_NAME, 'exception', exceptionJson);
mcode.log(`This is an EXCEPTION 'log' OBJECT`, MODULE_NAME, 'exception', exceptionObject);

mcode.exp(`This is an EXCEPTION 'exp' JSON`, MODULE_NAME, exceptionJson);
mcode.exp(`This is an EXCEPTION 'exp' OBJECT`, MODULE_NAME, exceptionObject);

try
{
    throw new Error('This is an an actual EXCEPTION OBJECT');
}
catch (exp)
{
    mcode.exp(`This is an actual EXCEPTION 'exp' OBJECT`, MODULE_NAME, exp);
}

try
{
    let x = x_undefined;
}
catch (exp)
{
    mcode.exp(`This is an UNDEFINED EXCEPTION 'exp' OBJECT`, MODULE_NAME, exp);
}

// special 'trace' log event for debugging...
mcode.trace(`This is a FUNCTION call trace`, MODULE_NAME);

// mcode.'severity'() short form...
mcode.info(`This is an INFO log event`, MODULE_NAME);
mcode.warn(`This is an WARNING log event`, MODULE_NAME);
mcode.error(`This is an ERROR log event`, MODULE_NAME);
mcode.error(`This is an ERROR log event`, MODULE_NAME, 'ERR=this is the optional error message');
mcode.error(`This is an ERROR log OBJECT`, MODULE_NAME, errorObject);
mcode.done(`This is an SUCCESS log event`, MODULE_NAME);
mcode.debug(`This is an DEBUG log event`, MODULE_NAME);

// Log 'mcode' code as an object in a warning log event...
mcode.info(mcode.trace, MODULE_NAME);

// Log PROCESS_ENV as an object in a warning log event... HUGE, try it and see...
// mcode.trace(process, MODULE_NAME);

// Log 'dataObject' as an object in a warning log event...
mcode.logobj("dataObject", dataObject, MODULE_NAME);
mcode.logobj("MODULE_NAME", MODULE_NAME, MODULE_NAME);
mcode.logobj("mcode.trace", mcode.trace, MODULE_NAME);
mcode.logobj("jsonString", jsonString, MODULE_NAME);
mcode.logobj("objectArray", objectArray, MODULE_NAME);

try
{
    throw new Error('This is an an actual EXCEPTION OBJECT, with a DATA OBJECT attached to it.');
}
catch (exp)
{
    mcode.expobj(`dataObject`, dataObject, MODULE_NAME, exp);
    mcode.expobj(`objectArray`, objectArray, MODULE_NAME, exp);
}
