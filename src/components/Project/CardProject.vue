<script setup>

import { useRouter } from 'vue-router'

const props = defineProps({
  img: String,
  CardTitle: String,
  CardSubtitle: String,
  to: String
})

const router = useRouter()

function goToRoute() {
  if (props.to) {
    router.push(props.to)
  }
}


</script>

<template>
  <main>
    <div class="Card-container" @click="goToRoute">
      <div class="img">
      <img :src="img" :alt="CardTitle" />
    </div>
      <div class="txt">
        <div class="card-title">{{ CardTitle }}</div>
        <div class="card-subtitle">{{ CardSubtitle }}</div>
      </div>

    </div>

  </main>
</template>

<style scoped>

.Card-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius-border-8, 8px);
}

.Card-container:hover {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius-border-8, 8px);
  background: var(--dafault-hover, #323232);
  cursor: pointer;
}

.img {
  border-radius: var(--border-radius-border-8, 8px);
  display: flex;
  width: 100%;
  height: 200px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  display: block;
}

.txt {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
}

.card-title {
  overflow: hidden;
  color: var(--Text-Default-Dafault, #FDFDFD);
  text-overflow: ellipsis;
  /* Text/M/Semibold */
  font-family: Figtree;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
}

.card-subtitle {
  overflow: hidden;
  color: var(--Text-Default-Tertiary, #D5D5D5);
  text-overflow: ellipsis;
  /* Text/S/Regular */
  font-family: Figtree;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
}

</style>
