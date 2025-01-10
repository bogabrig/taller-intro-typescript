// Expected x arguments, but got y. 
// An argument was expected but not provided / ts(2554)

export function getName(firstName: string, lastName: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}

const name = getName("Matias")
const name2 = getName("Matias", "Baldanza")
