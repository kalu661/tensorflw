// FORMULA 2x-2
// Creamos el modelo
const modelo = tf.sequential();
//se agrega una capa
modelo.add(
	tf.layers.dense({
		inputShape: 1,
		units: 1,
	})
);

modelo.compile({
	optimizer: "sgd",
	loss: "meanSquaredError",
});

// Valores de X
const xs = tf.tensor([0, 1, 2, 3, 4, 5, 6, 7]);
// Valores de Y
const ys = tf.tensor([-2, 0, 2, 4, 6, 8, 10, 12]);
// Entrenamos el modelo
modelo
	.fit(xs, ys, { epochs: 300 })

	.then(() => {
		//console.log(history)
		//Le pasamos los Valores de X
		const TensorX = tf.tensor([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		//Hace la prediccion
		const datosTensor = modelo.predict(TensorX).dataSync();

		//console.log(datosTensor);

		//Se Mapean los valores de X e Y en consola
		datosTensor.map((num, i) => {
			//document.getElementById("Tensores").innerHTML =`Cuando X es: ${TensorX.dataSync()[i]}, Y es: ${Math.round(num)}`;
			console.log("===================");
			console.log(
				`Cuando X es: ${TensorX.dataSync()[i]}, Y es: ${Math.round(num)}`
			);
			console.log("===================");
		});

		//console.log(datosTensor)

		//Desestructuración
		const [...valores] = datosTensor;
		//console.log(valores)

		//Separar los valores en x e Y
		const res = valores.map((y, x) => ({ x, y }));
		console.log("Resultado ", res);
		//console.log(res);

		//////////////////////////////////////////
		const series = ["y=2x-2"];
		const data = {
			values: [res],
			series,
		};

		const surface = {
			name: "Brito Enzo",
			tab: "Grafico Del Tensor",
		};
		tfvis.render.linechart(surface, data);
		//////////////////////
		console.log(
			"[1]Tensores: ",
			tf.memory().numTensors,
			", [1]Memoria: ",
			tf.memory().numBytes
		);
		//////////////////////

		// Limpiamos los tensores.
		tf.dispose([xs, ys, modelo, datosTensor, TensorX]);

		//////////////////////
		console.log(
			"[2]Tensores: ",
			tf.memory().numTensors,
			", [2]Memoria: ",
			tf.memory().numBytes
		);
	});

//=================================================================================
//Perdidas

const model = tf.sequential({
	layers: [
		tf.layers.dense({
			inputShape: 1,
			units: 1,
			activation: "relu",
		}),
	],
});
model.compile({
	optimizer: "sgd",
	loss: "meanSquaredError",
	metrics: ["accuracy"],
});

//const data = tf.randomNormal([100, 784]);
//const labels = tf.randomUniform([100, 10]);

function onBatchEnd(batch, logs) {
	console.log("Accuracy", logs.acc);
}

const surface = {
	name: "Grafico De pérdida",
	tab: "Grafico De pérdida",
};
// Train for 5 epochs with batch size of 32.
model.fit(xs, ys, {
	epochs: 10,
	batchSize: 32,
	callbacks: tfvis.show.fitCallbacks(surface, ["loss", "acc"]),
});
