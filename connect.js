import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();


const DB = new sql3.Database('./mydata.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, connected);

function connected(err) {
  if (err) {
    console.log('Connection error:', err.message);
    return;
  }
  console.log('Connected to the database.');
}


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










