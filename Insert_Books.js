// insert_books.js
const { connectDB, client } = require("./db");

async function run() {
  const db = await connectDB();
  const books = db.collection("books");

  await books.deleteMany({});

  await books.insertMany([
    { title: "Book A", author: "Author 1", genre: "Fiction", published_year: 2015, price: 20, in_stock: true, pages: 200, publisher: "Publisher A" },
    { title: "Book B", author: "Author 2", genre: "Sci-Fi", published_year: 2018, price: 25, in_stock: true, pages: 350, publisher: "Publisher B" },
    { title: "Book C", author: "Author 3", genre: "Romance", published_year: 2009, price: 18, in_stock: false, pages: 150, publisher: "Publisher C" },
    { title: "Book D", author: "Author 1", genre: "History", published_year: 2012, price: 30, in_stock: true, pages: 500, publisher: "Publisher A" },
    { title: "Book E", author: "Author 4", genre: "Fantasy", published_year: 2021, price: 28, in_stock: true, pages: 400, publisher: "Publisher D" },
    { title: "Book F", author: "Author 2", genre: "Fiction", published_year: 2019, price: 22, in_stock: false, pages: 220, publisher: "Publisher B" },
    { title: "Book G", author: "Author 5", genre: "Sci-Fi", published_year: 2010, price: 15, in_stock: true, pages: 300, publisher: "Publisher E" },
    { title: "Book H", author: "Author 3", genre: "Romance", published_year: 2022, price: 26, in_stock: true, pages: 280, publisher: "Publisher C" },
    { title: "Book I", author: "Author 6", genre: "Thriller", published_year: 2016, price: 24, in_stock: true, pages: 320, publisher: "Publisher F" },
    { title: "Book J", author: "Author 1", genre: "History", published_year: 2005, price: 19, in_stock: false, pages: 450, publisher: "Publisher A" }
  ]);

  console.log("✅ Inserted 10 books into plp_bookstore.books");

  await client.close();
}

run();
