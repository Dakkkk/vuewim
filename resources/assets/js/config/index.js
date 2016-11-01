var env = process.env.APP_ENV || 'production'

var config = {
  development: require('./development.config'),
  production: require('./production.config'),
  staging: require('./staging.config')
}

module.exports = config[env]
