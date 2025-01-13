export function montoActual(monto: number | { monto: number }) {
  // if (monto.monto) {
  //   return monto.monto
  // }
  // return monto
}

console.log(montoActual(20) === 20)
console.log(montoActual({ monto: 20 }) === 20)

