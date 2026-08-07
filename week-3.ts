class Student {
    public name: string;
    private age: number;
    protected course: string;
    readonly college: string = "SVECW";
    static city: string = "Bhimavaram";

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("College:", this.college);
        console.log("City:", Student.city);
    }
}

let s1 = new Student("Harshitha", 20, "AIML");

s1.display();

console.log("Student Name:", s1.name);
console.log("City:", Student.city);

export {};