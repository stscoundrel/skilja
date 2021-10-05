const { chunkArray } = require('../src/chunk-array');

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const chunks = chunkArray(arrayA, 2)

test('Throws error on wrong argument type', () => {
  expect(() => {
    chunkArray(1)
  }).toThrow()
})

test('Throws error on missing argument', () => {
  expect(() => {
    chunkArray()
  }).toThrow()
})

test('Chunks array into given amount of pieces', () => {
  expect(chunks.length).toBe(5)
})

test('Chunks have correct content', () => {
  expect(chunks[0][0]).toBe(1)
  expect(chunks[0][1]).toBe(2)
  expect(chunks[1][0]).toBe(3)
  expect(chunks[1][1]).toBe(4)
})
