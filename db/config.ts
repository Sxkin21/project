import { defineDb, defineTable, column } from 'astro:db';


const Users= defineTable({
  columns: {
    email: column.text(),
    password: column.text()
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {Users}
});
