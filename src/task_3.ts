// Задание 3. Переопределение конструктора

class Vehicle {
    // Инициализация марки и модели
    constructor(
        public make: string,
        public model: string
    ) {}
}

// Мотоцикл наследует свойства Vehicle
class Motorcycle extends Vehicle {
    constructor(
        make: string,
        model: string,
        public type: string
    ) {
        // Вызываем конструктор родительского класса
        super(make, model);
    }
}

// Создаем мотоцикл
const motorcycle = new Motorcycle("Yamaha", "MT-07", "Naked");

// Проверяем все три свойства
console.log(`Марка: ${motorcycle.make}`);
console.log(`Модель: ${motorcycle.model}`);
console.log(`Тип: ${motorcycle.type}`);

export {};