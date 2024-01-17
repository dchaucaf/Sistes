<template>
    <div class="container-fluid">
        <div class="card mt-3">
            <div class="card-body">
                <div class="row justify-content-between">
                    <div class="col-2">
                        <h5 class="card-title">Registro de Tesis</h5>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary btn-sm" @click="agregarTesis" data-bs-toggle="modal" data-bs-target="#modalFormRegistro">
                            Agregar Seguimiento
                        </button>
                    </div>
                </div>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th>COD ALUMNO</th>
                            <th>NOMBRE</th>
                            <th>TESIS</th>
                            <th>ESTADO</th>
                            <th>AVANCE</th>
                            <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='data in dataTesis'>
                                <td>{{data.cod_alumno}}</td>
                                <td>{{ data.alumno }}</td>
                                <td>{{ data.tesis }}</td>
                                <td>{{ data.estado_tesis }}</td>
                                <td>{{ data.avance }}</td>
                                <td>
                                    <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" @click="verTesis(data)" data-bs-target="#modalFormRegistro">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button  class="btn btn-secondary btn-sm m-1" data-bs-toggle="modal" @click="observacioneTesis(data)"  data-bs-target="#modalFormObservacion" >
                                        <i class="bi bi-exclude"></i>
                                    </button>
                                    <button  class="btn btn-success btn-sm" data-bs-toggle="modal" @click="editarTesis(data)" data-bs-target="#modalFormRegistro" >
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button  class="btn btn-danger btn-sm m-1" @click="deleteTesis(data)">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <ObservacionComponent :newTesis="newTesis"  @registroGuardado="actualizarRegistro"></ObservacionComponent>
    <FormularioComponent :newTesis="newTesis" :btnGuardar="btnGuardar" :btnEditar="btnEditar" @registroGuardado="actualizarRegistro"></FormularioComponent>
</template>
<script>
import axios from "axios";
import FormularioComponent from "./FormularioComponent.vue";
import ObservacionComponent from "./ObservacionComponent.vue";
export default{
    data() {
        return {
            registroActualizado:false,
            showModal: true,
            dataTesis: [],
            btnGuardar:false,
            btnEditar:false,
            newTesis: {
                cod_alumno: "",
                alumno: "",
                facultad: "",
                escuela: "",
                tesis: "",
                tipo_tesis: "",
                fecha_presentacion: "",
                fecha_sustención: "",
                fecha_aprobación: "",
                estado_tesis: "",
                asesor: [
                    {
                        nombre: "",
                        fecha_asignación: "",
                        observaciones: [
                            {
                                tipo_observacion: "",
                                descripción_observación: "",
                                fecha_creación_observación: "",
                                fecha_entrega_observación: ""
                            }
                        ],
                        estado_asesoria: ""
                    }
                ],
                avance: 0
            },
            backend_server: 'http://127.0.0.1:3080'
        };
    },
    mounted() {
        //this.obtenerFechaActual();
    },
    methods: {
        actualizarRegistro(dato) {
            this.registroActualizado = dato;
            if (this.registroActualizado){
                this.mostarSeguimiento();
            }
        },
        obtenerFechaActual() {
            const fecha = new Date();
            const fechaFormateada = fecha.toISOString().slice(0, 10);
                this.newTesis.asesor[0].fecha_asignación = fechaFormateada;
        },
        limpiarFormulario(){
            this.newTesis={
                cod_alumno: "",
                alumno: "",
                facultad: "",
                escuela: "",
                tesis: "",
                tipo_tesis: "",
                fecha_presentacion: "",
                fecha_sustención: "",
                fecha_aprobación: "",
                estado_tesis: "",
                asesor: [
                    {
                        nombre: "",
                        fecha_asignación: "",
                        observaciones: [
                            {
                                tipo_observacion: "",
                                descripción_observación: "",
                                fecha_creación_observación: "",
                                fecha_entrega_observación: ""
                            }
                        ],
                        estado_asesoria: ""
                    }
                ],
                avance: 0
            }
        },
        deleteTesis(data){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.delete(this.backend_server + '/seg/proyecto/' + data._id, {}, { config_request })
            .then(res => {      
                alert('Registro eliminado');                                   
                this.mostarSeguimiento();
            })
            .catch((error) => {
                console.log(error)
            });  
        },
        agregarTesis(e){
            this.obtenerFechaActual();
            this.limpiarFormulario();
            this.btnGuardar=true;
            this.btnEditar=false;
            
        },
        editarTesis(data){
            this.newTesis=data;
            this.btnGuardar=false;
            this.btnEditar=true;
            
        },
        verTesis(data){
            this.newTesis=data;
            this.btnGuardar=false;
            this.btnEditar=false;  
        },
        observacioneTesis(data){
            this.newTesis=data;
        },
        mostarSeguimiento(){
            axios.get(this.backend_server + "/seg/proyecto")
                .then(res => {
                //console.log(res.data);
                this.dataTesis = res.data.datos;
                //console.log(this.dataTesis);
            });
        }
    },
    created() {
        this.mostarSeguimiento();
    },
    components: { FormularioComponent,ObservacionComponent }
}

</script>