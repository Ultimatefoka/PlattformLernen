module.exports = {
  port: 9000,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}