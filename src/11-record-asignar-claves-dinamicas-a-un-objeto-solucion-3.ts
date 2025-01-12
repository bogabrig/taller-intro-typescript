// Solución 3:
// Usar una interface con un index signature
// También funciona con un type

interface Cache {
  [key: string]: number
}

export function createCache() {

  const cache: Cache = {}

  const add = (key: string, value: any) => {
    cache[key] = value
  }

  const remove = (key: string) => {
    delete cache[key]
  }

  return {
    cache,
    add,
    remove,
  }
}

// cache está inferido como un objeto vacío {}
const cache = createCache()

cache.add("a", 1)
cache.add("b", 2)

console.log(cache.cache["a"])
cache.remove("b")

