console.log('Hello from Nerdbord!');

const boxBorder = document.querySelector('.box');

setInterval(() => {
	const colors = ['lightgreen', 'lightcoral', 'lightsalmon', 'lightblue'];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	console.log(randomColor);

    boxBorder.style.border= `40px solid ${randomColor}`
}, 4000);
