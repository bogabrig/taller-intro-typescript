export { }

interface User {
  id: string
  firstName: string
  lastName: string
}

// Cómo crear un nuevo objeto que solo tenga el nombre

type FullName = Pick<User, 'firstName' | 'lastName'>

const fullName: FullName = {

}

console.log(fullName)