import { Person } from "./Person.js";

export class Worker extends Person {
    /**
     * @param {string} name
     * @param {number} age
     * @param {string} department
     */
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    /**
     * Метод для получения информации о рабочем: имя, возраст, отдел
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()} — Рабочий (отдел: ${this.department})`;
    }
}