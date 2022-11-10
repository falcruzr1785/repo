const express = require('express'); //es como el servidor de http
const { dirname } = require('path');
const app = express();//app es el servidor

const puerto = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');//donde estna ubicadas las platillas




app.use(express.static(__dirname + "/public"));



app.get('/', // envia lo que está en la raiz
    (req, res) => {///se debe respetar el orden de los parametros req, res
        res.render("index", {titulo : "mi titulo dinamico desde app"} );
    }
);

app.get('/servicios', (req, res) => {
 res.render("servicios", {tituloServicios: "este es un mensaje dinamieco de servicios"});
    }

);



app.use((req, res, next) => {///cuando no encuentra alguna ruta configurada
    res.status(404).render("404",{
        titulo:"titulo de 404",
        descripcion:"descripcion de 404"
});
});


app.listen(puerto, () => {//el servidor escucha desde el puerto 
    console.log(`estoy escuchando en el puerto ${puerto}`);
}

);


