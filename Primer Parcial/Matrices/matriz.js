// Multiplicacion con JavaScript
console.log("Multiplicacion con JavaScript");
m1 = [
	[1, 2, 3],
	[3, 2, 1],
	[5, 2, 4],
];
m2 = [
	[7, 8, 2],
	[9, 10, 9],
	[11, 12, 6],
];

fil_m1 = m1.length;
col_m1 = m1[0].length;

fil_m2 = m2.length;
col_m2 = m2[0].length;

let multiplicacion = new Array(fil_m1);
for (x = 0; x < multiplicacion.length; x++)
	multiplicacion[x] = new Array(col_m2).fill(0);

for (x = 0; x < multiplicacion.length; x++) {
	for (y = 0; y < multiplicacion[x].length; y++) {
		for (z = 0; z < col_m1; z++) {
			multiplicacion[x][y] = multiplicacion[x][y] + m1[x][z] * m2[z][y];
		}
	}
}
console.log(multiplicacion);

// Multiplicacion con TernsorFlow
console.log("Multiplicacion con TernsorFlow");
const matrz1 = [
	[1, 2, 3],
	[3, 2, 1],
	[5, 2, 4],
];
const matrz2 = [
	[7, 8, 2],
	[9, 10, 9],
	[11, 12, 6],
];

tf.matMul(matrz1, matrz2).print();
