// Your code here
const mapToNegativize = (array) => {
  const newArray = []
  for (const element of array) {
    newArray.push(element * -1)
  }
  return newArray
}

const mapToNoChange = (array) => {
  const newArray = []
  for (const element of array) {
    newArray.push(element)
  }
  return newArray
}

const mapToDouble = (array) => {
  const newArray = []
  for (const element of array) {
    newArray.push(element * 2)
  }
  return newArray
}

const mapToSquare = (array) => {
  const newArray = []
  for (const element of array) {
    newArray.push(element ** 2)
  }
  return newArray
}

const reduceToTotal = (array, start) => {
  let total = start || 0
  for (const element of array) {
    total += element
  }
  return total
}

const reduceToAllTrue = (array) => {
  for (const element of array) {
    if (element) {
      continue
    } else {
      return false
    }
  }
  return true
}

const reduceToAnyTrue = (array) => {
  for (const element of array) {
    if (element) {
      return true
    } else {
      continue
    }
  }
  return false
}
