// directiva @ts-expect-error

interface User {
  id: number
  firstName: string
  lastName: string
  isAdmin: boolean
  role: string   // Cómo limitamos los valores posibles para 'role'?
}

const defaultUser: User = {
  id: 1,
  firstName: "Matias",
  lastName: "Baldanza",
  isAdmin: true,
  // @ts-expect-error
  role: "Rol que no existe"
}

export function userPermissions(user: User) {
  switch (user.role) {
    case "admin":
      return "Admin"
    case "user":
      return "User"
    default:
      return "Unknown"
  }
}

const permissions = userPermissions(defaultUser)
console.log(permissions)