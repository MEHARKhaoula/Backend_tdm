const modelLocataire = require('../Models/ModelLocataire')

const getLocataireById = async (request, response) => {
  try {
    modelLocataire.getLocataireById(request, response)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getLocataires = async (request, response)=> {
  try {
    modelLocataire.getLocataires(request, response)
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
    getLocataireById,
    getLocataires
}