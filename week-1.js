let age = 20;
let studentName = "Harshitha";
let isStudent = true;
console.log("Age:", age);
console.log("Name:", studentName);
console.log("Is Student:", isStudent);
let value = 100;
console.log("Any (number):", value);
value = "Hello TypeScript";
console.log("Any (string):", value);
value = true;
console.log("Any (boolean):", value);
let data = "TypeScript";
if (typeof data === "string") {
    console.log("Unknown:", data.toUpperCase());
}
function greet() {
    console.log("Welcome to TypeScript!");
}
greet();
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log("Sum:", result);
export {};
