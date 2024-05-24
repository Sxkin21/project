import { defineDb, defineTable, column } from 'astro:db';



const users= defineTable({
  columns: {
    email: column.text(),
    password: column.text()
  }
})

const courseData=defineTable({
  columns: {
    name: column.text(),
    id: column.text()
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {users, courseData}
});
