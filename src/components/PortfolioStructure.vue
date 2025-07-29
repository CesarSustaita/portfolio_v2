<script setup>
import { ref } from 'vue'
import CopyClipboard from './Structure/CopyClipboard.vue';

const name = ref('César Sustaita')
const position = ref('UX/UI Designer & Frontend Dev')
const description = ref('Ingeniero que diseña experiencias UX/UI con visión de producto.')
const experience = ref('3+ years experience')

</script>

<template>

    <div class="portfolio">
        <div class="btn-access">
          <CopyClipboard />
        </div>
        <div class="titles-image">
          <div class="titles">
            <div class="name">{{name}}</div>
            <div class="position">{{ position }}</div>
          </div>
          <div class="photo"><img src="/src/assets/picture/pic-portfolio.webp" alt="Me"></div>
        </div>
        <div class="description-views">
          <div class="description">{{ description }}</div>
          <div class="experience">{{ experience }}</div>
        </div>
        <div class="buttons">
            <button class="Primary-btn">Connect</button>
            <button class="Secondary-btn">Resume</button>
        </div>
    </div>

</template>

<style scoped>

.portfolio {
  display: flex;
  flex-direction: column;
  border: 0px solid white;
  gap: 16px;
}

.btn-access {
 display: flex;
 flex-direction: row-reverse;
}

.titles-image {
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.titles{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-family: Figtree;
}

.name {
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/XL/Medium */
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
}

.position {
  color: var(--Text-Default-Secondary, #EEE);
  /* Text/XS/Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
}

.photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-views {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.description {
  color: var(--Text-Default-Secondary, #EEE);
  /* Text/S/Regular */
  font-family: Figtree;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
}

.experience {
  color: var(--Text-Default-Description, #767676);
  /* Text/XS/Regular */
  font-family: Figtree;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
}

.buttons{
    display: flex;
    gap: 20px;
    align-self: stretch;
}

.Primary-btn,
.Secondary-btn {
  flex: 1;
}

@media (max-width: 590px) {


.photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons{
    display: flex;
    gap: 12px;
    align-self: stretch;
}

.Primary-btn,
.Secondary-btn {
  flex: 1;
}
}

</style>
