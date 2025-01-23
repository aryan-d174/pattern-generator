// netlify/functions/pattern.js

exports.handler = async (event, context) => {
  const { pattern } = JSON.parse(event.body);

  let patternOutput = '';
  let codeOutput = '';

  // Generate the pattern and code based on the selected pattern
  if (pattern === 'Right Half Pyramid Pattern') {
    patternOutput = '*\n* *\n* * *\n* * * *\n* * * * *\n';
    codeOutput = `
      int rows = 5; 

      for (int i = 1; i <= rows; ++i) {
        for (int j = 1; j <= i; ++j) {
          cout << "* ";
        }
        cout << "\n"; 
      }
    `;
  } else if (pattern === 'Left Half Pyramid Pattern') {
    patternOutput = "    *\n   **\n  ***\n ****\n*****\n"; 
    codeOutput = `
      int rows = 5; 

      for (int i = 1; i <= rows; ++i) {
        for (int j = 1; j <= rows - i; ++j) {
          cout << " "; 
        }
        for (int k = 1; k <= i; ++k) {
          cout << "*"; 
        }
        cout << "\n"; 
      }
    `;
  } else if (pattern === 'Inverted Right Half Pyramid Pattern') {
    patternOutput = '* * * * *\n* * * *\n* * *\n* *\n*\n';
    codeOutput = `
      int rows = 5; 

      for (int i = rows; i >= 1; --i) { 
        for (int j = 1; j <= i; ++j) {
          cout << "* ";
        }
        cout << "\n"; 
      }
    `;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid pattern' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      pattern: patternOutput,
      code: codeOutput
    })
  };
};
