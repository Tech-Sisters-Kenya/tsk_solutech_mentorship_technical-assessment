
Section A – Logical Thinking & System Design

Scaling to 10,000 books and 1,000 users — what needs to change
- Move from in-memory lists to a relational database (Postgres, MySQL).
- Add indexes on Book ID and Borrower ID for fast lookups.
- Use pagination, caching (Redis) for frequently requested endpoints, and monitoring.

Store book info and borrowing record together or separately — why?
- Store **separately**: book metadata (title, author, ISBN) is static; borrowing records are dynamic.
- Separation avoids duplication, keeps writes cheap for borrowing events, and simplifies queries for history.