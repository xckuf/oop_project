import {Car} from "./Car/Car.js";
import {Person} from "./Person/Person.js";
import {Driver} from "./Person/Driver.js";

let parkIdCounter = 1;

export class AutoPark {
    /**
     * @param name
     */
    constructor(name) {
        this.id = parkIdCounter++;
        this.name = name;
        this.cars = [];
        this.people = [];
        this.branches = [];
    }

    add(entity) {
        if (entity instanceof Car) {
            this.cars.push(entity);
        } else if (entity instanceof Person) {
            this.people.push(entity);
        } else if (entity instanceof AutoPark) {
            this.branches.push(entity);
        } else {
            console.warn("Неизвестный тип:", entity);
        }
    }

    /**
     * Метод для получения количества машин в автопарке
     * @returns {number}
     */
    getCarCount() {
        return this.cars.length;
    }

    /**
     * Метод для получения количества сотрудников в автопарке
     * @returns {number}
     */
    getPeopleCount() {
        return this.people.length;
    }

    /**
     * Метод для получения списка всех машин
     * @returns {Car[]}
     */
    getCars() {
        return this.cars.filter(e => e instanceof Car);
    }

    /**
     * Метод для получения списка всех работников
     * @returns {Car[]}
     */
    getPeople() {
        return this.people.filter(e => e instanceof Worker || e instanceof Driver);
    }

    /**
     * Метод для сравнения 2 автопарков
     * @param {AutoPark} otherPark - Другой автопарк
     */
    compareWith(otherPark) {
        if (!(otherPark instanceof AutoPark)) {
            alert("Можно сравнивать только с другим автопарком.");
            return;
        }

        const carDiff = this.getCarCount() - otherPark.getCarCount();
        const peopleDiff = this.getPeopleCount() - otherPark.getPeopleCount();

        alert(`Сравниваем "${this.name}" и "${otherPark.name}":`);

        //Сравнение автосалонов по количеству машин
        alert(
            carDiff === 0 ? "Одинаковое число машин." :
                carDiff > 0 ? `${this.name} имеет больше машин.` :
                    `${otherPark.name} имеет больше машин.`
        );

        //Сравнение автосалонов по количеству работников
        alert(
            peopleDiff === 0 ? "Одинаковое число сотрудников." :
                peopleDiff > 0 ? `${this.name} имеет больше сотрудников.` :
                    `${otherPark.name} имеет больше сотрудников.`
        );
    }
}