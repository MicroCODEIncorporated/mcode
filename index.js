// #region  F I L E
// <copyright file="mcode/index.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  M O D U L E

// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Shared Function Library
 *      Module:   modules (node_modules/mcode/index.js)
 *      Project:  MicroCODE MERN Applications
 *      Customer: Internal+MIT xPRO Course
 *      Creator:  MicroCODE Incorporated
 *      Date:     January 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022-2024 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript Client/Front-End functions.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *      2. CHALK for colorizing Console message easily and explicitly.
 *         https://www.npmjs.com/package/chalk
 *
 *
 *      VIDEOS:
 *      -------
 *
 *      1.  List of ANSI Color Escape Sequences
 *          https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
 *
 *      2.  Showing Line Numbers in console.log from Node.js
 *          https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
 *
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:    Description:
 *
 *  27-Jan-2022   TJM-MCODE  {0001}   New module for common reusable Javascript UI/Client functions.
 *  05-Mar-2022   TJM-MCODE  {0002}   Documentation updates.
 *  04-May-0222   TJM-MCODE  {0003}   Corrected 'month' in timeStamp.
 *  03-Oct-2022   TJM-MCODE  {0004}   Added 'log()' to simplify console logging of app events.
 *  03-Oct-2022   TJM-MCODE  {0005}   Added use of 'vt' for colorizing Console Log entries.
 *  16-Oct-2022   TJM-MCODE  {0006}   Added 'success' as a severity.
 *  30-Oct-2023   TJM-MCODE  {0007}   Updated to TypeScript.
 *  03-Dec-2023   TJM-MCODE  {0008}   Don't log 'debug' messages in staging or production mode.
 *  21-Jan-2024   TJM-MCODE  {0009}   Converted to a single ES6 Module (ESM) for use in both
 *                                    Frontedm/Client and Backend/Server as a NodeJS package.
 *
 *
 *
 */

// #endregion

// #region  I M P O R T S

// #endregion

// #region  T Y P E S

// #endregion

// #region  I N T E R F A C E S

// #endregion

// #region  C O N S T A N T S
// #region  F U N C T I O N S – P U B L I C

// @ts-ignore TS6133 - standard module definition for 'debug' logging
const moduleName = 'mcode';

const mcode = {

    /**
     * @const vt
     * @memberof mcode
     * @desc Colors constants for changing Console appearance ala DEC's VT52 + VT100 + VT220.
     * @example
        ANSI Color Escape Sequence

        \x1b[***m  -- where '***' is a series of command codes separated by semi-colons (;).

        Code	Effect -- notes
        ------------------------------------------------------------------------------
        0	    Reset / Normal -- all attributes off
        1	    Bold -- increased intensity
        2	    Faint -- decreased intensity - not widely supported
        3	    Italic -- not widely supported, sometimes treated as inverse
        4	    Underline
        5	    Slow Blink -- less than 150 per minute
        6	    Rapid Blink -- MS-DOS ANSI.SYS; 150+ per minute; not widely supported
        7	    Reverse video -- swap foreground and background colors
        8	    Conceal -- not widely supported.
        9	    Crossed-out -- characters legible, but marked for deletion. Not widely supported
        10	    Primary font (default)
        11–19	Alternate font -- select alternate font n-10
        20	    Fraktur -- hardly ever supported
        21	    Bold off or Double Underline -- bold off not widely supported; double underline hardly ever supported
        22	    Normal color or intensity -- neither bold nor faint
        23	    Not italic, not Fraktur
        24	    Underline roundOff -- not singly or doubly underlined
        25	    Blink off
        27	    Inverse off
        28	    Reveal	conceal off
        29	    Not crossed out
        30–37	Set foreground color -- see color table below
        38	    Set foreground color -- next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
        39	    Default foreground color -- implementation defined (according to standard)
        40–47   Set background color -- see color table below
        48	    Set background color -- next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
        49	    Default background color -- implementation defined (according to standard)
        51	    Framed
        52	    Encircled
        53	    Overlined
        54	    Not framed or encircled
        55	    Not overlined
        60	    ideogram underline -- hardly ever supported
        61	    ideogram double underline -- hardly ever supported
        62	    ideogram overline -- hardly ever supported
        63	    ideogram double overline -- hardly ever supported
        64	    ideogram stress marking	hardly ever supported
        65	    ideogram attributes off	reset the effects of all of 60-64
        90–97	Set bright foreground color	aixterm (not in standard)
        100–107	Set bright background color	aixterm (not in standard)
     *
     */
    vt:
    {
        // special effects
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",

        // foreground color
        fg: {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",
        },

        // background color
        bg: {
            black: "\x1b[40m",
            red: "\x1b[41m",
            green: "\x1b[42m",
            yellow: "\x1b[43m",
            blue: "\x1b[44m",
            magenta: "\x1b[45m",
            cyan: "\x1b[46m",
            white: "\x1b[47m",
        },

        // Extended 256-Color codes
        gray: "\x1b[90m",

        /* - colors on WHITE background, i.e.: for 'Light Mode' Console
            // custom event colors
            errr: "\x1b[31m",  // red
            good: "\x1b[32m",  // green
            warn: "\x1b[33m",  // yellow
            cold: "\x1b[34m",  // blue
            dead: "\x1b[35m",  // magenta
            info: "\x1b[36m",  // cyan
            hmmm: "\x1b[37m",  // white
            dbug: "\x1b[35m",  // Bright Magenta
        */
        // - colors on BLACK background, i.e.: for 'Dark Mode' Console
        // custom event colors
        errr: "\x1b[91m",  // red
        good: "\x1b[92m",  // green
        warn: "\x1b[93m",  // yellow
        cold: "\x1b[94m",  // blue
        dead: "\x1b[95m",  // magenta
        info: "\x1b[96m",  // cyan
        hmmm: "\x1b[97m",  // white
        dbug: "\x1b[95m",  // Bright Magenta

        // custom JSON colors
        key: "\x1b[96m",  // cyan - key name
        value: "\x1b[95m",  // magenta - number, boolean, null
        string: "\x1b[94m",  // blue - special value
    },

    /**
     * @func log
     * @memberof mcode
     * @desc Logs App Events to the Console in a standardized format.
     * @api public
     * @param {object} message pre-formatted message to be logged.
     * @param {string} source where the message orginated.
     * @param {string} severity Event.Severity: 'info', 'warn', 'error', 'exception', and 'success'.
     * @param {string} error [Optional] error message from another source.
     * @returns {string} "{severiy}: {message}" for display in UI.
     *
     * @example
     * From our other MicroCODE Apps:
     ++
       Message: 'Station SYNCHRONIZED to new Job from TRACKING IMAGE'

           Class: JobIdZone                                  Audience: Operator
          Object: 8                                         Condition: Takt=[0%]  Memory in use=[1,659,216.00]
           Event: 14                                         Severity: Confirmation
         Targets: AppLog, AppBanner, AppDatabase, AppSound

           Event: (see 'Message:' above)                      Time: Tuesday, August 10, 2021 06:57:47.623 AM
           Class: MicroCODE.AppBanner                         Type: App.Information                              CSN:[1GA4174210 ]
    --
     */
    log: function (message, source, severity, error = null)
    {
        let vt = mcode.vt;

        let status = `${severity}: ${message}`;

        // do not log 'debug' messages in staging or production mode - {0010}
        if ((severity === 'debug') && (process.env.NODE_ENV !== 'development'))
        {
            return status;
        }

        let entry = "";

        let logifiedMessage = "";

        if (mcode.isObject(message))
        {
            logifiedMessage = "\n" + mcode.logify(mcode.logifyObject(message));
        }
        else if (mcode.isJson(message))
        {
            logifiedMessage = "\n" + mcode.logify(message);
        }
        else
        {
            logifiedMessage = message;
        }

        const moduleName = source.split('.')[0].toUpperCase();

        entry += (vt.reset + vt.dim + '++\n');

        let sevColor = vt.reset;
        let sevText = severity;

        switch (severity)
        {
            case 'i':
            case 'info':
                sevText = 'info';
                sevColor += vt.info;
                entry += `${vt.info} i ｢mcode｣: 📰 [${moduleName}] '${logifiedMessage}'`;
                break;
            case 'w':
            case 'warn':
                sevText = 'warn';
                sevColor += vt.warn;
                entry += `${vt.warn} ⚠ ｢mcode｣: ⚠️ [${moduleName}] '${logifiedMessage}'`;
                break;
            case 'e':
            case 'error':
                sevText = 'error';
                sevColor += vt.errr;
                entry += `${vt.errr} ✖ ｢mcode｣: ⛔ [${moduleName}] '${logifiedMessage}'`;
                break;
            case 'x':
            case 'exception':
                sevText = 'exception';
                sevColor += vt.dead;
                entry += `${vt.dead} * ｢mcode｣: ☠️ [${moduleName}] '${logifiedMessage}'`;
                break;
            case 's':
            case 'success':
                sevText = 'success';
                sevColor += vt.good;
                entry += `${vt.good} ✓ ｢mcode｣: ✅ [${moduleName}] '${logifiedMessage}'`;
                break;
            case 'd':
            case 'debug':
                sevText = 'debug';
                sevColor += vt.dbug;
                entry += `${vt.dbug} µ ｢mcode｣: 🔍 [${moduleName}] '${logifiedMessage}'`;
                break;
            case '?':
            default:
                sevText = 'hmmmmm';
                sevColor += vt.hmmm;
                entry += `${vt.hmmm} ❔ ｢mcode｣: 🤔 [${moduleName}] '${logifiedMessage}'`;
                break;
        }
        entry += '\n';

        if (error)
        {
            entry += `${vt.dim}     error: ${error}\n`;
            status += ` ERROR: ${error}`;
        }

        entry +=
            `${vt.reset}${vt.dim}      time: ${vt.reset}${mcode.timeStamp()}` +
            `${vt.reset}${vt.dim}      from: ${vt.reset}${source}` +
            `${vt.reset}${vt.dim}  severity: ${sevColor}${sevText}\n` +
            `${vt.reset}${vt.dim}--${vt.reset}`;

        console.log(entry);

        return status;  // for caller to use as needed
    },

    /**
     * @func exp
     * @memberof mcode
     * @desc Exceptions to the Console in a standardized format.
     * @api public
     * @param {object} message pre-formatted message to be logged.
     * @param {string} source where the message orginated.
     * @param {string} exception the underlying exception message that was caught.
     * @returns {string} "message: {message} - exception: {exception}" for display in UI.
     *
     */
    exp: function (message, source, exception)
    {
        let vt = mcode.vt;

        let entry = "";
        let logifiedMessage = "";

        if (mcode.isObject(message))
        {
            logifiedMessage = "\n" + mcode.logify(mcode.logifyObject(message));
        }
        else if (mcode.isJson(message))
        {
            logifiedMessage = "\n" + mcode.logify(message);
        }
        else
        {
            logifiedMessage = message;
        }

        const moduleName = source.split('.')[0].toUpperCase();

        // Exceptions are always logged as 'Fatal' -- NOTE: do not use 'collapsed' for Server Log
        entry +=
            `${vt.reset}${vt.dim}++\n` +
            `${vt.reset}${vt.dead} * ｢mcode｣: ☠️ [${moduleName}] '${logifiedMessage}'\n` +
            `${vt.reset}${vt.dead} exception: ${vt.dead}${exception}${vt.reset}\n` +
            `${vt.reset}${vt.dim}      time: ${vt.reset}${mcode.timeStamp()}` +
            `${vt.reset}${vt.dim}      from: ${vt.reset}${source}` +
            `${vt.reset}${vt.dim}  severity: ${vt.dead}exception${vt.dead}`;

        console.log(entry);
        console.trace(`${vt.dead} Call Stack`);
        console.log(`${vt.dim}--`);

        return `${message} ${exception}`;  // for caller to return
    },

    /**
     * @func simplify
     * @memberof mcode
     * @desc Strips a string of BRACES, BRACKETS, QUOTES, etc.
     * @api public
     * @param {object} object the string to be simplified to data
     * @returns {string} the simplified text
     */
    simplify: function (object)
    {
        if (mcode.isObject(object))
        {
            // do not use JSON.stringify(object, null, 4) -- it's output is horrible, use our own
            object = JSON.stringify(objectToSimplify);
        }

        let simplifiedText = "";
        let inValue = false;

        for (let i = 0; i < object.length; i++)
        {
            switch (object[i])
            {
                case '{':
                case '}':
                case '[':
                case ']':
                    inValue = false;
                    break;
                case '"':
                    break;
                case ':':
                    simplifiedText += object[i];
                    if (!inValue)
                    {
                        simplifiedText += ' ';
                    }
                    inValue = true;
                    break;
                case ',':
                    simplifiedText += object[i];
                    simplifiedText += ' ';
                    inValue = false;
                    break;
                default:
                    simplifiedText += object[i];
                    break;
            }
        }

        return simplifiedText;
    },

    /**
     * @func simplifyObject
     * @memberof mcode
     * @desc Strips an object of BRACES, BRACKETS, QUOTES, etc.
     * @api public
     * @param {object} objectToSimplify the object to be formatted for the event log
     * @returns {string} the simplified object
     */
    simplifyObject: function (objectToSimplify)
    {
        // do not use JSON.stringify(object, null, 4) -- it's output is horrible, use our own
        return mcode.simplify(JSON.stringify(objectToSimplify));
    },

    /**
     * @func logify
     * @memberof mcode
     * @desc Formats a string of BRACES, BRACKETS, QUOTES, for display in the EVENT LOG.
     * No formatting occurs until the opening brace '{' of the JSON Data.
     * @api public
     * @param {string} textToLogify the string to be formatted for the event log
     * @returns {string} the logified text
     */
    logify: function (textToLogify)
    {
        let inJson = false;  // start formatting when we hit the first '{'
        let inValue = false;  // handle 'true, false, null, or number' as-is
        let inString = false;  // handle "quoted strings" as-is
        let inLiteral = false;  // take internal text as-is

        let logifiedText = '';  // the text we build
        let tabStop = 0;  // indent level for formatting
        let lineEmpty = true;  // controls indent() output

        // helper function to remove surrounding " " from key names only.
        let keyPairs = (jsonString) =>
        {
            // loop backward through the string, building a new copy, remove " " from key names
            let newString = '';
            let inKey = false;
            let inKeyName = false;
            let inString = false;
            let c = '';

            for (let i = jsonString.length - 1; i >= 0; i--)
            {
                c = jsonString[i];

                if (inString)
                {
                    if (c === '"')
                    {
                        inString = false;
                        newString = c + newString;
                        continue;
                    }
                    newString = c + newString;
                    continue;
                }
                if (inKeyName)
                {
                    if (c === '"')
                    {
                        inKeyName = false;
                        inKey = false;
                        continue;
                    }
                    else
                    {
                        newString = c + newString;
                        continue;
                    }
                }
                if (inKey)
                {
                    if (c === '"')
                    {
                        inKeyName = true;
                        continue;
                    }
                    else
                    {
                        newString = c + newString;
                        continue;
                    }
                }
                if (c === '"')
                {
                    newString = c + newString;
                    inString = true;
                    continue;
                }
                if (c === ':')
                {
                    inKey = true;
                }
                newString = c + newString;
            }

            return newString;
        };

        // helper function to indent the JSON
        let indent = () =>
        {
            let newline = '';
            if (!lineEmpty)
            {
                newline += '\n';
                for (let index = 0; index < tabStop; index++)
                {
                    newline += '    ';  // 4-space tab-stop
                }
                lineEmpty = true;
            }
            return newline;
        };

        // helper function to check for alpha-numeric characters
        let isKeyChar = (c) =>
        {
            return (c === '_') || (c === '$') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
        };

        // process the JSON string...
        textToLogify = keyPairs(textToLogify);

        let c = '';  // current char

        for (let i = 0; i < textToLogify.length; i++)
        {
            c = textToLogify[i];

            if (textToLogify.substring(i, i + 2) === '\\n')
            {
                logifiedText += '' + indent();
                lineEmpty = false;
                i++; // skip the 'n'
                continue;
            }

            if (inLiteral)
            {
                logifiedText += c;
                if (c === '}')
                {
                    inLiteral = false;
                }
                continue;
            }

            if (textToLogify.substring(i, i + 2) === '${')
            {
                inLiteral = true;
                logifiedText += c;
                continue;
            }

            if (!inJson && c === '{')
            {
                inJson = true;
                --i;  // reprocess '{' as JSON
                continue;
            }

            if (inValue)
            {
                if (!isKeyChar(c))
                {
                    inValue = false;
                    --i;  // reprocess non-alpha-numeric character outside of 'value'
                }
                else
                {
                    logifiedText += c;
                }
                continue;
            }

            if (inString)
            {
                if (c === '"')
                {
                    inString = false;
                    c = '\'' + `${mcode.vt.reset}`;
                }
                logifiedText += c;
                continue;
            }

            if (!inJson)
            {
                logifiedText += c;
                lineEmpty = false;
                continue;
            }

            switch (c)
            {
                case '{':
                    logifiedText += indent() + '{';
                    lineEmpty = false;
                    tabStop++;
                    logifiedText += '' + indent();
                    break;
                case '[':
                    logifiedText += indent() + '[';
                    lineEmpty = false;
                    tabStop++;
                    logifiedText += '' + indent();
                    break;
                case '}':
                    tabStop--;
                    logifiedText += indent() + '}';
                    lineEmpty = false;
                    inJson = tabStop > 0;
                    break;
                case ']':
                    tabStop--;
                    logifiedText += indent() + ']';
                    lineEmpty = false;
                    break;
                case ',':
                    logifiedText += `${mcode.vt.reset}` + ',' + indent();
                    lineEmpty = false;
                    break;
                case ':':
                    logifiedText += ': ' + `${mcode.vt.value}`;
                    lineEmpty = false;
                    break;
                case '"':
                    logifiedText += `${mcode.vt.string}`;
                    logifiedText += '\'';
                    lineEmpty = false;
                    inString = !inString;
                    break;
                case ' ':
                    lineEmpty = false;
                    break;
                default:
                    if (isKeyChar(c))
                    {
                        inValue = true;  // true, false, null, or number
                        logifiedText += c;
                        lineEmpty = false;
                    }
                    break;
            }
        }

        return logifiedText;
    },

    /**
     * @func logifyObject
     * @memberof mcode
     * @desc Converts a JSON Object into loggable text, like JSON.stringify() but with more control.
     * @api public
     * @param {object} objectToLogify
     * @returns {string} the logified object
     */
    logifyObject: function (objectToLogify, parentObjects = [''])
    {
        // Helper function to check for and handle circular references
        const isCyclic = (member) =>
        {
            if (parentObjects.includes(member))
            {
                return '"<self-reference>"';  // 'true'
            }
            return false;
        };

        // Helper function to handle non-object types
        const handleNonObject = (value) =>
        {
            if (typeof value === 'string')
            {
                // detect JSON objects that have been escaped and convert them back to JSON
                if (value.startsWith(`{`)
                    && value.endsWith(`}`))
                {
                    // convert to JSON representation
                    return value.replace('\\"', '"');
                }
                else
                {
                    return `"${value}"`;
                }
            }
            if (typeof value === 'function')
            {
                return `"ƒ ${value.name}"`;
            }
            if (typeof value === 'symbol')
            {
                return '"<symbol>"';
            }
            if (typeof value === 'undefined')
            {
                return '"<undefined>"';
            }
            if (typeof value === 'bigint')
            {
                return value.toString();
            }
            return String(value);
        };

        // helper function to recursively stringify an object
        const recursiveStringify = (currentObject) =>
        {
            // Handle non-object types
            if (typeof currentObject !== 'object'
                || currentObject === null)
            {
                return handleNonObject(currentObject);
            }

            // special case for File objects which cannot be completely stringified
            if (currentObject instanceof File)
            {
                let file = currentObject;
                const date = new Date(file.lastModified);

                // change File to a simple object
                currentObject = {
                    name: file.name,
                    size: file.size,
                    date: date.toString()
                };
            }

            // Detect and handle circular references
            let cyclicCheck = isCyclic(currentObject);
            if (cyclicCheck)
            {
                return cyclicCheck;
            }

            // Keep track of parent objects to detect circular references
            parentObjects.push(currentObject);

            let result;
            if (Array.isArray(currentObject))
            {
                result = currentObject.map((item) => recursiveStringify(item)).join(",");
                parentObjects.pop();
                return `[${result}]`;
            }

            else
            {
                result = Object.keys(currentObject).map((key) =>
                {
                    let value = currentObject[key];

                    // Skip functions, symbols, and undefined properties
                    if (typeof value === 'function'
                        || typeof value === 'symbol'
                        || typeof value === 'undefined')
                    {
                        return `"${key}":${handleNonObject(value)}`;
                    }

                    return `"${key}":${recursiveStringify(value)}`;

                }).filter(Boolean).join(",");

                parentObjects.pop();
                return `{${result}}`;
            }
        };

        // stringify the object, recursively
        return recursiveStringify(objectToLogify);
    },

    /**
     * @func listifyArray
     * @memberof mcode
     * @desc Converts an array of text items into a HTML or JSX List.
     * @api public
     * @param {Array<any>} arrayToListify the array to be convert to a HTML List.
     * @param {string} outputType how to out the list: 'html' or 'jsx'.
     * @returns {string} the HTML List code.
     */
    listifyArray: function (arrayToListify, outputType = 'html')
    {
        let listifiedText = "";
        var keyIndex = 0;

        if (outputType === 'jsx')
        {
            listifiedText += '<ul className="list-group">';

            arrayToListify.forEach(element =>
            {
                // convert array element to text, simplify for display, and add to LIST...
                listifiedText += `<li className="list-group-item" key="${keyIndex++}">${mcode.simplifyObject(element)}</li>`;
            });

            listifiedText += '</ul>';
        }
        else
        {
            arrayToListify.forEach(element =>
            {
                // convert array element to text, simplify for display, and add to LIST...
                listifiedText += `<li class="list-group-item" key="${keyIndex++}">${mcode.simplifyObject(element)}</li>`;
            });
        }

        return listifiedText;
    },

    /**
     * @func extractId
     * @memberof mcode
     * @desc Extracts an alpha-numberic ID Field from a string, intended to be a unique portion of a common string.
     * @param {string} objectName typically a file name, but can be any string, to extract an ID Field from.
     * @returns {string} the extracted ID Field.
     *
     *  Rules for extracting the ID Field:
     *  ----------------------------------
     *  1. The ID Field is assumed to be the first alpha-numeric field in the string.
     *  2. The ID Field is assumed to be Letters + Numbers, with no spaces or special characters.
     *  3. The ID Field is assumed to be either at the beginning or end of the string, or separated by non-alpha-numeric characters.
     *  4. The ID Field cound have lowercase 'placeholders' for numbers, like 'PxCy' or 'PnCn' for 'P1C2'.
     *
     * @example
     *
     * const str1 = "CG_BRKE01_20231116.L5K";
     * const str2 = "CG_BRKE03_20231116.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "BRKE01"
     * console.log(extractIdField(str2)); // Expected output: "BRKE03"
     *
     * const str1 = "EP_GPT13TZ1_20231115_0800.L5K";
     * const str2 = "EP_GPT13TZ2_20231113_1600.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "GPT13TZ1"
     * console.log(extractIdField(str2)); // Expected output: "GPT13TZ2"
     *
     * const str1 = "SEP_P1C2_GMP_ARL.L5K";
     * const str2 = "SEP_P3C0_GMP_ARL.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "P1C2"
     * console.log(extractIdField(str2)); // Expected output: "P3C0"
     *
     * const str1 = "SEP_P1C2_GMP_ARL.L5K";
     * const str2 = "SEP_PxCy_GMP.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "P1C2"
     * console.log(extractIdField(str2)); // Expected output: "PxCy"
     *
     */
    extractId: function (objectName)
    {
        let idField = '';
        let inAlphaNumeric = false;
        let isLetter = false;
        let isLowerL = false;
        let isNumber = false;
        let hasLetters = false;
        let hasNumbers = false;
        let si = 0;

        // helper function to check for upper case letter
        const isUpper = (objectName, i) =>
        {
            // if 'i' is outside 'objectName' return false
            if (i < 0 || i >= objectName.length)
            {
                return false;
            }
            return (objectName[i] >= 'A' && objectName[i] <= 'Z');
        };

        // scan the string for the first alpha-numeric field
        for (let i = 0; i < objectName.length; i++)
        {
            isNumber = (objectName[i] >= '0' && objectName[i] <= '9');
            isLetter = (objectName[i] >= 'A' && objectName[i] <= 'Z');
            isLowerL = (objectName[i] >= 'a' && objectName[i] <= 'z');

            if (isNumber || isLetter || isLowerL)
            {
                if (!inAlphaNumeric)
                {
                    inAlphaNumeric = true;
                    si = i;
                }
                idField += objectName[i];
                hasLetters = hasLetters || isLetter || isLowerL;
                hasNumbers = hasNumbers || isNumber;

                // Check for 'lower case numeric placeholder' like 'PxCy' or 'PnCn' for 'P1C2'
                if (isUpper(objectName, i - 1) && isUpper(objectName, i + 1) && isLowerL)
                {
                    hasNumbers = true;  // treat the single lower case letter between upper case letters as a number placeholder
                }
            }
            else
            {
                // hit non Alpha-Numeric character
                if (inAlphaNumeric && hasLetters && hasNumbers)
                {
                    idField = objectName.substring(si, i);
                    break;  // we have the field we want, exit to return it
                }
                else
                {
                    // current field does not meet criteria, reset and continue
                    si = 0;
                    idField = '';
                    inAlphaNumeric = false;
                    hasLetters = false;
                    hasNumbers = false;
                }
            }
        }

        return idField || '';
    },

    /**
     * @func isString
     * @memberof mcode
     * @desc Checks the type of an Object for String.
     * @api public
     * @param {object} object to be tested
     * @returns {boolean} a value indicating whether or not the object is a string
     */
    isString: function (object)
    {
        return Object.prototype.toString.call(object) === '[object String]';
    },

    /**
     * @method isObject
     * @memberof mcode
     * @desc Checks whether or not a string is a JS Object.
     * @api public
     * @param {object} jsObject string to be tested
     * @returns {boolean} a value indicating whether or not the string is a JS Object.
     */
    isObject: function (jsObject)
    {
        return typeof jsObject === 'object' && jsObject !== null && !Array.isArray(jsObject) && typeof jsObject !== 'function';
    },

    /**
     * @func isNumber
     * @memberof mcode
     * @desc Checks for NaN.
     * @api public
     * @param {any} numberToCheck as a number of some type
     * @returns {boolean} a value indicating whether or not it is NaN.
     */
    isNumber: function (numberToCheck)
    {
        // NOTE: this compare will fail for NaN
        // eslint-disable-next-line no-self-compare
        return (numberToCheck === numberToCheck);
    },

    /**
     * @func isJson
     * @memberof mcode
     * @desc Checks a string for embedded JSON data.
     * @api public
     * @param {object} object string to be tested
     * @returns {boolean} a value indicating whether or not the object contains a JSON string
     */
    isJson: function (object)
    {
        try
        {
            if (typeof object !== 'string')
            {
                return false;
            }

            if ((object).includes('{'))
            {
                return true;  // treat as JSON -- JSON.parse() is overkill here
            }
            else
            {
                return false; // *not* JSON
            }
        }
        catch
        {
            return false;  // *not* JSON and not parsable
        }
    },

    /**
     * @func timestamp
     * @memberof mcode
     * @desc Generates timestamp string: YYYY-MM-DD HH:MM:SS.mmm.
     * @api public
     * @returns {string} "Mon YYYY-MM-DD HH:MM:SS.mmm UTC".
     */
    timeStamp: function ()
    {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // make sure all fields are fixed length with leading zeros
        const leadingZeros = (number, length) =>
        {
            let numberField = '' + number;
            while (numberField.length < length)
            {
                numberField = '0' + numberField;
            }
            return numberField;
        };

        let now = new Date();
        let dayofweek = weekdays[now.getDay()];           // 3-letter day of week
        let year = now.getFullYear();                     // 4-digit year
        let month = leadingZeros(now.getMonth() + 1, 2);  // 2-digit month
        let day = leadingZeros(now.getDate(), 2);         // 2-digit day
        let hours = leadingZeros(now.getHours(), 2);      // 2-digit hour
        let minutes = leadingZeros(now.getMinutes(), 2);  // 2-digit minute
        let seconds = leadingZeros(now.getSeconds(), 2);  // 2-digit second
        let ms = leadingZeros(now.getMilliseconds(), 3);  // 3-digit millisecond

        return `${year}-${month}-${day} ${dayofweek} ${hours}:${minutes}:${seconds}.${ms} UTC`;
    },
};

// #endregion
// #endregion

// #region  M E T H O D - E X P O R T S

// Export as Common JS (CJS) code -- NOTE: Build as CommonJS Module for NodeJS Version v16.7.0
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
{
    // In a Node.js environment export mcode directly
    module.exports = mcode;
}
else
{
    // In a browser environment, attach mcode to the window object
    window.mcode = mcode;
}

// #endregion

// #endregion
// #endregion