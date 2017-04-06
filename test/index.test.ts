import assert = require('assert')
import safe from '../src'


async function basicFunction() {}


test('sanity', () => {
  // Basic sanity check to make sure that the wrapper returns a function.
  assert.equal('function', typeof safe(basicFunction))
})