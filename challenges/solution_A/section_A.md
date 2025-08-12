## Section A: Logical Thinking & System Design

### 1. Three pieces of data to store for each book:
- Book ID (unique identifier)
- Title & Author
- Current Borrower ID & Borrow Date

### 2. How to prevent the same book from being borrowed twice:
- Use a status field (available/borrowed) and only allow borrow if status = "available".
- Enforce a check before confirming a borrow.

### 3. Scaling to 10,000 books and 1,000 users — what needs to change:
- Use a proper database (e.g., PostgreSQL), add indexes, and consider caching.

### 4. Store book info and borrowing records together or separately — why:
- Store separately: `books` for book details and `borrow_records` for history. This avoids duplication and keeps history clean.
