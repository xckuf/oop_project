export class Person {
    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Метод для получения общей информации о человеке
     * @returns {string}
     */
    getInfo() {
        return `${this.name}, возраст: ${this.age}`;
    }
}