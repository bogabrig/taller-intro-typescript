
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

export function getDefaultUserAndPosts(): unknown {
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
