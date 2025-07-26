<script setup>

defineProps({
  tag: String,
})

</script>

<template>
  <div class="tag-component">{{ tag }}</div>
</template>

<style scoped>

.tag-component {
  display: flex;
  width: fit-content;
  padding: var(--border-radius-border-6, 6px);
  align-items: center;
  gap: 6px;
  border-radius: var(--border-radius-border-8, 8px);
  background: var(--Background-Default-Secondary, #323232);
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/S/Regular */
  font-family: Figtree;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
}
</style>
