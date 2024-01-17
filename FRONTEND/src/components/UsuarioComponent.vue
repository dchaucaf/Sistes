<template>
    <div class="container-fluid">
        <div class="card mt-3">
            <div class="card-body">
                <div class="row justify-content-between">
                    <div class="col-4">
                        <h5 class="card-title">Registro de usuarios</h5>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary btn-sm" @click="agregarUsuario" data-bs-toggle="modal" data-bs-target="#modalFormUsurio">
                            Agregar usuario
                        </button>
                    </div>
                </div>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th>USUARIO</th>
                            <th>NOMBRES</th>
                            <th>TIPO</th>
                            <th>ACTIVO</th>
                            <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='data in dataUsuarios'>
                                <td>{{data.usuario}}</td>
                                <td>{{ data.apellidos_nombres }}</td>
                                <td>{{ data.tipo_usuario }}</td>
                                <td>{{ (data.activo)?'SI':'NO' }}</td>
                                <td>
                                    <button  class="btn btn-success btn-sm" data-bs-toggle="modal" @click="editarUsuario(data)" data-bs-target="#modalFormUsurio" >
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button  class="btn btn-danger btn-sm m-1" @click="deleteUsuario(data)">
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
    <!-- Modal de Agregar Usuario-->
    <div class="modal fade" id="modalFormUsurio" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header p-2 bg-primary text-white">
                <i class="bi bi-file-earmark-text" style="font-size: 1rem;"></i>
                <h5 class="modal-title m-1" id="exampleModalLabel">Ingreso - Edición de Usuarios</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                        <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active bg-dark text-white btn-sm p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Datos del Usuario</button>
                            </li>
                        </ul>
                        <div class="row bg-light">
                                <div class="col-12 mb-2">
                                    <label for="txtFacultad" class="form-label">Nombres y Apellidos :</label>
                                    <input type="text" class="form-control form-control-sm" id="txtFacultad" v-model='newUsuario.apellidos_nombres' placeholder="Nombres y Apellidos">
                                </div>
                                <div class="col-6 mb-2">
                                    <label for="txtCodAlumno" class="form-label">Usuario :</label>
                                    <input type="text" class="form-control form-control-sm" id="txtCodAlumno" v-model='newUsuario.usuario' placeholder="Usuario">
                                </div>
                                <div class="col-6 mb-2">
                                    <label for="txtAlumno" class="form-label">Password :</label>
                                    <input type="password" class="form-control form-control-sm" id="txtAlumno" v-model='newUsuario.password' placeholder="Password">
                                </div>
                                <div class="col-6 mb-2">
                                    <label for="cboTipousuario" class="form-label">Tipo usuario :</label>
                                    <select id="cboTipousuario" class="form-select form-select-sm" v-model='newUsuario.tipo_usuario'>
                                        <option selected value="">Seleccione tipo de usuario</option>
                                        <option selected value="Docente">Docente</option>
                                        <option selected value="Administrador">Administrador</option>
                                    </select>
                                </div>
                                <div class="col-6 mb-2">
                                    <label for="cboTipousuario" class="form-label">Estado :</label>
                                    <select id="cboTipousuario" class="form-select form-select-sm" v-model='newUsuario.activo'>
                                        <option selected value="true">Activo</option>
                                        <option selected value="false">Inactivo</option>
                                    </select>
                                </div>
                        </div>
                    </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" ref="cerrarModal">Cerrar</button>
                <button type="button" class="btn btn-primary btn-sm" v-if="btnGuardar" @click="saveUsuario">Guardar</button>
                <button type="button" class="btn btn-success btn-sm" v-if="btnEditar" @click="editUsuario">Editar</button>
            </div>
            </div>
        </div>
        </div>
</template>
<script>
import axios from "axios";
export default{
    data() {
        return {
            dataUsuarios: [],
            btnGuardar:false,
            btnEditar:false,
            newUsuario: {
                usuario: "",
                password: "",
                apellidos_nombres: "",
                tipo_usuario: "",
                activo: true
            },
            backend_server: 'http://127.0.0.1:3080'
        };
    },
    mounted() {
        //this.obtenerFechaActual();
    },
    methods: {
        saveUsuario(){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.post(this.backend_server + '/mnt/usuario', this.newUsuario, { config_request })
            .then(res => {                                      
                console.log(res.data);
                this.mostarUsuarios();
                this.$refs.cerrarModal.click();
            })
            .catch((error) => {
                console.log(error)
            }); 

            
        },
        editUsuario(){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.put(this.backend_server + '/mnt/usuario', this.newUsuario, { config_request })
            .then(res => {                                      
                console.log(this.newUsuario);
                this.mostarUsuarios();
                this.$refs.cerrarModal.click();
            })
            .catch((error) => {
                console.log(error)
            });
            
            
        },
        limpiarFormulario(){
            this.newUsuario={
                usuario: "",
                password: "",
                apellidos_nombres: "",
                tipo_usuario: "",
                activo: true
            }
        },
        deleteUsuario(data){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.delete(this.backend_server + '/mnt/usuario/' + data._id, {}, { config_request })
            .then(res => {      
                alert('Registro eliminado');                                   
                this.mostarUsuarios();
            })
            .catch((error) => {
                console.log(error)
            }); 
        },
        agregarUsuario(e){
            this.limpiarFormulario();
            this.btnGuardar=true;
            this.btnEditar=false;
            
        },
        editarUsuario(data){
            this.newUsuario=data;
            this.btnGuardar=false;
            this.btnEditar=true;
            
        },
        mostarUsuarios(){
            axios.get(this.backend_server + "/mnt/usuario")
                .then(res => {
                this.dataUsuarios = res.data.datos;
            });
        }
    },
    created() {
        this.mostarUsuarios();
    },
    components: {  }
}

</script>