import { add, message } from "./math";

namespace StudentInfo {
    export let name: string = "Harshitha";
}

let value: number = 10;

function display<T>(data: T): void {
    console.log(data);
}

function printLength<T extends { length: number }>(item: T): void {
    console.log("Length:", item.length);
}

console.log(message);
console.log("Sum:", add(10, 20));
console.log("Name:", StudentInfo.name);
console.log("Value:", value);

display<string>("Hello");
display<number>(100);

printLength("TypeScript");

export {};