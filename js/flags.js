const flag1 = document.querySelector('.flag1');
const flag2 = document.querySelector('.flag2');
const flag3 = document.querySelector('.flag3');
const flag4 = document.querySelector('.flag4');
const flag5 = document.querySelector('.flag5');
const flag6 = document.querySelector('.flag6');


let cordX = 217;
let cordY = -320;
let flag1X = cordX;
let flag1Y = cordY;
let flag2X = cordX;
let flag2Y = cordY;
let flag3X = cordX;
let flag3Y = cordY;
let flag4X = cordX;
let flag4Y = cordY;
let flag5X = cordX;
let flag5Y = cordY;
let flag6X = cordX;
let flag6Y = cordY;


function start() {
	setTimeout(() => {
		setInterval(() => {
			if (flag1X == 460) {
				clearInterval();
			} else {
				flag1X++;
				flag1Y = flag1Y + 0.4;
				flag1.style.right = flag1X + 'px';
				flag1.style.top = flag1Y + 'px';
			}
		}, 5);
	}, 3000);
	setTimeout(() => {
		setInterval(() => {
			if (flag2X == 425) {
				clearInterval();
			} else {
				flag2X++;
				flag2Y = flag2Y - 0.3;
				flag2.style.right = flag2X + 'px';
				flag2.style.top = flag2Y + 'px';
			}
		}, 5)
	}, 3400);

	setTimeout(() => {
		setInterval(() => {
			if (flag3Y == -505) {
				clearInterval();
			} else {
				flag3Y--;
				flag3.style.top = flag3Y + 'px';
			}
		}, 5)
	}, 3800);

	setTimeout(() => {
		setInterval(() => {
			if (flag4X == 20) {
				clearInterval();
			} else {
				flag4X--;
				flag4Y = flag4Y - 0.3;
				flag4.style.right = flag4X + 'px';
				flag4.style.top = flag4Y + 'px';
			}
		}, 5)
	}, 4200);

	setTimeout(() => {
		setInterval(() => {
			if (flag5X == 22) {
				clearInterval();
			} else {
				flag5X--;
				flag5Y = flag1Y + 0.4;
				flag5.style.right = flag5X + 'px';
				flag5.style.top = flag5Y + 'px';
			}
		}, 5)
	}, 4600);

	setTimeout(() => {
		setInterval(() => {
			if (flag6Y == -45) {
				clearInterval();
			} else {
				flag6Y++;
				flag6.style.top = flag6Y + 'px';
			}
		}, 5)
	}, 4600);
}

start();
setTimeout(() => {
	let fFlag1 = 1.3;
	let fFlag2 = 2.1;
	let fFlag3 = 3.2;
	let fFlag4 = 4.3;
	let fFlag5 = 5;
	let fFlag6 = 6.2;
	const s = 2 * Math.PI / 180;
	setInterval(function () {
		fFlag1 += s;
		fFlag2 += s;
		fFlag3 += s;
		fFlag4 += s;
		fFlag5 += s;
		fFlag6 += s;
		flag1.style.right = 220 + 225 * Math.sin(fFlag1) + 'px';
		flag1.style.top = -290 + 225 * Math.cos(fFlag1) + 'px';
		flag2.style.right = 210 + 225 * Math.sin(fFlag2) + 'px';
		flag2.style.top = -290 + 225 * Math.cos(fFlag2) + 'px';
		flag3.style.right = 214 + 225 * Math.sin(fFlag3) + 'px';
		flag3.style.top = -290 + 225 * Math.cos(fFlag3) + 'px';
		flag4.style.right = 210 + 225 * Math.sin(fFlag4) + 'px';
		flag4.style.top = -290 + 225 * Math.cos(fFlag4) + 'px';
		flag5.style.right = 220 + 225 * Math.sin(fFlag5) + 'px';
		flag5.style.top = -290 + 225 * Math.cos(fFlag5) + 'px';
		flag6.style.right = 214 + 225 * Math.sin(fFlag6) + 'px';
		flag6.style.top = -290 + 225 * Math.cos(fFlag6) + 'px';
	}, 30)
}, 6000);


