module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('PROD_DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('PROD_DATABASE_SRV', true),
        port: env.int('PROD_DATABASE_PORT', 27017),
        database: env('PROD_DATABASE_NAME'),
        username: env('PROD_DATABASE_USERNAME'),
        password: env('PROD_DATABASE_PASSWORD'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
