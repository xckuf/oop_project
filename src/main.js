import { AutoPark } from "./models/AutoPark.js";
import { add } from "./services/add.js";

const allEntities = []; //Массив для хранения всех созданных сущностей
let currentPark = null; //Текущий выбранный автопарк

/**
 * Главная функция, запускающая меню взаимодействия с пользователем.
 */
function main() {
    while (true) {
        // Информация о текущем автопарке (если выбран)
        const current = currentPark ? `Текущий автопарк: ${currentPark.name} (id ${currentPark.id})` : "Автопарк не выбран";

        // Главное меню
        const choice = prompt(`${current}

Что хотите сделать?
1 - Создать автопарк
2 - Выбрать текущий автопарк
3 - Добавить сущность в автопарк
4 - Сравнить автопарки
5 - Показать информацию о текущем автопарке
0 - Выйти`);

        switch (choice) {
            case '1': { //Создание нового автопарка
                const name = prompt("Название нового автопарка:");
                const park = new AutoPark(name);
                allEntities.push(park);
                currentPark = park;
                alert(`Создан автопарк "${name}" с id ${park.id}`);
                break;
            }
            case '2': { //Выбор автопарка
                const id = parseInt(prompt("Введите id автопарка:"));
                const park = allEntities.find(e => e instanceof AutoPark && e.id === id);
                if (park) {
                    currentPark = park;
                    alert(`Текущий автопарк: ${park.name}`);
                } else {
                    alert("Автопарк не найден.");
                }
                break;
            }
            case '3': { //Добавление сущности в автопарк
                if (!currentPark) {
                    alert("Сначала выберите автопарк.");
                    break;
                }
                add(currentPark, allEntities);
                break;
            }
            case '4': { //Сравнение автопарков
                const id = parseInt(prompt("Введите id второго автопарка для сравнения:"));
                const other = allEntities.find(e => e instanceof AutoPark && e.id === id);
                if (!currentPark || !other) {
                    alert("Один из автопарков не найден.");
                    break;
                }
                currentPark.compareWith(other);
                break;
            }
            case '5': { //Показать информацию о текущем автопарке
                if (!currentPark) {
                    alert("Сначала выберите автопарк.");
                    break;
                }

                // Сбор общей информации
                let info = `Информация о автопарке "${currentPark.name}" (id ${currentPark.id}):\n\n`;
                info += `1 - Машин: ${currentPark.getCarCount()}\n`;
                info += `2 - Персонала: ${currentPark.getPeopleCount()}\n`;
                info += `3 - Автопарков (филиалов): ${currentPark.branches.length}\n\n`;
                info += `Введите номер, чтобы посмотреть список или нажмите любую другую клавишу для выхода.`;

                const detailChoice = prompt(info);

                // Список машин
                if (detailChoice === '1') {
                    const cars = Array.from(currentPark.getCars());
                    if (cars.length === 0) {
                        alert("Нет автомобилей.");
                    } else {
                        alert("Список автомобилей:\n" + cars.map(c => `- ${c.getInfo()}`).join('\n'));
                    }
                }
                // Список сотрудников
                else if (detailChoice === '2') {
                    const people = Array.from(currentPark.getPeople());
                    if (people.length === 0) {
                        alert("Сотрудников нет.");
                    } else {
                        alert("Список сотрудников:\n" + people.map(p => `- ${p.getInfo()}`).join('\n'));
                    }
                }
                //Список автосалонов
                else if (detailChoice === '3') {
                    const branches = currentPark.branches;
                    if (branches.length === 0) {
                        alert("Автосалонов нет.");
                    } else {
                        alert("Список автосалонов:\n" + branches.map(b => `- ${b.name} (id ${b.id})`).join('\n'));
                    }
                }

                break;
            }
            case '0': { //Выход из программы
                alert("Выход из программы.");
                return;
            }
            default:
                alert("Неверный выбор.");
        }
    }
}
//Запуск
main();