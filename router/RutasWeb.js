const express = require('express');
const router = express.Router();


router.get('/', // envia lo que está en la raiz
    (req, res) => {///se debe respetar el orden de los parametros req, res
        res.render("index", {titulo : "mi titulo dinamico desde app"} );
    }
);

router.get('/servicios', (req, res) => {
 res.render("servicios", {tituloServicios: "este es un mensaje dinamieco de servicios"});
    }

);


module.exports = router;