///model de mascota
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema(
    {
    nombre: { type: String },
    descripcion:{ type: String },
}
,{collections: "mascotas"}
)

// crear modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
 

