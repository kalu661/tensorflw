// convirtiendo cada input en una variable
async function funcionLineal() {
	let Input1 = parseInt(document.getElementById("num1d").value);
	let Input2 = parseInt(document.getElementById("num2d").value);
	let Input3 = parseInt(document.getElementById("num3d").value);
	let Input4 = parseInt(document.getElementById("num4d").value);
	let Input5 = parseInt(document.getElementById("num5d").value);
	let Input6 = parseInt(document.getElementById("num5d").value);
	// Rellenando los tensores
	const inputs1 = tf.tensor1d([Input1, Input2, Input3]);
	const inputs2 = tf.tensor1d([Input4, Input5, Input6]);
	// Creando multiply layer, Nos permite multiplicar
	const multiplyLayer = tf.layers.multiply();
	// Multiply inputs (tensores)
	const product = multiplyLayer.apply([inputs1, inputs2]);
	document.getElementById("salida").innerHTML = product;
	// Print product
	console.log(product);
}
