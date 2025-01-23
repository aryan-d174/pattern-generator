// netlify/functions/pattern.js

exports.handler = async (event, context) => {
    // Extract pattern name from the request body
    const { pattern } = JSON.parse(event.body);

    let patternOutput = '';
    let codeOutput = '';

    // Generate the pattern and code based on the selected pattern
    if (pattern === 'Right Half Pyramid Pattern') {
        patternOutput = '* \n* *\n* * *\n* * * *\n* * * * *\n';
        codeOutput = `int x=5;\nfor(int i=0;i<=x;i++){\nfor(int j=0;j<=i;j++){ \ncout <<"* ";\n}\ncout << endl;\n}`;
    } else if (pattern === 'Left Half Pyramid Pattern') {
        patternOutput = '    *\n   * *\n  * * *\n * * * *\n* * * * *\n';
        codeOutput = `int x=5;\nfor(int i=0;i<=x;i++){\nfor(int j = 0; j<=2*(x-i)-1; j++){\ncout << " ";\n}\nfor(int k=0;k<=i;k++){\ncout <<"* ";\n}\ncout << endl;\n}`;
    } else if (pattern === 'Inverted Right Half Pyramid Pattern') {
        patternOutput = '* * * * *\n* * * *\n* * *\n* *\n*\n';
        codeOutput = `int x=5;\nfor(int i=0;i<=x;i++){\nfor(int j=0;j<=x-i;j++){\ncout <<"* ";\n}\ncout << endl;\n} `;
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
