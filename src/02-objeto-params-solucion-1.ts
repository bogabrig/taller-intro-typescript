// Implicit 'any' type ts(7006)
// Solución 1: tipar los parámetros

export function sumarDosNumeros(params: { primero: number, segundo: number }) {
  return params.primero + params.segundo
}

/*
export function sumarNumeros(params: number[]) {
  return params.reduce((acc: number, curr: number) => acc + curr, 0)
}
 */

