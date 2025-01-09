// Implicit 'any' type ts(7006)

export function sumarDosNumeros(a: number, b: number) {
  return a + b;
}

/*

  El error "implicit type 'any'" ocurre cuando no agregamos
  una anotación de tipo a los parámetros de una función.

  Esto ocurre porque tenemos habilitado el `strict mode` en tsconfig.ts

  // tsconfig.json
  {
    "compilerOptions": {
      "strict": true
    }
  }

  En ese caso, se infiere que el tipo de los argumentos es 'any'
  'any' deshabilita el chequeo de tipado para ese identificador

*/

// El tipado nos permite detectar errores en tiempo de compilación

// let result = sumarDosNumeros(1, 23)
// result.toUpperCase()