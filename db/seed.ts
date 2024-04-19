import { db, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Users).values([
		{ email: 1, body: 'Hope you like Astro DB!' },
		{ email: 2, body: 'Enjoy!'}
	  ])
}
