<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PortfolioStructure from './components/PortfolioStructure.vue'

</script>

<template>
  <header>

    <div class="main-container">
      <HelloWorld msg="Porftolio V2" />
      <PortfolioStructure />
      <!--<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      -->
        <RouterView />
    </div>
  </header>


</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  width: 590px;
  border-radius: var(--border-radius-border-12, 12px) var(--border-radius-border-12, 12px) 0px 0px;
  border: 1px solid var(--Border-Default-Dafault, #323232);
  background: var(--Background-Background-Dafault, #1C1C1C);
  margin: 36px;
  padding: 24px;
}

@media (max-width: 590px) {

  body {
    margin: 0;
    padding: 0;
  }

  .main-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 0px solid var(--Border-Default-Dafault, #323232);
  background: var(--Background-Background-Dafault, #1C1C1C);
  margin: 0px;
  padding: 24px;
  border: none;
  box-sizing: border-box;
}

}
</style>
