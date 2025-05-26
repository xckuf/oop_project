import {Car} from "./Car.js";

export class Truck extends Car {
    /**
     * @param model
     * @param year
     * @param capacity
     */
    constructor(model, year, capacity) {
        super(model, year);
        this.capacity = capacity;
    }

    /**
     * Метод для получения информации о грузовом авто
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()} - Грузовой автомобиль, вместительность - ${this.capacity} тонн`;
    }
}