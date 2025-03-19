import { defineDb, defineTable, column } from 'astro:db';

const Book = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    titleRU: column.text(),
    titleEN: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    bookId: column.number({ references: () => Book.columns.id }),
    body: column.text(),
  }
});

export default defineDb({
  tables: { Book, Comment }
})
