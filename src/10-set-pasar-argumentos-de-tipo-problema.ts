export { }

// El tipo de datos de un Set se define al inicializar
// Si se agrega un dato de un tipo diferente al utilizado (string)
// querríamos que de un error, pero no lo da porque le asigna 'unknown'

const jugadores = new Set()

jugadores.add("Messi")
jugadores.add("Ronaldo")
jugadores.add("Neymar")

// @ts-expect-error
jugadores.add(1)

// Si lo convertimos en un array, lo hace como Array<unknown>
// Y permite asignarle otros tipos de datos sin dar error
const jugadoresArray = Array.from(jugadores)

// @ts-expect-error
jugadoresArray.push(23)
