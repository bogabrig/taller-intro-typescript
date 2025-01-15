export { }

interface User {
  id: string
  firstName: string
  lastName: string
}

// Cómo crear un nuevo objeto que solo tenga el nombre

type FullName = Omit<User, 'id'>

const fullName: FullName = {

}

console.log(fullName)