window.addEventListener("load", function () {
	tf.tidy(() => {
		// Simply read from the DOM
		const gantImage = document.getElementById("gant");
		const gantTensor = tf.browser.fromPixels(gantImage);
		console.log(
			`Successful conversion from DOM to a ${gantTensor.shape} tensor`
		);
		// Now load an image object in JavaScript
		const cake = new Image();
		cake.crossOrigin = "anonymous";
		// cake.src = "/Imagen a tensor/img/1173121.jpg";
		cake.onload = () => {
			const cakeTensor = tf.browser.fromPixels(cake);
			document.getElementById("salida").innerHTML = console.log(
				`Successful conversion from Image() to a ${cakeTensor.shape} tensor`
			);
		};
	});
});
