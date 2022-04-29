// Create a rank-2 tensor (matrix) matrix tensor from a multidimensional array.
const a = tf.tensor([
	[1, 2],
	[3, 4],
]);
console.log("shape:", a.shape);
a.print();

// Or you can create a tensor from a flat array and specify a shape.
const shape = [2, 2];
const b = tf.tensor([1, 2, 3, 4], shape);
console.log("shape:", b.shape);
b.print();

const a = tf.tensor(
	[
		[1, 2],
		[3, 4],
	],
	[2, 2],
	"int32"
);
console.log("shape:", a.shape);
console.log("dtype", a.dtype);
a.print();

const a = tf.tensor([
	[1, 2],
	[3, 4],
]);
console.log("a shape:", a.shape);
a.print();

const b = a.reshape([4, 1]);
console.log("b shape:", b.shape);
b.print();

const a = tf.tensor([
	[1, 2],
	[3, 4],
]);
// Returns the multi dimensional array of values.
a.array().then((array) => console.log(array));
// Returns the flattened data that backs the tensor.
a.data().then((data) => console.log(data));

const a = tf.tensor([
	[1, 2],
	[3, 4],
]);
// Returns the multi dimensional array of values.
console.log(a.arraySync());
// Returns the flattened data that backs the tensor.
console.log(a.dataSync());

const x = tf.tensor([1, 2, 3, 4]);
const y = x.square(); // equivalent to tf.square(x)
y.print();

const a = tf.tensor([1, 2, 3, 4]);
const b = tf.tensor([10, 20, 30, 40]);
const y = a.add(b); // equivalent to tf.add(a, b)
y.print();

// Memoria
const a = tf.tensor([
	[1, 2],
	[3, 4],
]);
a.dispose(); // Equivalent to tf.dispose(a)

console.log(tf.memory());
