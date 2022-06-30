const Pool = require('pg').Pool

const pool = new Pool({
  user: 'utilisateur_autotek',
  host: 'localhost',
  database: 'autotek',
  password: 'UtilisateurAutotek2022*',
  port: 5432,
})

module.exports=pool