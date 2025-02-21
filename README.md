# TypeScript Class Task Assignment

## Overview
This repository contains solutions to the **TypeScript Class Task Assignment**, covering fundamental TypeScript concepts such as type annotations, interfaces, classes, generics, and asynchronous programming. Each section of the assignment demonstrates best practices in TypeScript development.

## Features Implemented
- **Type Annotations & Functions**
  - `capitalizeWords`: Capitalizes the first letter of each word in a string.
  - `isValidNumber`: Validates if an unknown type is a number.

- **Interfaces & Object Types**
  - `User` Interface: Defines a user with properties `id`, `name`, `email`, and an optional `isAdmin`.
  - `createUser`: Accepts a `User` object and returns a success message.

- **Classes & OOP**
  - `Product` Class: Includes `name`, `price`, and `category` properties.
  - Implements `getDiscountedPrice` method to return a discounted price.
  - Uses access modifiers for better encapsulation.

- **Generics & Utility Types**
  - `filterArray<T>`: A generic function that filters an array based on a predicate function.

- **TypeScript with Async/Await**
  - Fetches and displays user data from `https://jsonplaceholder.typicode.com/users`.
  - Handles errors gracefully.

## Bonus Challenge
- Advanced password validation ensuring strong passwords with uppercase, lowercase, numbers, special characters, and filtering out common weak passwords.

## Installation & Usage
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/your-repository.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd your-repository
   ```
3. **Install dependencies** (if applicable):
   ```sh
   npm install
   ```
4. **Run the TypeScript files**:
   ```sh
   tsc && node dist/index.js
   ```

## Technologies Used
- TypeScript
- Node.js
- Fetch API

## Contributing
Feel free to contribute by submitting pull requests or reporting issues.

## Author
[Your Name]

## License
This project is licensed under the MIT License.

