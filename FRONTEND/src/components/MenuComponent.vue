<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Sis Test</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/registro" class="nav-link">Seguimiento</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/usuario" class="nav-link">Usuarios</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reporte" class="nav-link">Reporte</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ayuda</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>