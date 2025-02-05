# SOLID Principles in TypeScript

## Overview
This project demonstrates the implementation of the SOLID principles using TypeScript. The SOLID principles are fundamental design principles in object-oriented programming that help create scalable, maintainable, and flexible software.

## SOLID Principles Implemented
1. **Single Responsibility Principle (SRP)** - `singleResponsibility.ts`
2. **Open/Closed Principle (OCP)** - `openForModification.ts`
3. **Liskov Substitution Principle (LSP)** - `liskovPrinciple.ts`
4. **Interface Segregation Principle (ISP)** - `InterfaceSegregation.ts`
5. **Dependency Inversion Principle (DIP)** - `dependencyInversion.ts`

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd oopstask2-solidtypescript
   git checkout solidtypescript
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile TypeScript to JavaScript:
   ```sh
   npx tsc
   ```
4. Run the compiled JavaScript files:
   ```sh
   node dist/singleResponsibility.js
   node dist/openForModification.js
   node dist/liskovPrinciple.js
   node dist/InterfaceSegregation.js
   node dist/dependencyInversion.js
   ```

## Project Structure
```
 oopstask2-solidtypescript/
 ├── src/
 │   ├── singleResponsibility.ts
 │   ├── openForModification.ts
 │   ├── liskovPrinciple.ts
 │   ├── InterfaceSegregation.ts
 │   ├── dependencyInversion.ts
 │   ├── type.ts
 ├── package.json
 ├── tsconfig.json
 ├── .gitignore
 └── README.md
```



