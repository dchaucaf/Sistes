db.tipo_usuario.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Administrador",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            mombre:"Asesor",
            activo:true
        }
    ]
)

db.usuario.insertMany(
    [
        {
            fecha_creación:new Date(),
            usuario:"hvaldivia",
            password:"123456",
            apellidos_nombres:"Valdivia Ponce Humberto",
            tipo_usuario:"Administrador",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            usuario:"dchauca",
            password:"123456",
            apellidos_nombres:"Chauca Florian Daythiao",
            tipo_usuario:"Administrador",
            activo:true
        }
    ]
)

db.estado_asesoria.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Asignada",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            mombre:"Cancelada",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            mombre:"Terminada",
            activo:true
        }
    ]
)

db.estado_tesis.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Pendiente",
            activo:true,
            usuario:"hvaldivia"
        },
        { 
            fecha_creación:new Date(),
            mombre:"Revisión",
            activo:true,
            usuario:"hvaldivia"
        },
        { 
            fecha_creación:new Date(),
            mombre:"Aprobada",
            activo:true,
            usuario:"hvaldivia"
        }
    ]
)

db.tipo_observacion.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Introduccón",
            activo:true,
            usuario:"hvaldivia"
        },
        { 
            fecha_creación:new Date(),
            mombre:"Observaciones",
            activo:true,
            usuario:"hvaldivia"
        },
        { 
            fecha_creación:new Date(),
            mombre:"Desarrollo",
            activo:true,
            usuario:"hvaldivia"
        },
         { 
            fecha_creación:new Date(),
            mombre:"Conclusiones",
            activo:true,
            usuario:"hvaldivia"
        }
    ]
)


db.tipo_tesis.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Tesis",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            mombre:"Libro",
            activo:true
        },
         { 
            fecha_creación:new Date(),
            mombre:"Publicación",
            activo:true
        }
    ]
)

db.tipo_tesis.insertMany(
    [
        {
            fecha_creación:new Date(),
            mombre:"Tesis",
            activo:true
        },
        { 
            fecha_creación:new Date(),
            mombre:"Libro",
            activo:true
        },
         { 
            fecha_creación:new Date(),
            mombre:"Publicación",
            activo:true
        }
    ]
)
db.proyectos.insertMany(
    [
        { 
            "cod_alumno":"002",
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
            ]  ,
            "avance":10   
        }
    ],
     { 
            "cod_alumno":"003",
            "alumno":"Juares Carpio Luis",
            "facultad":"Ciencias sociales",
            "escuela":"Comunicación",
            "tesis":"Lenguaje de manos",
            "tipo_tesis":"Libro",
            "fecha_presentacion":"2023-05-01",
            "fecha_sustención":"2023-08-07",
            "fecha_aprobación":"2023-12-20",
            "estado_tesis":"Aprobada",
            "asesor":[
                {
                    "nombre":"Tomas Pinto Coronado",
                    "fecha_asignación":"2022-01-01",
                    "observaciones":[
                        {
                            "tipo_observacion":"Objetivos",
                            "descripción_observación":"Falta especificar un objetivo mas claro",
                            "fecha_creación_observación":"2022-04-13",
                            "fecha_entrega_observación":"2022-04-20"
                        }
                    ],
                    "estado_asesoria":"Asignada"
                }
            ]  ,
            "avance":20   
        },
         { 
            "cod_alumno":"004",
            "alumno":"Luisa Calderon Fuentes",
            "facultad":"Ciencias Sociales",
            "escuela":"Derecho",
            "tesis":"Politica en el Guzgado",
            "tipo_tesis":"Publicación",
            "fecha_presentacion":"2022-02-01",
            "fecha_sustención":"2022-06-07",
            "fecha_aprobación":"2022-06-20",
            "estado_tesis":"Aprobada",
            "asesor":[
                {
                    "nombre":"Alberto Retamozo FUentes",
                    "fecha_asignación":"2021-0-01",
                    "observaciones":[
                        {
                            "tipo_observacion":"Conclusiones",
                            "descripción_observación":"Falta correguir la observación número 2 de su tesis",
                            "fecha_creación_observación":"2021-08-13",
                            "fecha_entrega_observación":"2021-08-20"
                        }
                    ],
                    "estado_asesoria":"Asignada"
                }
            ]  ,
            "avance":80   
        }, 
        { 
            "cod_alumno":"005",
            "alumno":"María ALfaro",
            "facultad":"Producción y Servicio",
            "escuela":"Ingenieria de Metalurgica",
            "tesis":"Analisis de estructuras",
            "tipo_tesis":"Libro",
            "fecha_presentacion":"2023-06-03",
            "fecha_sustención":"2023-09-06",
            "fecha_aprobación":"2023-07-20",
            "estado_tesis":"Aprobada",
            "asesor":[
                {
                    "nombre":"Iris Ramirez",
                    "fecha_asignación":"2022-05-01",
                    "observaciones":[
                        {
                            "tipo_observacion":"Resultados",
                            "descripción_observación":"Modificar la estructura",
                            "fecha_creación_observación":"2022-08-30",
                            "fecha_entrega_observación":"2022-09-01"
                        }
                    ],
                    "estado_asesoria":"Asignada"
                }
            ]  ,
            "avance":80  
        }, 
        { 
            "cod_alumno":"006",
            "alumno":"Karina Rivera",
            "facultad":"Procesos y Producción",
            "escuela":"Ingeniería Química",
            "tesis":"Creación de materiales ",
            "tipo_tesis":"artículo",
            "fecha_presentacion":"2023-05-03",
            "fecha_sustención":"2023-10-06",
            "fecha_aprobación":"2023-08-20",
            "estado_tesis":"Aprobada",
            "asesor":[
                {
                    "nombre":"Oscar Urquizo",
                    "fecha_asignación":"2022-05-01",
                    "observaciones":[
                        {
                            "tipo_observacion":"MArco teorico",
                            "descripción_observación":"Modificar la estructura",
                            "fecha_creación_observación":"2022-06-20",
                            "fecha_entrega_observación":"2022-07-01"
                        }
                    ],
                    "estado_asesoria":"Asignada"
                }
            ]  ,
            "avance":70
        }

)
