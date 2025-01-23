const querystring = require('querystring');

exports.handler = async (event, context) => {
    let body;

    // Parse the body depending on the content type
    if (event.headers["content-type"] === "application/x-www-form-urlencoded") {
        body = querystring.parse(event.body);
    } else {
        body = JSON.parse(event.body);
    }

    const patternType = body.pattern;
    let result = '';
    let code = '';
    const size = 5;

    switch (patternType) {
        case 'Right Half Pyramid Pattern': // Right Half Pyramid
            result = generateRpp(size);
            code = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= i; j++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
            break;
        case 'Left Half Pyramid Pattern': // Left Half Pyramid
            result = generateLpp(size);
            code = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= 2 * (x - i) - 1; j++) {\n    line += ' ';\n  }\n  for (let k = 0; k <= i; k++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
            break;
        case 'Inverted Right Half Pyramid Pattern': // Inverted Right Half Pyramid
            result = generateIrpp(size);
            code = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= x - i; j++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
            break;
        default:
            result = 'Invalid pattern';
            code = 'Invalid code';
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
            pattern: result,
            code: code
        }),
    };
};

// Function for Right Half Pyramid Pattern
function generateRpp(x) {
    let result = '';
    for (let i = 0; i <= x; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += '* ';
        }
        result += line + '\n';
    }
    return result;
}

// Function for Left Half Pyramid Pattern
function generateLpp(x) {
    let result = '';
    for (let i = 0; i <= x; i++) {
        let line = '';
        for (let j = 0; j <= 2 * (x - i) - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k <= i; k++) {
            line += '* ';
        }
        result += line + '\n';
    }
    return result;
}

// Function for Inverted Right Half Pyramid Pattern
function generateIrpp(x) {
    let result = '';
    for (let i = 0; i <= x; i++) {
        let line = '';
        for (let j = 0; j <= x - i; j++) {
            line += '* ';
        }
        result += line + '\n';
    }
    return result;
}
