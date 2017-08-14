function findMinAndRemove (array) {
  let index = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[index]) {
      index = i
    }
  }

  let min = array[index]
  array.splice(index, 1)
  return min
}

function insertionSort (array) {
  let min
  let sorted = []

  while (array.length !== 0) {
    min = findMinAndRemove(array)
    sorted.push(min)
  }

  return sorted
}
