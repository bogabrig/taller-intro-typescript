// Implicit 'any' type ts(7006)
// Solución 3: usar una interfaz

interface SumarDosNumerosParams {
  primero: number
  segundo: number
}

export function sumarDosNumeros(params: SumarDosNumerosParams) {
  return params.primero + params.segundo
}


// Las interfaces tienen una sintaxis distinta a los tipos, 
// pero son muy similares.

// Las interfaces se pueden usar para tipar parámetros de funciones,
// pero también se pueden usar para tipar objetos.

