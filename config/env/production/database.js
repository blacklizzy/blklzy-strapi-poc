const parse = require('pg-connection-string').parse;
const DATABASE_URL = 'postgres://lsazatqalncvqc:e51462ecf9549ba6b2c975f3fcdb709ae5b61ebd24c5e8fd515ae3fd2864b048@ec2-54-171-25-232.eu-west-1.compute.amazonaws.com:5432/d45mt92dklic36';
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});