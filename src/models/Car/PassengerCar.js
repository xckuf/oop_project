import {Car} from "./Car.js";

export class PassengerCar extends Car {
    /**
     * @param model
     * @param year
     * @param bodyType
     */
    constructor(model, year, bodyType) {
        super(model, year);
        this.bodyType = bodyType;
    }

    /**
     * Метод для получения информации о легковом авто
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()} - Легковой автомобиль, кузов - ${this.bodyType}`;
    }
}