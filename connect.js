// connect.js
// SQLite3 database connection for the Flashcard app.
// Exports: DB - an opened sqlite3.Database instance.

import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();

// Open (or create) the local SQLite database file `mydata.db`.
// Flags: read/write and create if it does not exist.
const DB = new sql3.Database('./mydata.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, connected);

function connected(err) {
  if (err) {
    console.log('Connection error:', err.message);
    return;
  }
  console.log('Connected to the database.');
}

// Ensure the flashcard table exists. Columns: CardID (PK), Front, Back, Reaction.
let sql = `
  CREATE TABLE IF NOT EXISTS flashcard (
    CardID INTEGER PRIMARY KEY,
    Front TEXT NOT NULL,
    Back TEXT NOT NULL,
    Reaction TEXT NOT NULL
  )
`;

DB.run(sql, (err) => {
  if (err) {
    console.log('Error creating flashcard table:', err.message);
    return;
  }
  console.log('Flashcard table is ready.');
});

export { DB };










