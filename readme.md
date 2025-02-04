# TypeScript OOP Inheritance Example

This project demonstrates class inheritance in TypeScript with a simple example of a `Person` class and a `Student` class that extends `Person`. It also includes a `SportsPerson` class that extends `Student`, showcasing **multilevel inheritance**. Additionally, it shows how to handle date conversion using a utility method (`convertStringToDate`) and the use of interfaces for type safety.

## Features

- **Class Inheritance**: The `Student` class extends the `Person` class, inheriting its properties and methods.
- **Multilevel Inheritance**: The `SportsPerson` class extends `Student`, demonstrating a deeper inheritance structure.
- **Interface**: Interfaces are used to enforce the structure of objects, such as `personDetailsType`, `studentDetailsType`, and `sportsPersonDetailsType`.
- **Date Conversion**: The `convertStringToDate` method from the `utils.js` file is used to convert a string to a `Date` object.
- **Method Overriding**: The `getDetails` method is overridden in the `Student` and `SportsPerson` classes to include additional properties.
- **Multiple Inheritance using Interface**: The `Employee` class implements the `Emp` interface, demonstrating interface-based multiple inheritance.

## Project Structure

```
├── src
   ├── app.ts         # Main file where instances are created
   ├── utils.ts       # Utility functions (e.g., string-to-date conversion)
   ├── Student.ts  
   ├── Person.ts  
   ├── Employee.ts  
   ├── SportsPerson.ts  
├── tsconfig.json  # TypeScript configuration file
└── README.md      # Project documentation
```

## How to Run

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile TypeScript code:
   ```bash
   tsc
   ```
4. Run the application:
   ```bash
   npm run start
   ```

