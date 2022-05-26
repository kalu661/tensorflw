// Este  código  crea  un  tensor  1D  `Float32`
const a = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0]);
//  Este  código  crea  un  tensor  2D  `Float32`
const b = tf.tensor([
	[1, 0, 0],
	[0, -1, 0],
	[1, 0, 0],
]);
//  Esto  hace  lo  mismo  que  el  anterior  pero  con  una  matriz //  de
// entrada  1D  que  se  convierte  en  un  tensor  2D  `Float32`
const c = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3]);
// Tabla  3-1.  Tabla  de  valor  a  número
// Machine Translated by Google

// crear  fácilmente  un  nuevo  tensor  con  el  tipo  y  los  datos  correctos.  Para  esto,  puede  usar  asType.
//  Este  código  convierte  la  matriz  de  entrada  1D  en  un  tensor  2D  Int32
const d = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], "int32  ");
