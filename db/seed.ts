import {db, courseData} from 'astro:db';

export default async function(){
    await db.insert(courseData).values({id: '2222222', name:'classbz'})
}
