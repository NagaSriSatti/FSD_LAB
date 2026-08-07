let age: number = 20;
let studentName: string = "Harshitha";
let isStudent: boolean = true;

console.log("Age:", age);
console.log("Name:", studentName);
console.log("Is Student:", isStudent);

let value: any = 100;
console.log("Any (number):", value);

value = "Hello TypeScript";
console.log("Any (string):", value);

value = true;
console.log("Any (boolean):", value);

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log("Unknown:", data.toUpperCase());
}

function greet(): void {
    console.log("Welcome to TypeScript!");
}

greet();

function add(a: number, b: number): number {
    return a + b;
}

let result: number = add(10, 20);
console.log("Sum:", result);

export {};