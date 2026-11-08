// Задание 1. Класс Animal и его наследник Dog

class Animal {
    constructor(
        public name: string,
        public species: string
    ) {}

    // Общий метод животного
    sound(): void {
        console.log("The animal makes a sound");
    }
}

// Класс собаки наследуется от Animal
class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name, "Dog");
    }

    // Переопределяем метод родительского класса
    override sound(): void {
        console.log("The dog barks");
    }
}

// Создаем обычное животное
const animal = new Animal("Leo", "Lion");

// Создаем собаку
const dog = new Dog("Rex", "German Shepherd");

// Проверяем свойства и методы
console.log(`Animal: ${animal.name} (${animal.species})`);
animal.sound();

console.log(`Dog: ${dog.name} (${dog.species}), breed: ${dog.breed}`);
dog.sound();

export {};