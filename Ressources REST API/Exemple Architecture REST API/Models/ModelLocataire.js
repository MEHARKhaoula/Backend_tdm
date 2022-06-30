const pool=require("../config/bd")

const getLocataireById = (request, response)=> {
  let id =request.params.id
    pool.query('SELECT * FROM locataire where id_locataire=$1',[id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
  })
}
const getLocataires = (request, response)=> {
  pool.query('SELECT * FROM locataire', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
})
}
module.exports={
    getLocataireById,
    getLocataires,
}