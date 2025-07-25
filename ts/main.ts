import { Author } from "./interfaces";
import { Book } from "./interfaces";
import { Library } from "./Library"

function createBook(title: string, author: Author, pages: number, isAvailable?: boolean): Book {
    const book: Book = {
        title, author, pages, isAvailable: true
    }
    return book;
}

function toogleAvailability(book): Book {
    if (book.isAvailable == true) {
        book.isAvailable == false
    } else {
        book.isAvailable == true
    }
    return book;
}


const author: Author = {
    name: "Author1",
    birthYear: 1975,
    genres: ["Action", "Science-Fiction", "Fantastique"]
}

const author2: Author = {
    name: "Author2",
    birthYear: 1959,
    genres: ["Policier", "Fantastique"]
}

const author3: Author = {
    name: "Author3",
    birthYear: 1990,
    genres: ["Action", "Roman", "Enfants"]
}




const book1: Book = createBook("Livre1", author, 400);

const book2: Book = createBook("Livre2", author3, 1000);

const book3: Book = createBook("Livre3", author2, 550);

const books: Book[] = [book1, book2];


// Inialisation 
const library = new Library(books);

console.log("Liste livres de base : " + library);

// Test ajout livres 
library.addBook(book3);
console.log("Nouvelle liste avec livre 3 : " + library);


// Test suppression livre 1
library.removeBook(book1);

// Test affichage livre par son titre
console.log("Recherche livre par son titre : " + library.findBookByTitle("Livre2"));

// Test Fonction Inversion disponibilité + affichage listes des livres disponible 
toogleAvailability(book2);
console.log("Vérification inversion disponibilité : " + book2);

// Test 