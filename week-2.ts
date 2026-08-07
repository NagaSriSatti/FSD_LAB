function add(a: number, b: number): number {
    return a + b;
}
function greet(studentName: string): void {
    console.log("Hello " + studentName);
}
let sum: number = add(10, 20);
console.log("Sum:", sum);

greet("Harshitha");
const multiply = (a: number, b: number): number => {
    return a * b;
};
const square = (x: number): number => x * x;

console.log("Product:", multiply(999, 10000));
console.log("Square:", square(6));

