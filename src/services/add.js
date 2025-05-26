import { PassengerCar } from "../models/Car/PassengerCar.js";
import { Truck } from "../models/Car/Truck.js";
import { Worker } from "../models/Person/Worker.js";
import { Driver } from "../models/Person/Driver.js";
import { AutoPark } from "../models/AutoPark.js";

/**
 * Добавляет новую сущность в автопарк.
 * @param {AutoPark} park - Текущий автопарк
 * @param {Array} allEntities - Массив всех сущностей
 */
export function add(park, allEntities) {
    const type = prompt(`Что хотите добавить?
1 - Легковую машину
2 - Грузовую машину
3 - Водителя
4 - Рабочего
5 - Другой автосалон`);

    let entity = null; // Здесь храниться создаваемая сущность

    // В зависимости от выбора создаём сущность
    switch (type) {
        case '1': { //Легковая машина
            const model = prompt("Марка:");
            const year = parseInt(prompt("Год:"));
            const body = prompt("Тип кузова:");
            entity = new PassengerCar(model, year, body);
            break;
        }
        case '2': { //Грузовая машина
            const model = prompt("Марка:");
            const year = parseInt(prompt("Год:"));
            const capacity = parseFloat(prompt("Грузоподъёмность (тонны):"));
            entity = new Truck(model, year, capacity);
            break;
        }
        case '3': { //Водитель
            const name = prompt("Имя:");
            const age = parseInt(prompt("Возраст:"));
            const cat = prompt("Категория прав:");
            entity = new Driver(name, age, cat);
            break;
        }
        case '4': { //Рабочий
            const name = prompt("Имя:");
            const age = parseInt(prompt("Возраст:"));
            const department = prompt("Отдел:");
            entity = new Worker(name, age, department);
            break;
        }
        case '5': { //Другой автопарк
            const otherId = parseInt(prompt("id автосалона для добавления как автопарка:"));
            const branch = allEntities.find(e => e instanceof AutoPark && e.id === otherId);
            if (branch && branch.id !== park.id) {
                park.add(branch); //Добавляем автопарк
                alert("Автопарк добавлен.");
            } else {
                alert("Автопарк не найден или совпадает с текущим.");
            }
            return;
        }
        default:
            alert("Неизвестный тип.");
            return;
    }

    //Если сущность успешно создана — добавляем её в автопарк и общий список
    if (entity) {
        park.add(entity); //Добавляем в текущий автопарк
        allEntities.push(entity); //Добавляем в глобальный список сущностей
        alert("Сущность добавлена.");
    }
}
