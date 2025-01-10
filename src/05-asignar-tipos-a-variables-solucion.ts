// Missing properties in type / ts(2379)

interface User {
  id: number
  firstName: string
  lastName: string
  isAdmin: boolean
}

// Declarar el objeto con todas las propiedades requeridas
// El autocompletado de TypeScript es una ayuda

const defaultUser: User = {
  id: 1,
  firstName: "Matias",
  lastName: "Baldanza",
  isAdmin: true
}

export function getUserId(user: User) {
  return user.id
}

const userId = getUserId(defaultUser)
