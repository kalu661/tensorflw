let x_pos = [];
let y_pos = [];

let w, b;

const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

function setup() {
	createCanvas(800, 600);
	background(0);
	w = tf.variable(tf.scalar(random(1)));
	b = tf.variable(tf.scalar(random(1)));
}

function predecir(x) {
	const xs = tf.tensor1d(x);
	// y=w*x + b
	const ys = xs.mul(w).add(b);
	return ys;
}

function mousePressed() {
	let x = map(mouseX, 0, width, 0, 1);
	let y = map(mouseY, 0, height, 1, 0);
	x_pos.push(x);
	y_pos.push(y);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(10);
	for (i = 0; i < x_pos.length; i++) {
		let px = map(x_pos[i], 0, 1, 0, width);
		let py = map(y_pos[i], 0, 1, height, 0);
		point(px, py);
	}
	tf.tidy(() => {
		if (x_pos.length > 0) {
			const ys = tf.tensor1d(y_pos);
			optimizer.minimize(() => predecir(x_pos).sub(ys).square().mean());
		}
	});
	let y_pred = tf.tidy(() => predecir([0, 1]));
	let val_y_pred = y_pred.dataSync();
	y_pred.dispose();
	let x1 = map(0, 0, 1, 0, width);
	let x2 = map(1, 0, 1, 0, width);
	let y1 = map(val_y_pred[0], 0, 1, height, 0);
	let y2 = map(val_y_pred[1], 0, 1, height, 0);
	line(x1, y1, x2, y2);
}
