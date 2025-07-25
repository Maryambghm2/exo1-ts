import { Book } from "./interfaces";


export class Library {
    books: Book[]

    constructor(books: Book[]) {
        this.books = books;
    }

    addBook(book: Book): Book {
        this.books.push(book)
        return book;
    }

    removeBook(book: Book): string {
        const removeBook = this.books.filter((b) => b !== book);

        return `${book} is deleted .`
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }


    listAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);

    }

    getBookByAuthor(authorName : string) : Book[] {
        return this.books.filter(book => book.author.name === authorName)
    }

}



