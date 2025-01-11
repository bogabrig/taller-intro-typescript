// Property x does not exist on type y / ts(2339)

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin"
  posts: Array<Post>
}

interface Post {
  id: number;
  title: string;
}

export function createUser(): User {
  return {
    id: 1,
    firstName: "Matias",
    lastName: "Baldanza",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "Aprender TypeScript es fácil",
      },
      {
        id: 2,
        title: "Conceptos avanzados de TypeScript",
      },
    ]
  }
}

const user = createUser()

console.log(typeof user.id)
console.log(typeof user.firstName)
console.log(typeof user.lastName)
console.log(typeof user.role)
console.log(typeof user.posts)