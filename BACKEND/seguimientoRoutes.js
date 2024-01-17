const express = require('express');
const {ObjectId} = require('mongodb');
const router = express.Router();
const { connectToDb, getDb } = require('./db')
/////////////////////////////// CONFIGURANDO CONEXIÓN MONGODB
connectToDb((err)=> {
	if (!err){
		console.log('Base de datos conectada'),
		db = getDb();
	}else{
        console.log('No se puedo conectar a la base de datos')
    }
})
// Rutas para seguimientos
router.get('/', (req, res) => {
    res.send('usted no tiene acceso a este servicio');
});

// RETORNA TODOS LO SPROYECTOS 
router.get('/proyecto', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find().toArray();
        //const datos = await conexion.find({ usuario:parametro.usuario}).limit(1).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA TODOS LOS PROYECTOS ORDENADO POR PORCENTAJE 
router.get('/proyecto/porcentaje', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find().sort( {avance:-1} ).toArray();
        //const datos = await conexion.find({ usuario:parametro.usuario}).limit(1).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA TODOS LOS PROYECTOS ORDENADO POR PORCENTAJE 
router.get('/asesores/porcentaje', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find({}, { asesor: 1,avance:1 }).sort( {avance:1} ).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA TODOS LOS PROYECTOS ORDENADO POR PORCENTAJE mayr
router.get('/asesores/porcentaje/mayor', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find({}, { asesor: 1,avance:1 }).sort( {avance:-1} ).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});


// RETORNA LOS PROYECTOS POR TIPO
router.get('/proyecto/tipo', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find({}, { tesis: 1,tipo_tesis:1 }).sort( {tipo_tesis:1} ).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA LOS PROYECTOS PENDIENTE
router.get('/proyecto/estados', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find({}, { tesis: 1,estado_tesis:1,asesor:1 }).sort( {estado_tesis:1} ).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA RETORNA LAS OBSERVACINES DEL ASESOR
router.get('/proyecto/observaciones', async(req, res) => {
    const conexion = db.collection('proyectos');
    try {
        const datos = await conexion.find({}, { tesis: 1,asesor:{nombre:1,observaciones:1}}).sort( {tesis:1} ).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});


// RETORNA UN PROYECTO ESPECIFICO
router.get('/proyecto/:proyecto', async(req, res) => {
    const parametro=req.params;
    console.log(parametro.proyecto)
    const conexion = db.collection('proyectos');
    try {
        const documento = await conexion.findOne({_id:new ObjectId(parametro.proyecto)})

        if (!documento) {
          res.status(404).send('Documento no encontrado');
          return;
        }
        return res.status(200).json({
            success: true,
            documento
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA PROYECTO POR ALUMNO
router.get('/proyecto/alumno/:codigo', async(req, res) => {
    const parametro=req.params;
    console.log(parametro.proyecto)
    const conexion = db.collection('proyectos');
    try {
        const documento = await conexion.findOne({cod_alumno:parametro.codigo})

        if (!documento) {
          res.status(404).send('Documento no encontrado');
          return;
        }
        return res.status(200).json({
            success: true,
            documento
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});


// RETORNA PROYECTO BUSCANDO POR ASESOR
router.get('/proyecto/buscar/asesor/:asesor', async(req, res) => {
    const parametro=req.params;
    console.log(parametro.asesor)
    const conexion = db.collection('proyectos');
    try {
        const documento = await conexion.findOne({asesor:{
            $elemMatch: {
                nombre: parametro.asesor
             }
            }
        })

        if (!documento) {
          res.status(404).send('Documento no encontrado');
          return;
        }
        return res.status(200).json({
            success: true,
            documento
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// BUSCAR PROYECTO POR TIPO
router.get('/proyecto/buscar/tipo/:tipo', async(req, res) => {
    const parametro=req.params;
    console.log(parametro.asesor)
    const conexion = db.collection('proyectos');
    try {
        const documento = await conexion.findOne({tipo_tesis:parametro.tipo
        })

        if (!documento) {
          res.status(404).send('Documento no encontrado');
          return;
        }
        return res.status(200).json({
            success: true,
            documento
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// REGISTRAR PROYECTO
router.post('/proyecto', async(req, res) => {
    const parametro=req.body;
    console.log(parametro)
    const conexion = db.collection('proyectos');
    try {
        await conexion.insertOne(req.body);
        return res.status(201).json({ success: true });
    } catch (error) {
        return res.status(400).json({ success: false, error});
    } 
});
// EDITAR PROYECTO
router.put('/proyecto', async(req, res) => {
    const parametro = req.body;
    const conexion = db.collection('proyectos');
    const { _id, ...datosActualizar } = parametro;


    try {
        const actualiza = await conexion.updateOne(
        { _id: new ObjectId(parametro._id) },
        { $set: datosActualizar }
        );

        if (actualiza.matchedCount === 0) {
        return res.status(404).json({
            success: false,
            message: 'Proyecto no encontrado',
            parametro,
        });
        }

        return res.status(200).json({
            success: true,
            actualiza,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error, parametro });
    }
    /*return res.status(200).json({
        success: true,
        parametro,
    });*/
      
      
});

// ELIMINA EL PROYECTO
router.delete('/proyecto/:id', async(req, res) => {
    if (ObjectId.isValid(req.params.id)) {
		db.collection('proyectos')
		.deleteOne({_id:new ObjectId(req.params.id)})
		.then( (result)=> {
            res.status(200).json(result)
        })
		.catch( err => {
            res.status(500).json( {error:'No se puede eliminar !!'})
        })
	}		
	else {
        res.status(500).json( {error:'El id no existe !!'})
    }
});

// ELIMINA OBSERVACIPON DEL PROYECTO
router.delete('/proyecto/boservacion/:idproyecto/:observacion', async(req, res) => {
    console.log(req.params);
    if (ObjectId.isValid(req.params.idproyecto)) {
		db.collection('proyectos')
		.updateOne(
            { },
            { $pull: { "asesor.$[].observaciones": {
                 _id: req.params.idproyecto, 
                'descripción_observación': req.params.observacion } } },
            { multi: true }
         )
		.then( (result)=> {
            res.status(200).json(result)
        })
		.catch( err => {
            res.status(500).json( {error:'could not update'})
        })
	}		
	else {
        res.status(500).json( {error:'El id no existe !!'})
    }
});

// ELIMINA EL ASESOR DEL PROYECTO
router.delete('/proyecto/asesor/:idproyecto/:asesor', async(req, res) => {
    console.log(req.params);
    if (ObjectId.isValid(req.params.idproyecto)) {
		db.collection('proyectos')
		.updateMany(
            { },
            { $pull: { "asesor": { 
                _id: req.params.idproyecto,
                nombre: req.params.asesor
                } } }
         )
		.then( (result)=> {
            res.status(200).json(result)
        })
		.catch( err => {
            res.status(500).json( {error:'could not update'})
        })
	}		
	else {
        res.status(500).json( {error:'El id no existe !!'})
    }
});



  
module.exports = router;
  
