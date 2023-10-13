module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Aijaj@#123',
    database: 'telegram',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // In development, you can set this to false
  };