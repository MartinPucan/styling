// const video = {
// 	title: 'a',
// 	play() {
// 		console.log(this);
// 	}
// };
//
// video.stop = function () {
// 	console.log(this);
// }
//
// video.play();

let fun = function () {
	alert(this);
}
fun();

let obj1 = { fun: fun };
let obj2 = { fun: fun };

obj1.fun();
obj2.fun();

// fun == obj1.fun == obj2.fun
