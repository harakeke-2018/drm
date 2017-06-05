const sodium = require('sodium').api

module.exports = {
  getHash,
  verifyUser
}

function getHash (password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
}

function verifyUser (user, password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str_verify(user.hash, passwordBuffer)
}
