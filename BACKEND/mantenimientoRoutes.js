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
// RUTAS DE MANTENIMIENTOS CRUD
router.get('/', (req, res) => {
    res.send('usted no tiene acceso a este servicio');
});
// RETORNA TIPO DE USUARIOS
router.get('/tipo_usuario', async(req, res) => {
    const conexion = db.collection('tipo_usuario');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA USUARIOS
router.get('/usuario', async(req, res) => {
    const conexion = db.collection('usuario');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// EDITAR USAURIO
router.put('/usuario', async(req, res) => {
    const parametro = req.body;
    console.log(parametro);
    const conexion = db.collection('usuario');
    const { _id, ...datosActualizar } = parametro;

    try {
        const actualiza = await conexion.updateOne(
        { _id: new ObjectId(parametro._id) },
        { $set: datosActualizar }
        );

        if (actualiza.matchedCount === 0) {
        return res.status(404).json({
            success: false,
            message: 'Usuario no encontrado',
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
      
});

// REGISTRAR USUARIO
router.post('/usuario', async(req, res) => {
    const parametro=req.body;
    console.log(parametro)
    const conexion = db.collection('usuario');
    try {
        await conexion.insertOne(req.body);
        return res.status(201).json({ success: true });
    } catch (error) {
        return res.status(400).json({ success: false, error});
    } 
});

// ELIMINA USUARIO
router.delete('/usuario/:id', async(req, res) => {
    if (ObjectId.isValid(req.params.id)) {
		db.collection('usuario')
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

// VALIDAR USUARIO Y CONTRASEÑA
router.post('/usuario/valida', async(req, res) => {
    const parametro=req.body;
    const conexion = db.collection('usuario');
    
    try {
        const datos = await conexion.find({ usuario:parametro.usuario,  password:parametro.password}).limit(1).toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// ACTUALIZAR CONTRASEÑA DE USUARIO
router.put('/usuario/actualiza', async(req, res) => {
    const parametro=req.body;
    const conexion = db.collection('usuario');
    try {
        const datos = await conexion.find({ usuario:parametro.usuario}).limit(1).toArray();
        datos[0].password=parametro.password;
        const actualiza=await conexion.updateOne({ usuario:parametro.usuario}, {
            $set: datos[0]
        });
        return res.status(200).json({
            success: true,
            actualiza
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA DATOS DE UN USUARIO ESPECIFICO
router.get('/usuario/:usuarioId', async(req, res) => {
    const parametro=req.params;
    if (ObjectId.isValid(parametro.usuarioId)) {
        const conexion = db.collection('usuario');
        try {
            const datos = await conexion.findOne({_id:new ObjectId(parametro.usuarioId)})
			.then(doc => {
				res.status(200).json({
                    success: true,
                    doc
                })
			})
			.catch(err => {
				res.status(500).json( {error:'could not fetch'})
			});
        } catch (error) {
            return res.status(500).json({ success: false, error});
        } 
    }else{
        return res.status(500).json({ success: false, message:'EL ID no existe'}); 
    }
    
});


// RETORNA ESTADO ASESORIA
router.get('/estado_asesoria', async(req, res) => {
    const conexion = db.collection('estado_asesoria');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA ESTADO TESIS
router.get('/estado_tesis', async(req, res) => {
    const conexion = db.collection('estado_tesis');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA TIPO OBSERVACION DE TESIS
router.get('/tipo_observacion', async(req, res) => {
    const conexion = db.collection('tipo_observacion');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});

// RETORNA TIPO DE TESIS
router.get('/tipo_tesis', async(req, res) => {
    const conexion = db.collection('tipo_tesis');
    try {
        const datos = await conexion.find().toArray();
        return res.status(200).json({
            success: true,
            datos
        });
    } catch (error) {
        return res.status(500).json({ success: false, error});
    } 
});


module.exports = router;