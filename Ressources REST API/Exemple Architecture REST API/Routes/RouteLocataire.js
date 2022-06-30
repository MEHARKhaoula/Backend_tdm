const express = require('express')
const routerLocataire = express.Router()

const controllerLocataire = require('../Controllers/ControllerLocataire.js')

routerLocataire.get('/locataire/:id',controllerLocataire.getLocataireById)
routerLocataire.get('/locataire/',controllerLocataire.getLocataires)
module.exports=routerLocataire