<template>
    <div class="modal fade" id="modalFormObservacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header p-2 bg-primary text-white">
            <i class="bi bi-exclude" style="font-size: 1rem;"></i>
            <h5 class="modal-title m-1" id="exampleModalLabel">Ingresar Observaciones</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
                    <div class="row bg-light justify-content-end">
                            <div class="col-6 mb-2">
                                <label for="cboTipoObservacion" class="form-label">Tipo :</label>
                                <select class="form-select form-select-sm" id="cboTipoobs" aria-label="Default select example" v-model='newTesis.asesor[0].estado_asesoria'>
                                    <option value="" selected>Seleccione tipo</option>
                                    <option v-for="opcion in tipoObs" :key="opcion.mombre" :value="opcion.mombre">{{ opcion.mombre }}</option>
                                </select>
                            </div>
                            <div class="col-6 mb-2">
                                <label for="txtDescrObservacion" class="form-label">Descripcion :</label>
                                <input type="text" class="form-control form-control-sm" id="txtDescrObservacion" placeholder="Datos del alumno">
                            </div>
                            <div class="col-6 mb-2">
                                <label for="fechaObservacion" class="form-label">Fecha :</label>
                                <input type="date" class="form-control form-control-sm" id="fechaObservacion" placeholder="Ingresar facultad">
                            </div>
                            <div class="col-6 mb-2">
                                <label for="fechaEntrega" class="form-label">Entrega :</label>
                                <input type="date" class="form-control form-control-sm" id="fechaEntrega" placeholder="Ingresar escuela">
                            </div>
                            <div class="col-5">
                                <button type="button" class="btn btn-success btn-sm">
                                    Agregar Observación
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm m-1">
                                    Editar Observación
                                </button>
                            </div>
                    </div>
                </form>
                <!-- Grilla Observaciones -->
                <hr>
                <div>
                    <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active bg-dark text-white btn-sm p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Grilla Observaciones</button>
                        </li>
                    </ul>
                    <table class="table table-striped">
                            <thead>
                                <tr>
                                <th>TIPO</th>
                                <th>DESCCRIPCIÓN</th>
                                <th>FECHA</th>
                                <th>ENTREGA</th>
                                <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for='data in newTesis.asesor[0].observaciones'>
                                    <td>{{data.tipo_observacion}}</td>
                                    <td>{{data.descripción_observación}}</td>
                                    <td>{{data.fecha_creación_observación}}</td>
                                    <td>{{data.fecha_entrega_observación}}</td>
                                    <td> 
                                        <button  class="btn btn-danger btn-sm m-1">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
                </div>
                <!-- End Grilla Observaciones-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
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
            
            mensaje:'',
            backend_server: 'http://127.0.0.1:3080'
        };
    },
    props: ['newTesis'],
    methods: {
        /*saveTesis(){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.post(this.backend_server + '/seg/proyecto', this.newTesis, { config_request })
            .then(res => {                                      
                console.log(res.data);
                this.$emit('registroGuardado', true); 
                this.$refs.cerrarModal.click();
            })
            .catch((error) => {
                console.log(error)
            }); 

            
        },
        editTesis(){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.put(this.backend_server + '/seg/proyecto', this.newTesis, { config_request })
            .then(res => {                                      
                console.log(this.newTesis);
                this.$emit('registroGuardado', true); 
                this.$refs.cerrarModal.click();
            })
            .catch((error) => {
                console.log(error)
            });

            
        },*/
        
    },
    created() {
        
        /*// Traer tipos de tesis
        axios.get(this.backend_server +  "/mnt/tipo_tesis")
                .then(res => {
                this.opcionesTipoTesis = res.data.datos;
                //console.log(this.opcionesTipoTesis);
        });
        // Traer estado de tesis
        axios.get(this.backend_server +  "/mnt/estado_tesis")
                .then(res => {
                this.opcionesEstadoTesis = res.data.datos;
                //console.log(this.opcionesEstadoTesis);
        });*/
         // Traer estado asesoria
         axios.get(this.backend_server +  "/mnt/tipo_observacion")
                .then(res => {
                this.tipoObs = res.data.datos;
                //console.log(this.opcionesEstadoAsesoria);
        });
    },
    components: { }
}

</script>