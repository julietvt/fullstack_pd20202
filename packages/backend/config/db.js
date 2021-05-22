module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'superheroes_pd20202',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
