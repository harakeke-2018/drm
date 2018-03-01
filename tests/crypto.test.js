const sodium = require('sodium').api

const crypto = require('../server/lib/crypto')

test.skip('getHash returns verifiable hash in buffer', () => {
  const password = Buffer.from('password', 'utf8')
  const actual = crypto.getHash('password')
  expect(sodium.crypto_pwhash_str_verify(actual, password)).toBeTruthy()
})

test.skip('verifyUser verifies user with correct password', () => {
  const hash = sodium.crypto_pwhash_str(
    Buffer.from('aardvark', 'utf8'),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  expect(crypto.verifyUser({hash}, 'aardvark')).toBeTruthy()
})

test.skip('verifyUser does not verify user with incorrect password', () => {
  const hash = sodium.crypto_pwhash_str(
    Buffer.from('capybara', 'utf8'),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  expect(crypto.verifyUser({hash}, 'wrong password')).toBeFalsy()
})
