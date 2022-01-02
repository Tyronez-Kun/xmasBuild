import pg from 'pg';

console.log("TESTING ENV VARS", process.env.PGUSER)

const pool = new pg.Pool({
    user: 'lziijwaobqjhud',
    host: 'ec2-63-32-7-190.eu-west-1.compute.amazonaws.com',
    database: 'ddd1n9r9ra44du',
    password: '68fb63d1e2c44c5a65c0c6dc9fc8896aa00a6b8a0ffffdf012fbe357c864346a',
    port: 5432,
  })
  

  export default function query(text, params) {
    return pool.query(text, params);
  }

