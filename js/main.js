import { Library } from "./classes/";
function createBook(title, author, pages, isAvailable) {
    const book = {
        title, author, pages, isAvailable: true
    };
    return book;
}
function toogleAvailability(book) {
    if (book.isAvailable == true) {
        book.isAvailable == false;
    }
    else {
        book.isAvailable == true;
    }
    return book;
}
const author = {
    name: "Author1",
    birthYear: 1975,
    genres: ["Action", "Science-Fiction", "Fantastique"]
};
const author2 = {
    name: "Author2",
    birthYear: 1959,
    genres: ["Policier", "Fantastique"]
};
const author3 = {
    name: "Author3",
    birthYear: 1990,
    genres: ["Action", "Roman", "Enfants"]
};
const livre1 = createBook("Livre1", author, 400);
const livre2 = createBook("Livres2", author3, 1000);
const livre3 = createBook("Livres3", author2, 550);
const books = [livre1, livre2];
const library = new Library(books);
console.log(library);
library.addBook(livre3);
library.findBookByTitle("Livre2");
