const chunkArray = (arr, len) => {
  // Init chunked array
  const chunkedArr = []

  // Loop through array
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1]

    // Check if last and if last lenght is equal to the chunk len
    if (!last || last.length == len) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })

  return chunkedArr
}

module.exports = chunkArray