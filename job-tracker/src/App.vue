<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import JobList from './components/JobList.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
}

nav a:first-of-type {
	border: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
