const express = require('express');
const app = express();

require('dotenv').config()

const puerto = process.env.PORT || 3000;

// Conexión a Base de datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xkyfv4a.mongodb.net/${process.env.NOMBREBD}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');//ruta donde estan ubicadas las platillas





app.use(express.static(__dirname + "/public"));

//rutas web
app.use('/',         require('./router/RutasWeb') );

//rutas mascotas
app.use('/mascotas', require('./router/Mascotas') );




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


