const track = require('./tracker')
const mod = require('.')

test('no mock', () => {
  expect(mod).toEqual({
    data: {
      foo: 'bar',
      baz: 'buzz',
    }
  })
  // just to make certain we're not making a call to `jest.mock` in this file, so the tracker doesn't have the mock's
  // version.
  expect(track.tracks.includes('data-mock')).toBe(false)
  expect(track.tracks).toEqual([
    'data',
    'index'
  ])
})
