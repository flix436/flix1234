// validation.js

const validation = {
    // Validate string
    isString: (value) => {
      return typeof value === 'string';
    },
  
    // Validate number
    isNumber: (value) => {
      return typeof value === 'number' && !isNaN(value);
    },
  
    // Validate date
    isDate: (value) => {
      return value instanceof Date && !isNaN(value);
    },
  
    // Validate email
    isEmail: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
  
    // Validate URL
    isURL: (value) => {
      try {
        new URL(value);
        return true;
      } catch (error) {
        return false;
      }
    }
  };
  
  module.exports = validation;
  const validation = require('validation-library');

// Example usage
console.log(validation.isString('hello')); // true
console.log(validation.isNumber(42)); // true
console.log(validation.isDate(new Date())); // true
console.log(validation.isEmail('example@email.com')); // true
console.log(validation.isURL('https://example.com')); // true