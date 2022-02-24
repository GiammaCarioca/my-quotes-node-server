function getAllUsers(req, res) {
  res.json({
    message: 'Hello World!',
  })
}

function signup(req, res) {
  res.json({
    message: 'sign up!',
  })
}

function login(req, res) {
  res.json({
    message: 'log in!',
  })
}

function logout(req, res) {
  res.json({
    message: 'log out!',
  })
}

module.exports = {
  getAllUsers,
  signup,
  login,
  logout,
}
