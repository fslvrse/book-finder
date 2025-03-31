const bookListElement = document.getElementById("book-list");
const searchInput = document.getElementById("search");
const bookDetailsElement = document.getElementById("book-details");
const randomBtn = document.getElementById("randomBtn");
let books = [];

// Sample book data
books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
    rating: 4.8,
    description: "A novel about serious issues of rape and racial inequality.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationYear: 1949,
    rating: 4.7,
    description:
      "A story about a dystopian future under a totalitarian regime.",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publicationYear: 1925,
    rating: 4.4,
    description: "A novel about the American dream and disillusionment.",
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publicationYear: 1851,
    rating: 4.2,
    description: "A quest to capture the elusive white whale.",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationYear: 1813,
    rating: 4.6,
    description: "A novel exploring themes of love and social class.",
  },
];

// Display books in the list
function displayBooks(books) {
  bookListElement.innerHTML = "";
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.textContent = `${book.title} by ${book.author}`;
    bookItem.onclick = () => showBookDetails(book);
    bookListElement.appendChild(bookItem);
  });
}

// Show book details
function showBookDetails(book) {
  bookDetailsElement.classList.remove("hidden");
  bookDetailsElement.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Publication Year:</strong> ${book.publicationYear}</p>
        <p><strong>Rating:</strong> ${book.rating}</p>
        <p>${book.description}</p>
    `;
}

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});

// Suggest a random book
randomBtn.onclick = () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  showBookDetails(books[randomIndex]);
};

// Initial display of all books
displayBooks(books);
