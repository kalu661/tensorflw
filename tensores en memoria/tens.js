console.log("4 tensores dentro de un tidy");
const y = tf.tidy(() => {
	const one = tf.tensor([1, 3, 5, 7]);
	const a = tf.tensor([11, 9, 3, 1]);
	const b = tf.tensor([11, 3, 3, 1]);
	const c = tf.tensor([4, 42, 3, 4]);
	console.log(tf.memory());
	console.log("numTensors (in tidy): " + tf.memory().numTensors);
	tf.dispose(a);
	console.log("");
	console.log("Se elimina un tesor");
	console.log(tf.memory());
	console.log("numTensors (in tidy): " + tf.memory().numTensors);
	tf.dispose(one);
	tf.dispose(b);
	tf.dispose(c);
	console.log("");
	console.log("Se eliminaron los 4 tensores");
	console.log(tf.memory());
	console.log("numTensors (in tidy): " + tf.memory().numTensors);
});
console.log("");
console.log("Array de tensores");

let rry = [];

rry = tf.tensor([[[1, 2, 3, 6]]]).print();
console.log(tf.memory());
