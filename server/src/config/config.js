module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'RFRMR',
    user: process.env.DB_USER || 'RFRMR',
    password: process.env.DB_PASS || 'RFRMR',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './rfrmr.sqlite'
    }
  }
}
