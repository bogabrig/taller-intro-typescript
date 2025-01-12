export { }

// El tipo de datos de un Set se define al inicializar
// Si se agrega un dato de un tipo diferente al utilizado (string)
// querríamos que de un error, pero no lo da porque le asigna 'unknown'

// Asignamos un tipo al set Utilizando un argumento de tipo
// para restringir los tipos de datos que se pueden agregar

const jugadores = new Set<string>()

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

// Set está definido con una interfaz genérica, así

interface Set<T> { }

//otro ejemplo con múltiples argumentos de tipo

const map = new Map<string, number>()
map.set("a", 1)
map.set("b", 2)

// @ts-expect-error
map.set(1, "a")

// Short con buenas prácticas para dar nombre a argumentos genéricos
// https://www.tiktok.com/@donwebcloud/video/7459424438006680837
