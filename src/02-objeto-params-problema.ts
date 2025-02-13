// Implicit 'any' type ts(7006)
interface SumarDosNumerosParams2 {
  primero: number;
  segundo: number;
}
type SumarDosNumerosParams = { primero: number; segundo: number };

export function sumarDosNumeros(params: { primero: number; segundo: number }) {
  return params.primero + params.segundo;
}
export function sumarDosNumeros2(params: SumarDosNumerosParams) {
  return params.primero + params.segundo;
}
export function sumarDosNumeros3(params: SumarDosNumerosParams2) {
  return params.primero + params.segundo;
}
/* 
export function sumarNumeros(params) {
  return params.reduce((acc, curr) => acc + curr, 0)
}
 */
