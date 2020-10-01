let author = {
	name: 'James',
	email: 'testovic@test.com',
	phone: '8732847328',
	work: 'programmer',

	get displayName() {
		return `${this.name} (${this.email})`; // that's called template strings
	}
}

// https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

console.log(author.displayName);

let { work, phone } = author;
console.log(work, phone);
