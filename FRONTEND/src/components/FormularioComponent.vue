<template>
<div class="modal fade" id="modalFormRegistro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header p-2 bg-primary text-white">
        <i class="bi bi-file-earmark-text" style="font-size: 1rem;"></i>
        <h5 class="modal-title m-1" id="exampleModalLabel">Ingresar Registro de Tesis</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
                <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active bg-dark text-white btn-sm p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Datos del Alumno</button>
                    </li>
                </ul>
                <div class="row bg-light">
                        <div class="col-6 mb-2">
                            <label for="txtCodAlumno" class="form-label">Cod Alumno :</label>
                            <input type="text" class="form-control form-control-sm" id="txtCodAlumno" v-model='newTesis.cod_alumno' placeholder="Cod alumno">
                        </div>
                        <div class="col-6 mb-2">
                            <label for="txtAlumno" class="form-label">Alumno :</label>
                            <input type="text" class="form-control form-control-sm" id="txtAlumno" v-model='newTesis.alumno' placeholder="Datos del alumno">
                        </div>
                        <div class="col-6 mb-2">
                            <label for="txtFacultad" class="form-label">Facultad :</label>
                            <input type="text" class="form-control form-control-sm" id="txtFacultad" v-model='newTesis.facultad' placeholder="Ingresar facultad">
                        </div>
                        <div class="col-6 mb-2">
                            <label for="txtEscuela" class="form-label">Escuela :</label>
                            <input type="text" class="form-control form-control-sm" id="txtEscuela" v-model='newTesis.escuela' placeholder="Ingresar escuela">
                        </div>
                </div>
                <br>
                <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active bg-dark text-white btn-sm p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Datos de la Tesis</button>
                    </li>
                </ul>
                <div class="row bg-light">
                    <div class="col-12 mb-2">
                        <label for="txtTesis" class="form-label">Tesis :</label>
                        <input type="text" class="form-control form-control-sm" id="txtTesis" v-model='newTesis.tesis' placeholder="Ingresar nombre de la tesis">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="cboTipoTesis" class="form-label">Tipo de Tesis :</label>
                        <select id="cboTipoTesis" class="form-select form-select-sm" v-model='newTesis.tipo_tesis'>
                            <option selected value="">Seleccione tipo de tesis</option>
                            <option v-for="opcion in opcionesTipoTesis" :key="opcion.mombre" :value="opcion.mombre">{{ opcion.mombre }}</option>
                        </select>
                    </div>
                    <div class="col-6 mb-2">
                        <label for="fechaPresentacion" class="form-label">Fecha Presentación :</label>
                        <input type="date" class="form-control form-control-sm" id="fechaPresentacion" v-model='newTesis.fecha_presentacion' placeholder="">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="fechaSustentacion" class="form-label">Fecha Sustentación :</label>
                        <input type="date" class="form-control form-control-sm" id="fechaSustentacion" v-model='newTesis.fecha_sustención' placeholder="">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="fechaAprobacion" class="form-label">Fecha Aprobación :</label>
                        <input type="date" class="form-control form-control-sm" id="fechaAprobacion" v-model='newTesis.fecha_aprobación' placeholder="">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="cboEstadoTesis" class="form-label">Estado Tesis :</label>
                        <select class="form-select form-select-sm" id="cboEstadoTesis" v-model='newTesis.estado_tesis'>
                            <option value="" selected>Seleccione estado Tesis</option>
                            <option v-for="opcion in opcionesEstadoTesis" :key="opcion.mombre" :value="opcion.mombre">{{ opcion.mombre }}</option>
                        </select>
                    </div>
                </div>
                <br>
                <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active bg-dark text-white btn-sm p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Datos del Asesor</button>
                    </li>
                </ul>
                <div class="row bg-light">
                    <div class="col-12 mb-2">
                        <label for="cboAsesor" class="form-label">Asesor :</label>
                        <input type="text" class="form-control form-control-sm" v-model='newTesis.asesor[0].nombre' id="textAsesor" placeholder="">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="fechaAsignacion" class="form-label">Fecha Asignación :</label>
                        <input type="date" class="form-control form-control-sm" v-model='newTesis.asesor[0].fecha_asignación' id="fechaAsignacion" placeholder="">
                    </div>
                    <div class="col-6 mb-2">
                        <label for="cboAsesor" class="form-label">Estado Asesoria :</label>
                        <select class="form-select form-select-sm" id="cboAsesor" aria-label="Default select example" v-model='newTesis.asesor[0].estado_asesoria'>
                            <option value="" selected>Seleccione estado asesoria</option>
                            <option v-for="opcion in opcionesEstadoAsesoria" :key="opcion.mombre" :value="opcion.mombre">{{ opcion.mombre }}</option>
                        </select>
                    </div>
                    <div class="col-6 mb-2">
                        <label for="textAvanceTesis" class="form-label">Avance de Tesis :</label>
                        <input type="text" class="form-control form-control-sm" v-model='newTesis.avance' id="textAvanceTesis" placeholder="">
                    </div>
                </div>

            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" ref="cerrarModal">Cerrar</button>
        <button type="button" class="btn btn-primary btn-sm" v-if="btnGuardar" @click="saveTesis">Guardar</button>
        <button type="button" class="btn btn-success btn-sm" v-if="btnEditar" @click="editTesis">Editar</button>
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
    props: ['newTesis','btnGuardar','btnEditar'],
    methods: {
        saveTesis(){
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

            
        },
        
    },
    created() {
        // Traer tipos de tesis
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
        });
         // Traer estado asesoria
         axios.get(this.backend_server +  "/mnt/estado_asesoria")
                .then(res => {
                this.opcionesEstadoAsesoria = res.data.datos;
                //console.log(this.opcionesEstadoAsesoria);
        });
    },
    components: { }
}

</script>