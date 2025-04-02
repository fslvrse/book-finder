const bookListElement = document.getElementById("book-list");
const searchInput = document.getElementById("search");
const bookDetailsElement = document.getElementById("book-details");
const randomBtn = document.getElementById("randomBtn");
const addBookForm = document.getElementById("addBookForm");
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
  // Add more sample books as needed
];

// Display books in the list
function displayBooks(booksToDisplay) {
  bookListElement.innerHTML = "";
  booksToDisplay.forEach((book) => {
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

// Function to add a new book (POST)
function addBook(newBook) {
  books.push(newBook);
  displayBooks(books); // Refresh the displayed book list
}

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks); // Display filtered books
});

// Suggest a random book
randomBtn.onclick = () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  showBookDetails(books[randomIndex]);
};

// Handle form submission
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh

  const newBook = {
    id: books.length + 1, // Simple ID generation
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    publicationYear: parseInt(document.getElementById("publicationYear").value),
    rating: parseFloat(document.getElementById("rating").value),
    description: document.getElementById("description").value,
  };

  addBook(newBook); // Add the new book
  addBookForm.reset(); // Reset the form fields
});

// Initial display of all books
displayBooks(books);
