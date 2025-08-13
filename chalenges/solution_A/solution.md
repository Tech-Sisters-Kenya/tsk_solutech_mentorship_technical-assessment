## SOLUTIONS

### 📚 1. Three pieces of data to store for each book:

1. Unique book id 
2. Availability status of a book- wether it's borrowed or available
3. Author

### 🚫 2. How to prevent the same book from being borrowed twice:

1. Check the Availability status in the book record


### 📈 3. Scaling to 10,000 books and 1,000 users — what needs to change:

1. Database - move lacal storage to a relational database example:postgreSQL and MySQL
2. Indexing - add indexes to frequently queried key fields for faster research
3. Load Balancing if trafic grows


### 🔄 4. Store book info and borrowing record together or separately — why?
- Separately -To allow for scalability of table based usage and 
             -Reduces redundancy  and simplifies data management 


