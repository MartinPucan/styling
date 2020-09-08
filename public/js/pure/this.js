const video = {
	title: 'a',
	name: 'Breakpoint',
	play() {
		console.log(this);
	},
	resume() {
		console.log(this);
	}
};

video.stop = function () {
	console.table(this);
}

video.resume = function () {
	console.log(this);
}

video.play();

video.type = 'comedy';


// const video1 = video;

console.log(video);



let fun = function () {
	console.log(this);
}

fun();

let obj1 = { fun: fun };
let obj2 = { fun: fun };

obj1.fun();
obj2.fun();

console.log(fun === obj1.fun === obj2.fun);
