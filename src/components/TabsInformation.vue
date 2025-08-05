<script setup>
import { RouterLink } from 'vue-router'


</script>

<template>

    <div class="tabs">
        <RouterLink class=tab to="/">Projects</RouterLink>
        <RouterLink class=tab to="/Experience">Experience</RouterLink>
        <RouterLink class=tab to="/MakingOf">Making of</RouterLink>
        <RouterLink class=tab to="/Inspiration">Inspiration</RouterLink>


    </div>

</template>

<style scoped>

.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--text-default-tab-inactive, #5B5B5B);
  /* Text/S/Regular */
  font-family: Figtree;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  margin-top: 28px;
  margin-bottom: 30px;
}

.router-link-active {
  border-bottom: 1px solid var(--Text-Default-Dafault, #FDFDFD)!important;
  color: var(--Text-Default-Dafault, #FDFDFD)!important;
}

.tab {
    all: unset;
    cursor: pointer;
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    outline: none;
}

.tab:visited,
.tab:active,
.tab:focus {
  color: var(--text-default-tab-inactive, #5B5B5B);
  text-decoration: none;
  outline: none;
}

.tab:hover {
  border-bottom: 1px solid var(--Text-Default-Dafault, #FDFDFD)!important;
  color: var(--Text-Default-Dafault, #FDFDFD)!important;
  text-decoration: none;
  outline: none;
}


</style>
