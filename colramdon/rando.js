const cuadrado = tf.tensor([
	[[1], [0]],
	[[0], [1]],
]);

/*const cuadrado =tf.tensor(
			[
				[
					[1, 1, 1],
					[0, 0, 0],
					[1, 1, 1],
					[0, 0, 0]
				],
				[ 
					[0, 0, 0],
					[1, 1, 1],
					[0, 0, 0],
					[1, 1, 1]
				],
				[ 
					[1, 1, 1],
					[0, 0, 0],
					[1, 1, 1],
					[0, 0, 0]
				]
			]);*/

const canvasCuadrado1 = document.getElementById("cuadrado");
tf.browser.toPixels(cuadrado, canvasCuadrado1).then(() => {
	// No es mala práctica limpiar y asegurarse de que tenemos todo bigMess.dispose();
	console.log("Tensores en memoria", tf.memory().numTensors);
});
/*const cuadrado = tf.tensor(	[ 
		[											
			[0, 125, 10], 
			[0, 0, 0]
		],
		[
			[0, 0, 0], 
			[1, 1, 1 ]
		] 
	],null, 'int32'); */

// crea un nuevo tensor multiplicandoló
//tf.tile(x, reps) x -> tensor dado, o array; reps -> numero de réplicas por dimension
//tensor.tile(reps) reps -> numero de réplicas por dimension [reps]

//https://js.tensorflow.org/api/latest/#Tensors-Random

cuadrado.print();
const cuadradoGrande = cuadrado.tile([200, 200, 1]);
/*document.getElementById("ItemPreview").src = "data:image/png;base64," + grande.print();
		console.log(grande);*/

const canvasCuadrado = document.getElementById("imagen");
tf.browser.toPixels(cuadradoGrande, canvasCuadrado).then(() => {
	// No es mala práctica limpiar y asegurarse de que tenemos todo bigMess.dispose();
	console.log("Tensores en memoria", tf.memory().numTensors);
});

//crear una imagen con un color o conbinación de colores, quiero cargar los valores de RGB y poder conbinar colores
//siempre controlando la cantidad de tensores creados

//tf.randomUniform([400, 400, 4]);
//const bigMess = tf.randomUniform([400, 400, aca puede ser 1 3 4]);

// tf.random.uniform(shape, minval=0, maxval=None, dtype=tf.dtypes.float32, seed=None, name=None)
const bigMess = tf.randomUniform([400, 400, 4]);
//const bigMess = tf.randomUniform([400, 400, 1], 4, 255, 'int32');
const myCanvas = document.getElementById("aleatoriedad");
tf.browser.toPixels(bigMess, myCanvas).then(() => {
	// No es mala práctica limpiar y asegurarse de que tenemos todo bigMess.dispose();
	console.log("Tensores en memoria", tf.memory().numTensors);
});

console.log(tf.memory());

//tf.browser.toPixels()
//
