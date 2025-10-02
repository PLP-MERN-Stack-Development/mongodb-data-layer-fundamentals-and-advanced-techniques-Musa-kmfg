// Create an index on title
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });


db.books.find({ title: "Book A" }).explain("executionStats");
