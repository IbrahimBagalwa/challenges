const getFirstElement = (array: (string | number)[]) => {
  return array[0]
}

const arry = ['a', 'b', 'c', 'd', 'e']
const firstString = getFirstElement(arry)
console.log(firstString)

const numbers = [1, 2, 3, 4, 4, 4]
const firstNumber = getFirstElement(numbers)

console.log(firstNumber)

const getFirstElementGeneric = <T>(array: T[]) => {
  return array[0]
}

console.log(getFirstElementGeneric(arry))
console.log(getFirstElementGeneric(numbers))

type APIResponse<T> = {
  data: T
  isError: boolean
}

type UserResponse = APIResponse<{ name: string; id: number }>
type BlogResponse = APIResponse<{ title: string }>
type StatusResponse = APIResponse<{ status: number }>

const response: UserResponse = {
  data: {
    name: 'Ibrahim',
    id: 20,
  },
  isError: false,
}

const blogResponse: BlogResponse = {
  data: {
    title: 'manga',
  },
  isError: true,
}

const statusResponse: StatusResponse = {
  data: {
    status: 200,
  },
  isError: false,
}
