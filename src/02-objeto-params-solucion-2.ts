// Implicit 'any' type ts(7006)
// Solución 2: crear un tipo para la función

type sumarDosNumerosParams = {
  primero: number;
  segundo: number;
}

export function sumarDosNumeros(params: sumarDosNumerosParams) {
  return params.primero + params.segundo
}

/*

type sumarNumerosParams = number[]

export function sumarNumeros(params: sumarNumerosParams) {
  return params.reduce((acc: number, curr: number) => acc + curr, 0)
}
 */


