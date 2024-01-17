<template>
<div class="bg-light d-flex align-items-center justify-content-center vh-100" style="background-image: url('https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/other/ul/g/90/34/90341b6b-a78f-404d-a77d50a280840189.component.xl.ts=1696362581587.png/content/adobe-cms/mx/es/topics/security-controls/_jcr_content/root/leadspace');">
    <div class="row justify-content-center col-12 col-md-6 col-sm-8  col-lg-4 p-5 rounded-top rounded-end rounded-bottom rounded-start" >
      <div class="col-md-12">
        <div class="card">
          <div class="text-center card-header"><h5>Bienvenido a SisTest</h5></div>
          <div class="row justify-content-center">
            <div class="col-4">
              <img src="https://cvp.pj.gob.pe/cvpsanta/plugins/images/acceso.png" class=" img-fluid" alt="...">
            </div>
          </div>
          <div class="card-body">
            <form  class="row justify-content-center bg-light pt-3">
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" class="form-control form-control-sm" v-model='formUsuario.usuario' id="username" placeholder="Ingresar usuario">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control form-control-sm" v-model='formUsuario.password' id="password" placeholder="Ingresar contraseña">
              </div>
              <button type="button" class="btn btn-primary" @click="validarLogin">Iniciar Sesión</button>
            </form>

            
          </div>
          <div v-if="messageError" class="alert alert-danger alert-dismissible m-1 mb-4">
                Datos incorrectos !!
            </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import axios from "axios";
export default{    
    data(){ 
        return {
            backend_server: 'http://127.0.0.1:3080',
            formUsuario:{
              usuario:'',
              password:''
            },
            messageError:false          
        }
    },
    methods: {
        validarLogin(e){
          var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
            axios.post(this.backend_server + '/mnt/usuario/valida', this.formUsuario, { config_request })
            .then(res => {    
                if(res.data.datos.length>0){
                  this.$emit('actualizaLogin',false);
                }else{
                  //this.$emit('actualizaLogin', true);
                  this.messageError=true;
                }                                 
            })
            .catch((error) => {
              console.log('Error con el serever');
            }); 
        },
        
        
    },

}
</script>