import { defineDb, defineTable, column } from 'astro:db';


const Users = defineTable({
  columns: {
    Email: column.text(),
    Password: column.text()
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {Users}
});
