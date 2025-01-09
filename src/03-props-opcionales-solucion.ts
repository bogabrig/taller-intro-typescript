// Property is missing in type / ts(2345)

export function getName(params: { firstName: string, lastName?: string }) {
  if (params.lastName) {
    return `${params.firstName} ${params.lastName}`
  }
  return params.firstName
}

const name = getName({ firstName: "Matias" })

// Solución: usar el operador de propagación opcional
// para indicar que el parámetro es opcional

// El operador de propagación opcional es el signo de interrogación ?
// y se usa para indicar que el parámetro es opcional.

// Si el parámetro es opcional, no es necesario pasarlo.

// Alternativa con tipos:
type NameParams = {
  firstName: string,
  lastName?: string
}

// Alternativa con interfaces:

interface NameParams {
  firstName: string
  lastName?: string
}

