
//ruta de mascota 

const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async(req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)
        console.log(arrayMascotasDB.length);
          ////
    res.render("mascotas", {
        arrayMascotas: arrayMascotasDB 
       // arrayMascotas: [
         //   {id:'dke', nombre: 'rex', descripcion:'rexDescripcion' },
          //  {id:'dkeass', nombre: 'chan', descripcion:'chanDescripcion' },
       // ]
    });
    ///
    } catch (error) {
        console.log(error);
    }

  
}
)



module.exports = router;