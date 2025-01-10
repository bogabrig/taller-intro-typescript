// Missing properties in type / ts(2379)

interface User {
  id: number
  firstName: string
  lastName: string
  isAdmin: boolean
}

const defaultUser: User = {}

export function getUserId(user: User) {
  return user.id
}

const userId = getUserId(defaultUser)
