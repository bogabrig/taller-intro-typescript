export function createCache() {

  // Solución 2:
  // Usar un index signature para definir el tipo de datos de 'cache'

  const cache: {
    [key: string]: number
  } = {}

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

