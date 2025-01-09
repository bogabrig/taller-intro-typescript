// Property is missing in type / ts(2345)

export function getName(params: { firstName: string, lastName: string }) {
  if (params.lastName) {
    return `${params.firstName} ${params.lastName}`
  }
  return params.firstName
}

const name = getName({ firstName: "Matias" })
