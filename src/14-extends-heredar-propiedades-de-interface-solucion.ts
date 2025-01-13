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
console.log(userAndPosts)