<script setup>
import CardProject from '@/components/Project/CardProject.vue';

const Projects = [
  {
    img: new URL('@/components/Project/Card-Img/csuikit.svg', import.meta.url).href,
    CardTitle: 'CS UI Kit',
    CardSubtitle: 'A case study on building a UI Kit for both personal and professional use.',
    to: '/cs-ui-kit'
  },
  {
    img: new URL('@/components/Project/Card-Img/uaslpuikit.svg', import.meta.url).href,
    CardTitle: 'UASLP UI Kit & Web Components',
    CardSubtitle: 'Case study: A UI Kit for engineering students at UASLP.',
    to: '/uaslp-ui-kit'
  },
  {
    img: new URL('@/components/Project/Card-Img/etn.svg', import.meta.url).href,
    CardTitle: 'ETN',
    CardSubtitle: 'Identifying a critical UX flaw and redesigning it with purpose.',
    to: '/etn-design'
  },
];

</script>

<template>
  <main>
    <div class="container">
      <CardProject
      v-for="(project, index) in Projects"
      :key="index"
      :img="project.img"
      :CardTitle="project.CardTitle"
      :CardSubtitle="project.CardSubtitle"
      :to="project.to"
      />
    </div>

  </main>
</template>

<style scoped>

.container{
  border: 0px solid white;
  display: flex;
  flex-direction: column;
  gap: 24px;


}

</style>
