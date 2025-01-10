// Expected x arguments, but got y. 
// An argument was expected but not provided / ts(2554)

export function getName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}

const name = getName("Matias")
const name2 = getName("Matias", "Baldanza")

// Hay un detalle. No se puede pasar el argumento opcional antes del requerido
// Error ts(1016): A required parameter cannot follow an optional parameter.
// Esto es para evitar la ambigüedad posicional de los argumentos

// Una solución es usar un objeto para los parametros

// Otra es declarar un parámetro como una unión entre el tipo y undefined
// pero esto requiere pasar undefined como valor si no se va a pasar un valor

export function getName2(firstName?: string, lastName: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}

