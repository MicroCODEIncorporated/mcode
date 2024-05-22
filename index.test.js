// MicroCODE: define this module's name for  our 'mcode' package
const moduleName = 'index.test.js';
const mcode = require('./index.js');

// test/demo code for mcode-log package...
const errorObject =
{
    message: 'Please enter the correct login details',
    inputError: 'email'
};

const exceptionObject = '{ Exception: "This is an exception, it can be whatever is presented in by the catch clause. }"';

// to test 'logobj()' an Object
const dataObject =
{
    userName: 'John Doe',
    companyName: 'MicroCODE, Inc.',
    author: false,
    age: 23.5,
    birthDate: new Date('1988-08-21'),
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

// INFO Test
describe('mcode.info', () =>
{
    it('mcode.log() should output an *info* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an INFO log event`, moduleName, 'info');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("info")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// WARN Test
describe('mcode.warn', () =>
{
    it('mcode.log() should output an *warn* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an WARNING log event`, moduleName, 'warning');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("warn")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR Test
describe('mcode.error1', () =>
{
    it('mcode.log() should output an *error 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an ERROR log event`, moduleName, 'error');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ optional error message) Test
describe('mcode.error2', () =>
{
    it('mcode.log() should output an *error 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an ERROR log event`, moduleName, 'error', 'ERR=this is the optional error message');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("ERR=this is the optional error message")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ error object) Test
describe('mcode.error3', () =>
{
    it('mcode.log() should output an *error 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an ERROR log object`, moduleName, 'error', errorObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("message: Please enter the correct login details")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DONE Test
describe('mcode.success', () =>
{
    it('mcode.log() should output an *success* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an SUCCESS log event`, moduleName, 'success');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("success")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DEBUG Test
describe('mcode.debug', () =>
{
    it('mcode.log() should output an *debug* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an DEBUG log event`, moduleName, 'debug');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("debug")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// UNKNOWN Test
describe('mcode.unknown', () =>
{
    it('mcode.log() should output an *undefined severity* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an UNKNOWN log event`, moduleName, 'unknown');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("undefined")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});


// EXCEPTION Test
describe('mcode.exception1', () =>
{
    it('mcode.log() should output an *exception 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`This is an EXCEPTION log event`, moduleName, 'exception');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXCEPTION (+ optional exception object) Test
describe('mcode.exception2', () =>
{
    it('mcode.exp() should output an *exception 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.exp(`This is an EXCEPTION logged object`, moduleName, exceptionObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/trace")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("Exception:")]),
                expect.arrayContaining([expect.stringContaining("This is an exception, it can be whatever is presented in by the catch clause.")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXCEPTION (+ optional exception object) Test
describe('mcode.exception3', () =>
{
    it('mcode.exp() should output an *exception 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        try
        {
            throw new Error('This is an an actual EXCEPTION');
        }
        catch (exp)
        {
            mcode.exp(`This is an EXCEPTION 'exp' object`, moduleName, exp);
        }

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/stack")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("Error:")]),
                expect.arrayContaining([expect.stringContaining(" at ")]),
                expect.arrayContaining([expect.stringContaining("This is an EXCEPTION 'exp' object")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// TRACE Test
describe('mcode.trace', () =>
{
    it('mcode.trace() should output an *trace* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.trace(`This is a FUNCTION call trace, mcode.trace(): ${mcode.trace}`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("trace")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});


// INFO Test
describe('mcode.info', () =>
{
    it('mcode.info() should output an *info* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.info(`This is an INFO log event`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("info")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// WARN Test
describe('mcode.warn', () =>
{
    it('mcode.warn() should output an *warn* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.warn(`This is an WARNING log event`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("warn")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR Test
describe('mcode.error1', () =>
{
    it('mcode.error() should output an *error 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`This is an ERROR log event`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ optional error message) Test
describe('mcode.error2', () =>
{
    it('mcode.error() should output an *error 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`This is an ERROR log event`, moduleName, 'ERR=this is the optional error message');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("ERR=this is the optional error message")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ error object) Test
describe('mcode.error3', () =>
{
    it('mcode.error() should output an *error 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`This is an ERROR log object`, moduleName, errorObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("message: Please enter the correct login details")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DONE Test
describe('mcode.success', () =>
{
    it('mcode.done() should output an *success* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.done(`This is an SUCCESS log event`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("success")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DEBUG Test
describe('mcode.debug', () =>
{
    it('mcode.debug() should output an *debug* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.debug(`This is an DEBUG log event`, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("debug")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// LOGOBJ Tests
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *object* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`dataObject`, dataObject, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("OBJECT")]),
                expect.arrayContaining([expect.stringContaining("dataObject:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *function* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`mcode.logobj`, mcode.logobj, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("FUNCTION")]),
                expect.arrayContaining([expect.stringContaining("mcode.logobj:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *json* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`jsonString`, jsonString, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("JSON")]),
                expect.arrayContaining([expect.stringContaining("jsonString:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *string* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`moduleName`, moduleName, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("STRING")]),
                expect.arrayContaining([expect.stringContaining("moduleName:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *array* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`objectArray`, objectArray, moduleName);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("ARRAY")]),
                expect.arrayContaining([expect.stringContaining("objectArray:")]),
                expect.arrayContaining([expect.stringContaining("},")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXPOBJ Tests
describe('mcode.expobj', () =>
{
    it('mcode.expobj() should output an *exception* message with an *object* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        try
        {
            throw new Error('This is an an actual EXCEPTION');
        }
        catch (exp)
        {
            mcode.expobj(`dataObject`, dataObject, moduleName, exp);
        }

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/stack")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("EXCEPTION:")]),
                expect.arrayContaining([expect.stringContaining(" at ")]),
                expect.arrayContaining([expect.stringContaining("dataObject:")]),
                expect.arrayContaining([expect.stringContaining("userName: ")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});