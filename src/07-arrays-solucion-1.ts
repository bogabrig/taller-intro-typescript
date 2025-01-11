// Missing properties in type / ts(2379)

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];  // Array de posts con sintaxis de corchetes
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
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
  ],
}