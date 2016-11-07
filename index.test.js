const track = require('./tracker')
const mod = require('.')

jest.mock('./data', () => {
  track('data-mock')
  return {isMock: true}
})

test('use mock', () => {
  expect(mod).toEqual({data: {isMock: true}})

  // here's the key. If you were to follow the require codepath, the `data.js` module _should_ add itself to the tracker
  // before the call to `jest.mock` even happens, but I'm guessing Jest does some special stuff to make it so when you
  // call `jest.mock`, it does its mocking magic before any require statements are resolved. My guess is it's a babel
  // plugin of some kind... maybe? :)
  expect(track.tracks.includes('data')).toBe(false)

  expect(track.tracks).toEqual([
    'data-mock',
    'index'
  ])
})
