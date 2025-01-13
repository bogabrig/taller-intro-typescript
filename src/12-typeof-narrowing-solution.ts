// El operador typeof de JavaScript verifica el tipo en tiempo de ejecución
// Pero en TypeScript, typeof además verifica el tipo en tiempo de compilación
// permitiendo inferir tipado correctamente

export function montoActual(monto: number | { monto: number }) {
  if (typeof monto === 'object') {
    return monto.monto
  }
  return monto
}

console.log(montoActual(20) === 20)
console.log(montoActual({ monto: 20 }) === 20)

