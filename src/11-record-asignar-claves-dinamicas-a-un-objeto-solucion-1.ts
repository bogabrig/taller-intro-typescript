export function createCache() {

  // Solución 1:
  // Asignarle un tipo genérico a cache
  // En este caso, el tipo de utilidad Record<key, value>

  const cache: Record<string, number> = {}

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

