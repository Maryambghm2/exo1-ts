class Library {
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
        return book;
    }
    removeBook(book) {
        const removeBook = this.books.filter((b) => b !== book);
        return `${book} is deleted .`;
    }
    findBookByTitle(title) {
        return this.books.find(book => book.title == title);
    }
    listAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
}
export {};
