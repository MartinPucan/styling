let f1 = function () {
	alert(this.name);
}

let foo = { name: "foo" }
let bar = { name: "bar" }
f1.call(foo);

let f2 = f1.bind(bar);
f2();
