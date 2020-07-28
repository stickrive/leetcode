export const productNumArr = () => {
  const arrLength = Math.ceil(Math.random() * 10)
  let res = []
  for (let i = 0; i < arrLength; i++) {
    let item = Math.ceil(Math.random() * 10)
    res = [item, ...res]
  }
  return res
}

export const findNum = (arr) => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = i
    } else {
      return arr[i]
    }
  }
}
