<template>
    <div class="container-fluid">
        
        <div class="card mt-3">
            <div class="card-body">
                <div class="row justify-content-between">
                    <div class="col-5">
                        <h5 class="card-title">Reporte de Seguimiento de Tesis</h5>
                    </div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <select class="form-select form-select-sm" v-model="selectedOption" id="cboTipoTesis" @change="seleccionarReporte">
                                <option selected value="0">Seleccione su Reporte</option>
                                <option value="1">Ver todos los proyectos</option>
                                <option value="2">Ver los proyectos por % de avance</option>
                                <option value="3">Ver los asesores con mayor % de avance</option>
                                <option value="4">Ver los asesores con menor % de avance</option>
                                <option value="5">Ver proyectos por tipo</option>
                                <option value="6">Ver estados de tesis</option>
                                <option value="7">Ver observaciones del asesor</option>
                                <option value="8">Ver detalle de proyecto</option>
                                <option value="9">Buscar proyecto por alumno</option>
                                <option value="10">Buscar proyecto por asesor</option>
                                <option value="11">Buscar proyectos por tipo</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button" id="btnFiltrarReporte" @click="buscarReporte">Filtrar</button>
                        </div>
                        
                    </div>
                </div>
                <hr>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>COD ALUMNO</th>
                        <th>NOMBRE</th>
                        <th>TESIS</th>
                        <th>TIPO</th>
                        <th>ESTADO</th>
                        <th>AVANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='data in dataTesis'>
                            <td>{{data.cod_alumno}}</td>
                            <td>{{ data.alumno }}</td>
                            <td>{{ data.tesis }}</td>
                            <td>{{ data.tipo_tesis }}</td>
                            <td>{{ data.estado_tesis }}</td>
                            <td>{{ data.avance }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    </template>
<script>
import axios from "axios";
import MenuComponent from "./MenuComponent.vue";
export default{
    data() {
        return {
            selectedOption: '0',
            showModal: true,
            dataTesis: [],
            newTesis: {
            },
            backend_server: 'http://127.0.0.1:3080'
        };
    },
    methods: {
        submitForm() {
            console.log('Formulario enviado con:', this.newTesis);
            this.showModal = false;
        },
        misDatos(selecOption){
            let urlReporte='';
            switch(selecOption){
                case 1: urlReporte='/seg/proyecto';break;
                case 2: urlReporte='/seg/proyecto/porcentaje';break;
                case 3: urlReporte='/seg/asesores/porcentaje/mayor';break;
                case 4: urlReporte='/seg/proyecto';break;
                case 5: urlReporte='/seg/proyecto/tipo';break;
                case 6: urlReporte='';break;
                case 7: urlReporte='';break;
                case 8: urlReporte='';break;
                case 9: urlReporte='';break;
                case 10: urlReporte='';break;
                default: urlReporte='';break;
            }
            console.log(this.backend_server + urlReporte);
            axios.get(this.backend_server + urlReporte)
                .then(res => {
                console.log(res.data);
                this.dataTesis = res.data.datos;
                console.log(this.dataTesis);
            });
        },
        seleccionarReporte(event) {
            this.misDatos(parseInt(event.target.value));
            
        },
        buscarReporte() {
            this.misDatos(parseInt(this.selectedOption));
        }
        
    },
    created() {
    },
    components: { MenuComponent}
}

</script>