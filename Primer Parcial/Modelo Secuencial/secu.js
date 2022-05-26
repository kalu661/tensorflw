async function funcionLineal() {
	let num = parseInt(document.getElementById("number").value);
	//modelo secuencial
	const modelo = tf.sequential();
	//se agrega una capa
	modelo.add(tf.layers.dense({ units: 1, inputShape: [1] }));
	modelo.compile({
		loss: "meanSquaredError",
		optimizer: "sgd",
	});
	const xs = tf.tensor2d([-1, 0, 1], [3, 1]);
	const ys = tf.tensor2d([1, 0, 3], [3, 1]);
	await modelo.fit(xs, ys, { epochs: 800 });
	document.getElementById("salida").innerHTML = modelo.predict(
		tf.tensor2d([num], [1, 1])
	);
}
