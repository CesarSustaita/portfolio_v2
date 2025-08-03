<script setup>
import { ref } from 'vue'
import ConnectModal from './ConnectModal.vue';

const open = ref(false)

</script>

<template>

  <div class="buttons">
    <button class="Primary-btn-small" @click="open = true">Connect</button>
    <button class="Secondary-btn-small">Resume</button>
  </div>

<Teleport to="body">
  <div v-if="open" class="modal-overlay">
    <div class="modal">
        <ConnectModal />
        <div class="btn-section">
            <button class="Secondary-btn-small" @click="open = false">Close</button>
        </div>
    </div>
  </div>
</Teleport>



</template>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
}


.modal {
  background: var(--Background-Background-Dafault, #1C1C1C);
  border-radius: var(--border-radius-border-8, 8px);
  border: 1px solid var(--Border-Default-Dafault, #323232);
  padding: 32px;
  width: 450px;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  animation: fadeInUp 0.3s ease-out
}

.btn-section {
  border: 0px solid white;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 34px;
}


@keyframes fadeInUp {
  0% {
    opacity: 0;
     transform: translate(-50%, -50%) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}


.buttons{
    display: flex;
    gap: 20px;
    align-self: stretch;
}

.Primary-btn-small,
.Secondary-btn-small {
  flex: 1;
}


@media (max-width: 590px) {
.buttons{
    display: flex;
    gap: 12px;
    align-self: stretch;
}

.Primary-btn-small,
.Secondary-btn-small {
  flex: 1;
}

.modal {
  background: var(--Background-Background-Dafault, #1C1C1C);
  border-radius: var(--border-radius-border-8, 8px);
  border: 1px solid var(--Border-Default-Dafault, #323232);
  padding: 32px;
  width: 92%;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}




}

</style>
