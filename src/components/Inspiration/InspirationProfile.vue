<script setup>

defineProps({
  name: String,
  jobPosition: String,
  description: String,
  link: String,
  btn: String
})

</script>

<template>
  <main>
    <div class="Inspiration-profile">
      <div class="name">{{ name }}</div>
      <div class="job-description">
        <div class="job">{{ jobPosition }}</div>
        <div class="description">{{ description }}</div>
      </div>
        <a :href="link" class="Secondary-btn-small" target="link" rel="noopener noreferrer">
        <span>{{ btn }}</span>
          <img src="/src/components/icons/arrow-up-right.svg" alt="arrow-up-right" />
        </a>
    </div>

  </main>
</template>

<style scoped>

.Inspiration-profile{
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: var(--border-radius-border-8, 8px);
  border: 1px solid var(--Border-Default-Dafault, #323232);
  font-family: Figtree;
}

.name {
  align-self: stretch;
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/M/Semibold */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
}

.job-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}

.job {
  color: var(--Text-Default-Secondary, #EEE);
  /* Text/M/Regular */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
}

.description {
  color: var(--Text-Default-Disabled, #A1A1A1);
  /* Text/S/Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
}

.Secondary-btn {
  text-decoration: none;
}
</style>
