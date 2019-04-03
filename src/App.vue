<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link to="/" class="navbar-brand">LearnJS</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-link" to="/" exact>
            Home
          </router-link>
          <router-link tag="li" class="nav-link" to="/about">
            About
          </router-link>
          <router-link tag="li" class="nav-link" to="/tree">
            Tree
          </router-link>
          <router-link tag="li" class="nav-link" to="/map">
            Map
          </router-link>
        </ul>
      </div>
    </nav>
    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
