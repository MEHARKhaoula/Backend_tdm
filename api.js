const express = require("express")

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(express.static('public'))
const port = 8082



const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ParkingDB',
  password: 'mkdir400',
  port: 5432,
})


//Restourner une place vide pour un parking 
app.get('/reservationgetplace/:idparking',function(req,response){  
  let idparking = req.params.idparking;
 
   pool.query('select m.* from place m inner join parking p ON  p.idparking= m.idparking where p.idparking=$1 and m.occupe=$2 ',
   [idparking, 'vide'], (error, results) => {
    
     if(error)
     {
       response.sendStatus(500);
     }
     else{
       response.status(200).json(results.rows);
     }
     
 })
  
 })








//Ajouter un utilisateur
app.post('/setusers',function(req,response) {
  let body = req.body;
  pool.query(
    'INSERT INTO public."user" (nom, prenom, email, numero_telephone, mot_de_passe)VALUES ($1, $2, $3, $4 ,$5)',
    [body.nom, body.prenom, body.email, body.numero_telephone ,body.mot_de_passe ],(error, results) => {

      if (error) {
        throw error
      } else {
        response.sendStatus(200);
      }

      //  response.sendStatus(response.statusCode);
    }
  );
})


//Ajouter une reservation
app.post('/setreservation',function(req,response) {
  let body = req.body;
  pool.query(
    'INSERT INTO public.reservation ( date, heure_entree, heure_sortie, iduser, idplace)VALUES ($1, $2, $3, $4 ,$5 )',
    [ body.date, body.heure_entree, body.heure_sortie, body.iduser, body.idplace ],(error, results) => {

      if (error) {
        throw error
      } else {
        response.sendStatus(200);
      }

      //  response.sendStatus(response.statusCode);
    }
  );
})



app.get('/getreservations',function(req,response){  
  
  pool.query('select * from reservation', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})
 console.log("World")
})


app.get('/getaddesreservation',function(req,response){  
  
  pool.query('SELECT r.* FROM reservation r inner join place p ON  p.idplace = r.idplace ORDER BY numeroreservation DESC LIMIT 1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})
 console.log("World")
})








app.get('/getparkings',function(req,response){  
  
  pool.query('select * from parking', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})
 console.log("World")
})



app.get('/login/:email/:mot_de_passe',function(req,response){  
 let Email = req.params.email;
 let  Mot_de_passe = req.params.mot_de_passe;

  pool.query('select * from public."user" where email=$1 and  mot_de_passe=$2',
  [Email,Mot_de_passe], (error, results) => {
   
    if(error)
    {
      response.sendStatus(500);
    }
    else{
      response.status(200).json(results.rows);
    }
    
})
 
})



app.get('/login/:phone/:mot_de_passe',function(req,response){  
  let Email = req.params.phone;
  let  Mot_de_passe = req.params.mot_de_passe;
 
   pool.query('select * from public."user" where email=$1 and  mot_de_passe=$2',
   [Email,Mot_de_passe], (error, results) => {
    
     if(error)
     {
       response.sendStatus(500);
     }
     else{
       response.status(200).json(results.rows);
     }
     
 })
  
 })
 


app.get('/users',function(req,response){  

 
   pool.query('select * from public."user"',
   (error, results) => {
    
     if(error)
     {
       response.sendStatus(500);
     }
     else{
       response.status(200).json(results.rows);
     }
     
 })
  
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})