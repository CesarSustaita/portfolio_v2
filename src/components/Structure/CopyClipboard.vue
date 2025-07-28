<script setup>
import { ref } from 'vue'

const showTooltip = ref(false)

function copyLink() {
  const url = window.location.href;
  const textarea = document.createElement('textarea');
  textarea.value = url;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  const successful = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (successful) {
    showTooltip.value = true
    setTimeout(() => {
      showTooltip.value = false
    }, 1800)
  }
}
</script>

<template>
    <button class="icon-btn" @click="copyLink">
      <img src="/src/components/icons/copy.svg" alt="Share" />
    </button>
    <div v-if="showTooltip" class="tooltip">Link copied</div>
</template>

<style scoped>

.tooltip {
  position: fixed;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--Background-Default-Tertiary, #2E2E2E);
  color: #fff;
  padding: 8px 12px;
  border-radius: var(--border-radius-border-8, 8px);
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  animation: fade-in-out 1.6s ease forwards;
  z-index: 9999;
}

@keyframes fade-in-out {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}


@media (max-width: 590px) {

.tooltip {
  top: 24px;
}

}

</style>
