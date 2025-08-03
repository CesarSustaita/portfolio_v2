<script setup>

defineProps({
  year: String,
  jobPosition: String,
  description: String
})

</script>

<template>

    <div class=experience-container>
        <div class=years>{{ year }}</div>
        <div class=data>
            <div class=job>{{jobPosition}}</div>
            <div class=description>{{ description }}</div>
        </div>
    </div>
</template>

<style scoped>

.experience-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-self: stretch;
  /* Text/M/Regular */
  font-family: Figtree;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */

}

.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 380px;
}

.years {
  color: var(--Text-Default-Disabled, #A1A1A1);
  font-size: 16px;
}

.job {
  color: var(--Text-Default-Dafault, #FDFDFD);
  font-size: 16px;
}

.description {
  color: var(--Text-Default-Disabled, #A1A1A1);
  font-size: 14px;
}


@media (max-width: 590px) {

.experience-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  /* Text/M/Regular */
  font-family: Figtree;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
}

.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
}

}

</style>
