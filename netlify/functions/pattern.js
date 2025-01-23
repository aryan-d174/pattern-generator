// netlify/functions/pattern.js

exports.handler = async (event, context) => {
    // Extract pattern name from the request body
    const { pattern } = JSON.parse(event.body);

    let patternOutput = '';
    let codeOutput = '';

    // Generate the pattern and code based on the selected pattern
    if (pattern === 'Right Half Pyramid Pattern') {
        patternOutput = '* \n* * \n* * * \n* * * * \n* * * * * \n';
        codeOutput = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= i; j++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
    } else if (pattern === 'Left Half Pyramid Pattern') {
        patternOutput = '    * \n   * * \n  * * * \n * * * * \n* * * * * \n';
        codeOutput = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= 2 * (x - i) - 1; j++) {\n    line += ' ';\n  }\n  for (let k = 0; k <= i; k++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
    } else if (pattern === 'Inverted Right Half Pyramid Pattern') {
        patternOutput = '* * * * * \n* * * * \n* * * \n* * \n* \n';
        codeOutput = `const x = 5;\nfor (let i = 0; i <= x; i++) {\n  let line = '';\n  for (let j = 0; j <= x - i; j++) {\n    line += '* ';\n  }\n  console.log(line);\n}`;
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid pattern' })
        };
    }

    // Return the pattern and code as JSON response
    return {
        statusCode: 200,
        body: JSON.stringify({
            pattern: patternOutput,
            code: codeOutput
        })
    };
};
