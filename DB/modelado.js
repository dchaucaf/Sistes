///////////////////////////////// CREANDO TIPO DE USUARIOS
const tipo_usuario={
    "fecha_creación":"",
    "mombre":"",
    "activo":true
}

/////////////////////////////  CREANDO USUARIOS  
const usuario={
    "fecha_creación":"",
    "usuario":"",
    "password":"",
    "apellidos_nombres":"",
    "tipo_usuario":"",
    "activo":true
}

/////////////////////////// CREANDO ESTADO ASESORIA
const estado_asesoria={
    "fecha_creación":"",
    "mombre":"",
    "activo":true
}


/////////////////////////// CREANDO ESTADO DE LA TESIS
const estado_tesis={
    "fecha_creación":"",
    "mombre":"",
    "activo":true,
    "usuario":"",
    
}

/////////////////////////// CREANDO TIPO DE OBSERVACION
const tipo_observacion={
    "fecha_creación":"",
    "nombre":"",
    "activo":true,
    "usuario":"",
}

/////////////////////////// CREANDO TIPO DE TESIS
const tipo_tesis={
    "fecha_creación":"",
    "mombre":"",
    "activo":true
}

/////////////////////////// CREANDO SEGUIMIENTO DE TESIS
const seguimiento={
    "cod_alumno":"003",
    "alumno":"valdivia Manrique",
    "facultad":"Producción y Servicio",
    "escuela":"Ingenieria de Metalurgica",
    "tesis":"Estructura del Metal",
    "tipo_tesis":"Tesis",
    "fecha_presentacion":"2023-02-01",
    "fecha_sustención":"2023-06-07",
    "fecha_aprobación":"2023-06-20",
    "estado_tesis":"Aprobada",
    "asesor":[
        {
            "nombre":"Oscar Cornejo Fuentes",
            "fecha_asignación":"2022-06-01",
            "observaciones":[
                {
                    "tipo_observacion":"Conclusiones",
                    "descripción_observación":"Falta correguir la observación número 2 de su tesis",
                    "fecha_creación_observación":"2022-08-13",
                    "fecha_entrega_observación":"2022-08-20"
                }
            ],
            "estado_asesoria":"Asignada"
        }
    ],
    "avance":0
        
}