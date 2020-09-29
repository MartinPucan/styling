let author = {
	name: 'James',
	email: 'testovic@test.com',
	phone: '8732847328',
	work: 'programmer',

	get displayName() {
		return `${name.this} (${this.email})`; // that's called template strings
	}
}

// https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

console.log(author.displayName);




// let { name, email } = author;
// console.log(name, email);
