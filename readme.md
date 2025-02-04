# TypeScript OOP Inheritance Example

This project demonstrates class inheritance in TypeScript with a simple example of a `Person` class and a `Student` class that extends `Person`. It also shows how to handle date conversion using a utility method (`convertStringToDate`) and the use of interfaces for type safety.

## Features

- **Class Inheritance**: The `Student` class extends the `Person` class, inheriting its properties and methods.
- **Interface**: Interfaces are used to enforce the structure of objects, such as `personDetailsType` and `studentDetailsType`.
- **Date Conversion**: The `convertStringToDate` method from the `utils.js` file is used to convert a string to a `Date` object.
- **Method Overriding**: The `getDetails` method is overridden in the `Student` class to include additional properties such as `rollNo`, `std`, and `division`.

## Project Structure

- **`app.ts`**: Main TypeScript file demonstrating class inheritance and method overriding.
- **`utils.js`**: Utility file containing the `convertStringToDate` function.

## How to Run

1. Clone or download the repository.
2. run command : npm i 
3. compile the project with : tsc
4. run project with : npm run start 

   ```bash
   npm install -g typescript ts-node
