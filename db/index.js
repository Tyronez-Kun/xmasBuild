import pg from 'pg';

import * as config from "../config.js";

console.log("TESTING ENV VARS", process.env.PGUSER)

const pool = new pg.Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
    ssl: true 
  });
  

  export default function query(text, params) {
    return pool.query(text, params);
  }

