// Update with your config settings.

const { pgConnection } = require('./config/vars')

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // neede for sqlite
    connection: {
      filename: './database/scraper.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
