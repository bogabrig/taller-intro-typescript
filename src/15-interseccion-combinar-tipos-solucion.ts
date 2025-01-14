// La propiedad id se repite en todas las interfaces
// Cómo podemos compartir esa definición de id en todas las interfaces?

interface User {
  id: string
  firstName: string
  lastName: string
}

interface Post {
  id: string
  title: string
  body: string
}

interface Comment {
  id: string
  body: string
}

// Podemos combinar tipos usando una intersección de tipos con el operador &
// Y también podemos agregar propiedades adicionales 
// Por ejemplo:
// :User & { posts: Post[] } & { comments: Comment[] }

export function getDefaultUserAndPosts(): User & { posts: Post[] } {
  return {
    id: '1',
    firstName: 'Matias',
    lastName: 'Baldanza',
    posts: [
      {
        id: '1',
        title: 'Aprender TypeScript es fácil',
        body: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
      }
    ]
  }
}

const userAndPosts = getDefaultUserAndPosts()
console.log(userAndPosts)