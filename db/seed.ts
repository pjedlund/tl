import { db, Book, Comment } from 'astro:db';

export default async function() {
	await db.insert(Book).values([
		{ id: 1, titleRU: "ОДУМАЙТЕСЬ", titleEN: "Bethink Yourself"},
		{ id: 2, titleRU: "Анна Каренина", titleEN: "Anna Karenina"},
	]);

	await db.insert(Comment).values([
		{ bookId: 1, body: 'Bethink Yourself comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
		{ bookId: 2, body: 'Anna Karenina comment. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
	])
}
