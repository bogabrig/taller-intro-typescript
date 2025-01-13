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
