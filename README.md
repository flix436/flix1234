# Validation Library

A simple and lightweight validation library for JavaScript, providing functions to validate strings, numbers, dates, emails, and URLs.

## Installation

You can install this package via npm:

```bash
npm install validation-library
```

## Usage

```javascript
const validation = require('validation-library');

// Validate string
console.log(validation.isString('hello')); // true

// Validate number
console.log(validation.isNumber(42)); // true

// Validate date
console.log(validation.isDate(new Date())); // true

// Validate email
console.log(validation.isEmail('example@email.com')); // true

// Validate URL
console.log(validation.isURL('https://example.com')); // true
```

## Functions

- `isString(value)`: Validates if the given value is a string.
- `isNumber(value)`: Validates if the given value is a number.
- `isDate(value)`: Validates if the given value is a date.
- `isEmail(value)`: Validates if the given value is a valid email address.
- `isURL(value)`: Validates if the given value is a valid URL.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
