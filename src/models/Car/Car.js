export class Car {
    /**
     * @param model
     * @param year
     */
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    /**
     * Метод для получения информации об автомобиле
     * @returns {string} Строка с описанием модели и года
     */
    getInfo() {
        return `${this.model} (${this.year})`;
    }
}
