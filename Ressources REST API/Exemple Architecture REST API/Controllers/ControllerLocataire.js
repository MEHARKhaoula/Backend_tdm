const serviceLocataire = require('../services/ServiceLocataire.js')
/*
 * call other imported services, or same service but different functions here if you need to
*/
const  getLocataireById= async(request, response) => {
  try {
    await serviceLocataire.getLocataireById(request, response)
  } catch(e) {
    console.log(e.message)
  }
}
const  getLocataires= async(request, response)=> {
  try {
     await serviceLocataire.getLocataires(request, response)
  } catch(e) {
    console.log(e.message)
  }
}

module.exports = {
    getLocataireById,
    getLocataires
}