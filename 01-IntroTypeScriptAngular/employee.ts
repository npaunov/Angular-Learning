abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number = 0,
        public tasks: Array<string> = []
    ) { }

    work(): void {
        let currentTask: string = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    }

    getSalary(): number {
        return this.salary;
    }

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task.')
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.')
        this.tasks.push(' is taking time off work.')
        this.tasks.push(' is supervising junior workers.')
    }
}

export class Manager extends Employee {
    constructor(name: string, age: number, public dividend: number = 0) {
        super(name, age);
        this.tasks.push(" schedule a meeting.")
        this.tasks.push(" is preparing a quarterly meeting.")
    }

    getSalary() : number {
        return this.salary + this.dividend;
    }
}