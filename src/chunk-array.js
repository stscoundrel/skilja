/**
 * Chunk array into smaller arrays.
 */
const chunkArray = (original, limit = 1) => {
  if (!original) throw new Error('Missing argument')
  if (!Array.isArray(original)) throw new Error('First argument must be of type array')

  const chunkedArrays = []

  while (original.length > 0) {
    chunkedArrays.push(original.splice(0, limit))
  }

  return chunkedArrays
}

module.exports = {
  chunkArray,
}
