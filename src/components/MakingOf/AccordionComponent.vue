<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  content: String,
})

const isOpen = ref(false)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="accordion-container">
    <div class="accordion-header" @click="toggleAccordion">
      <span>{{ title }}</span>
      <div class="icon" :class="{ rotate: isOpen }">
        <img src="/src/components/icons/chevron-down.svg" alt="Down" />
      </div>
    </div>

    <transition name="accordion">
      <div v-if="isOpen" class="accordion-body" v-html="content"> </div>
    </transition>
  </div>
</template>

<style scoped>

.accordion-container {
  border: 1px solid var(--Border-Default-Dafault, #323232);
  border-radius: 8px;
  background: var(--Background-Default-Tertiary, #2E2E2E);
  color: var(--Text-Default-Dafault, #FDFDFD);
  overflow: hidden;
  font-family: Figtree;
  display: flex;
  flex-direction: column;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  border: 0px solid white;
}

.icon {
  transition: transform 0.3s ease;
}

.icon.rotate {
  transform: rotate(180deg);
}

.accordion-body {
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--Text-Default-Secondary, #d5d5d5);
  /* Text/M/Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border: 0px solid white;
}

.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0 14px;
}

.accordion-enter-to, .accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}

::v-deep(.accordion-body a) {
  color: var(--Text-Default-Secondary, );
  text-decoration: underline;
}

::v-deep(.accordion-body a:hover) {
  text-decoration: underline;
}


</style>
