<script setup>
import AccordionComponent from '@/components/MakingOf/AccordionComponent.vue';

const accordionContent = [
  {
    title:'How did this portfolio come about?',
    content: 'This portfolio version 2.0 was created to clearly and visually showcase the projects I have worked on, combining design and frontend development. I felt it was time to refresh it and better align it with how I work and think today.<br><br>It is designed so that anyone who visits — recruiter, colleague, or client — can get to know my work, understand my process, and contact me more easily.<br><br>If you are curious about the previous version, you can see it <a href="https://portfolio-seven-nu-10.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>.',

  },
  {
    title:'About my portfolio',
    content: 'This portfolio is designed using the CS UI Kit, one of my most recent personal projects. I used its components as a base to build this site, which helped me maintain visual consistency and speed up development.<br><br>Everything is coded from scratch in Vue 3 Framework, creating each component myself to have full control over design, functionality, and performance.<br><br>This approach has allowed me to align the design with my quality standards and ensure the portfolio is scalable and easy to maintain.',

  },
  /*{
    title:'How I build my resume?',
    content: 'Falta este!',

  },*/
  {
    title:'How do I work?',
    content: 'I enjoy combining design and frontend development to create experiences that not only work well but also feel intuitive and pleasant for users. I pay attention to every detail and aim to maintain a consistent aesthetic, building custom components that reflect my vision and style.<br><br>I like working with autonomy and responsibility, from idea to implementation, always eager to improve and learn. My focus goes beyond the interface: I’m interested in understanding how solutions impact users and the business, aiming for each product to deliver real and meaningful value.',

  },

];

</script>

<template>
  <main>
    <div class="MakinOf-Container">
      <AccordionComponent
        v-for="(data,i) in accordionContent"
        :key="i"
        :title="data.title"
        :content="data.content"
      />
    </div>

  </main>
</template>

<style scoped>

.MakinOf-Container {
  border: 0px solid white;
  display: flex;
  flex-direction: column;
  gap: 16px;
}



</style>
