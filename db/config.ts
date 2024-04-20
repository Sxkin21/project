import { defineDb, defineTable, column } from 'astro:db';




<<<<<<< HEAD
const users= defineTable({
  columns: {
    email: column.text(),
    password: column.text()
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {users}
=======
// https://astro.build/db/config
export default defineDb({
  tables: {}
>>>>>>> 0300e722a1287109d9083dd4060cb2e9fdbeb789
});
