const
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
    const size = 5;

    switch (patternType) {
        case 'Rpp': // Right Half Pyramid
            for (let i = 0; i < size; i++) {
                result += '* '.repeat(i + 1) + '\n';
            }
            break;
        case 'Lpp': // Left Half Pyramid
            for (let i = 0; i < size; i++) {
                result += ' '.repeat(2 * (size - i - 1)) + '* '.repeat(i + 1) + '\n';
            }
            break;
        case 'Irpp': // Inverted Right Half Pyramid
            for (let i = size; i > 0; i--) {
                result += '* '.repeat(i) + '\n';
            }
            break;
        default:
            result = 'Invalid pattern';
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ pattern: result }),
    };
};
