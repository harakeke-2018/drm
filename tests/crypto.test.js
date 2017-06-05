const sodium = require('sodium').api
const test = require('ava')

const crypto = require('../server/lib/crypto')

test('getHash returns verifiable hash in buffer', t => {
  const password = Buffer.from('password', 'utf8')
  const actual = crypto.getHash('password')
  t.truthy(sodium.crypto_pwhash_str_verify(actual, password))
})

test('verifyUser verifies user with correct password', t => {
  const hash = sodium.crypto_pwhash_str(
    Buffer.from('aardvark', 'utf8'),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  t.truthy(crypto.verifyUser({ hash }, 'aardvark'))
})

test('verifyUser does not veryfiy user with incorrect password', t => {
  const hash = sodium.crypto_pwhash_str(
    Buffer.from('capybara', 'utf8'),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  t.falsy(crypto.verifyUser({ hash }, 'wrong password'))
})
