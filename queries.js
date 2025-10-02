// queries.js
// Run these queries in mongosh or Node.js MongoDB driver

// Find all books in a specific genre (Fiction)
db.books.find({ genre: "Fiction" });

// Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// Find books by Author 1
db.books.find({ author: "Author 1" });

// Update the price of a specific book (Book A -> 35)
db.books.updateOne({ title: "Book A" }, { $set: { price: 35 } });

// Delete a book by its title (Book J)
db.books.deleteOne({ title: "Book J" });
