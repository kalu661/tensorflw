// // Define input, which has a size of 5 (not including batch dimension).
// const input = tf.input({ shape: [5] });

// // First dense layer uses relu activation.
// const denseLayer1 = tf.layers.dense({ units: 10, activation: "relu" });
// const denseLayer2 = tf.layers.dense({ units: 4, activation: "softmax" });

// // Obtain the output symbolic tensor by applying the layers on the input.
// const output = denseLayer2.apply(denseLayer1.apply(input));

// // Create the model based on the inputs.
// const model = tf.model({ inputs: input, outputs: output });

// model.predict(tf.ones([2, 5])).print();

// const model = tf.sequential();
// model.add(
// 	tf.layers.dense({ inputShape: [784], units: 32, activation: "relu" })
// );
// model.add(tf.layers.dense({ units: 10, activation: "softmax" }));

// model.weights.forEach((w) => {
// 	console.log(w.name, w.shape);
// });

/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
// async function getData() {
// 	const carsDataResponse = await fetch(
// 		"https://storage.googleapis.com/tfjs-tutorials/carsData.json"
// 	);
// 	const carsData = await carsDataResponse.json();
// 	const cleaned = carsData
// 		.map((car) => ({
// 			mpg: car.Miles_per_Gallon,
// 			horsepower: car.Horsepower,
// 		}))
// 		.filter((car) => car.mpg != null && car.horsepower != null);

// 	return cleaned;
// }

// async function run() {
// 	// Load and plot the original input data that we are going to train on.
// 	const data = await getData();
// 	const values = data.map((d) => ({
// 		x: d.horsepower,
// 		y: d.mpg,
// 	}));

// 	tfvis.render.scatterplot(
// 		{ name: "Horsepower v MPG" },
// 		{ values },
// 		{
// 			xLabel: "Horsepower",
// 			yLabel: "MPG",
// 			height: 300,
// 		}
// 	);

// 	// More code will be added below
// }

// document.addEventListener("DOMContentLoaded", run);

function createModel() {
	// Create a sequential model
	const model = tf.sequential();

	// Add a single input layer
	model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));

	// Add an output layer
	model.add(tf.layers.dense({ units: 1, useBias: true }));

	return model;
}

function tensor() {
	const model = tf.sequential();
	model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));
	model.add(tf.layers.dense({ units: 1, useBias: true }));
	model.add(tf.layers.dense({ units: 1 }));
}
// Create the model
const model = createModel();
tfvis.show.modelSummary({ name: "Model Summary" }, model);


