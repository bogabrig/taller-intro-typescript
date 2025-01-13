// La propiedad id se repite en todas las interfaces
// Cómo podemos compartir esa definición de id en todas las interfaces?

interface Base {
  id: string
}

interface User extends Base {
  firstName: string
  lastName: string
}

interface Post extends Base {
  id: string
  title: string
  body: string
}

interface Comment extends Base {
  id: string
  body: string
}
