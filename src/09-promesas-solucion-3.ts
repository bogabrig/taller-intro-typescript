// The return type of an async function or method must be the global Promise<T> type. - ts(1064)

interface Character {
  name: string
  height: string
  weight: string
  gender: string
  race: string
  facialHair: string
  hair_color: string
  skin_color: string
  eye_color: string
  age: number
  abilities: string[]
  stats: {
    strength: number
    speed: number
    intelligence: number
    agility: number
    endurance: number
    health: number
  }
  perks: string[]
}

export async function fetchCharacter() {

  // Solución 3: 
  // Tipar el data response del fetch
  // Al retornar data, TypeScript infiere que la función es 
  // de tipo Promise<T> donde T es el tipo asignado a data

  const data: Character = await fetch("https://swapi.py4e.com/api/people/1")
    .then(
      (res) => {
        return res.json();
      }
    )
  return data
}
