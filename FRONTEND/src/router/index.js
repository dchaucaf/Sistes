import { createRouter, createWebHistory } from 'vue-router';
import ReporteComponents from '../components/ReporteComponent.vue';
import TesisComponents from '../components/TesisComponent.vue';
import UsuarioComponent from '../components/UsuarioComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: TesisComponents,
  },
  {
    path: '/registro',
    name: 'Registro',
    component: TesisComponents,
  },
  {
    path: '/usuario',
    name: 'Usuarios',
    component: UsuarioComponent,
  },
  {
    path: '/reporte',
    name: 'Reportes',
    component: ReporteComponents,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
