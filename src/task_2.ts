// Задание 2. Статическое свойство для учёта книг

class Library {
    // Общий счётчик книг для всех объектов класса
    static totalBooks: number = 0;

    // Добавление книги
    addBook(): void {
        Library.totalBooks++;
    }
}

// Создаем две библиотеки
const cityLibrary = new Library();
const schoolLibrary = new Library();

// Проверяем начальное количество книг
console.log(`Всего книг: ${Library.totalBooks}`);

// Добавляем две книги в первую библиотеку
cityLibrary.addBook();
cityLibrary.addBook();

console.log(`Всего книг: ${Library.totalBooks}`);

// Добавляем книгу во вторую библиотеку
schoolLibrary.addBook();

console.log(`Всего книг: ${Library.totalBooks}`);

export {};