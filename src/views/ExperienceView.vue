<script setup>
import ExperienceStructure from '../components/Experience/ExperienceStructure.vue'
import SkillsStructure from '@/components/Experience/SkillsStructure.vue';

const experiences = [
  {
    year:'2024 - 2025',
    jobPosition: 'Enginner I-UX UI Controls',
    description: 'Developed & integrated new UI features into existing systems.'
  },
  {
    year:'2023 - 2024',
    jobPosition: 'UX/UI Designer & Frontend Developer',
    description: 'Designed & Developed a design for an IoT system.'
  },
  {
    year:'2023 - 2023',
    jobPosition: 'UX/UI Designer & System Architect',
    description: 'Led the UX design development of an internal administrative management system.'
  }
];

const softSkills = [
  'Critical Thinking',
  'Problem Solving',
  'Collaboration',
  'Teamwork',
  'Adaptability',
  'Attention to Detail',
  'User-Centered Mindset',
  'Proactivity'
];

const uxui = [
  'Wireframing',
  'Prototyping',
  'Figma',
  'Accessibility',
  'Information Architecture',
  'User Research',
  'User Flow',
  'Visual Design',
  'Responsive Design',
  'Design Systems',
  'Interaction Design',
  ' UI Kits',
];

const programming = [
  'HTML',
  'CSS',
  'Javascript',
  'Vue.js',
  'Boostrap',
  'Vite',
  'Vercel',
  'Astro',
  'Git',
  'Github',
  'Azure Devops',
  'Scrum',
  'Trello',
  'Kanban'
];

</script>

<template>
  <main>
    <div class="container-view">
      <div class="experience-main">
        <div class="title">Experience</div>
        <div class="experience-contain">
          <ExperienceStructure
          v-for="(data,i) in experiences"
          :key="i"
          :year="data.year"
          :job-position="data.jobPosition"
          :description="data.description"
        />
        </div>
      </div>

      <div class="skills-main">
        <div class="title">Skills</div>
        <div class="subttitle">Soft Skills</div>
        <div class="skills-contain">
          <SkillsStructure
          v-for="(skill,i) in softSkills"
          :key="'soft-' + i"
          :tag="skill"
          />

        </div>

        <div class="subttitle">UX/UI</div>
        <div class="skills-contain">
          <SkillsStructure
          v-for="(skill,i) in uxui"
          :key="'soft-' + i"
          :tag="skill"
          />

        </div>

        <div class="subttitle">Programing and Development Tools</div>
        <div class="skills-contain">
          <SkillsStructure
          v-for="(skill,i) in programming"
          :key="'soft-' + i"
          :tag="skill"
          />

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.container-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.experience-main {
  border: 0px solid white;
}

.skills-main{
  border: 0px solid white;
}

.title {
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/M/Semibold */
  font-family: Figtree;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
}

.experience-contain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 24px;
  margin-bottom: 32px;
}

.subttitle {
  margin-top: 24px;
  margin-bottom: 24px;
  color: var(--Text-Default-Disabled, #A1A1A1);
  /* Text/M/Regular */
  font-family: Figtree;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
}

.skills-contain {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
}

</style>
