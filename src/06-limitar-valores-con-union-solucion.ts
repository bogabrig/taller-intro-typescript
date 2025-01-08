export { }
// directiva @ts-expect-error

interface User {
  id: number
  firstName: string
  lastName: string
  isAdmin: boolean
  role: "admin" | "user" | "guest"
}

const defaultUser: User = {
  id: 1,
  firstName: "Matias",
  lastName: "Baldanza",
  isAdmin: true,
  // @ts-expect-error
  role: "Rol que no existe"
}

// En los union types podemos agregar cualquier tipo de valor.

let role: "admin" | "user" | { wow: boolean }

role = "admin"
role = "user"
role = { wow: true }
role = { wow: 23 }

