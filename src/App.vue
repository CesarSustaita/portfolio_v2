<script setup>
import { RouterView } from 'vue-router'
import PortfolioStructure from './components/PortfolioStructure.vue'
import TabsInformation from './components/TabsInformation.vue'

</script>

<template>
  <header>

    <div class="main-container">
      <HelloWorld msg="Porftolio V2" />
      <PortfolioStructure />
      <TabsInformation />
      <RouterView />
    </div>
  </header>


</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  width: 590px;
  border-radius: var(--border-radius-border-12, 12px);
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
  padding: 16px;
  border: none;
  box-sizing: border-box;
}

}
</style>
