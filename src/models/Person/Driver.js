import { Person } from "./Person.js";

export class Driver extends Person {
    /**
     * @param {string} name
     * @param {number} age
     * @param {string} licenseCategory
     */
    constructor(name, age, licenseCategory) {
        super(name, age);
        this.licenseCategory = licenseCategory;
    }

    /**
     * Метод для получения информации о водителе: имя, возраст, категория водительского удостоверения
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()} — Водитель (категория: ${this.licenseCategory})`;
    }
}