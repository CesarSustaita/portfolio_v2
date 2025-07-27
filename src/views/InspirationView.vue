<script setup>
import InspirationProfile from '@/components/Inspiration/InspirationProfile.vue';


const InspirationProfiles = [
  {
    name:'Jacob Flores',
    jobPosition: 'Software Engineer',
    description: 'Thank you for your invaluable help and guidance, which have been key to moving the project forward.',
    link: 'https://www.jacobflores.dev/',
    btn: 'jacobflores.dev'
  },
  {
    name:'Julia Jhonson',
    jobPosition: 'Product Designer',
    description: 'Technical Product Designer crafting elegant, scalable design.',
    link: 'https://www.juliacodes.com/',
    btn: 'juliacodes.com'
  },
   {
    name:'Adrian Zumbrunnen',
    jobPosition: 'Human Interface Team at Apple',
    description: 'Create emotional experiences at the intersection of art, design, and AI.',
    link: 'https://azumbrunnen.me/',
    btn: 'azumbrunnen.me'
  },
];

</script>

<template>
  <main>
    <div class="Inspiration-container">
      <InspirationProfile
        v-for="(data,i) in InspirationProfiles"
        :key="i"
        :name="data.name"
        :jobPosition="data.jobPosition"
        :description="data.description"
        :link="data.link"
        :btn="data.btn"
      />
    </div>
  </main>
</template>

<style scoped>

.Inspiration-container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

</style>
