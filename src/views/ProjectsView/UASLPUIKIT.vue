<script setup>
import { useRouter } from 'vue-router'
import UASLPUIKIT from '@/data/case-studies/uaslp-uikit.vue'

const router = useRouter()

function goBack() {
  router.back()
}


</script>

<template>
  <div class="fullscreen-container">
    <div class="fullscreen-view">
      <div class="header-section">
        <button class="tertiary-icon-btn" @click="goBack">
          <img src="/src/components/icons/arrow-left.svg" alt="Back" />
        </button>
        <div class="back-section">Back</div>
      </div>

      <div class="data">
        <UASLPUIKIT/>
      </div>

    </div>
  </div>
</template>


<style scoped>
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 9999;

}

.fullscreen-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 590px;
  border-radius: var(--border-radius-border-12, 12px) var(--border-radius-border-12, 12px) 0px 0px;
  border: 1px solid var(--Border-Default-Dafault, #323232);
  background: var(--Background-Background-Dafault, #1C1C1C);
  padding: 24px;
  animation: fadeInUp 0.3s ease-out;
}

.header-section {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  font-size: 18px;
  gap: 4px;
}


.data {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 42px;
}

.data::-webkit-scrollbar {
  display: none; /* Chrome, Safari y Edge */
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 590px) {
.fullscreen-view {
  height: 100vh;
  width: 100vw;
  background: var(--Background-Background-Dafault, #1C1C1C);
  padding: 16px;
  margin: 0px;
}

}

</style>
