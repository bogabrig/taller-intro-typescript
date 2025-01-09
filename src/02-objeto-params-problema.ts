// Implicit 'any' type ts(7006)

export function sumarDosNumeros(params) {
  return params.primero + params.segundo
}

/* 
export function sumarNumeros(params) {
  return params.reduce((acc, curr) => acc + curr, 0)
}
 */