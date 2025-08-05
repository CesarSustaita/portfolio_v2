<script setup>
import { ref } from 'vue'

const showTooltip = ref(false)
const email = 'c.sustaita@outlook.com'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: '/src/components/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/cesarsustaita/'
  },
  {
    name: 'Figma',
    icon: '/src/components/icons/figma.svg',
    link: 'https://www.figma.com/@cesarsustaita'
  },
  {
    name: 'Github',
    icon: '/src/components/icons/github.svg',
    link: 'https://github.com/CesarSustaita'
  },
  {
    name: 'Instagram',
    icon: '/src/components/icons/ig.svg',
    link: 'https://www.instagram.com/c.sustaita_ux_ui/?hl=es-la'
  },
  {
    name: 'Threads',
    icon: '/src/components/icons/threas.svg',
    link: 'https://www.threads.com/@c.sustaita_ux_ui'
  },
  {
    name: 'X',
    icon: '/src/components/icons/X.svg',
    link: 'https://x.com/SustaitaC_'
  }

];

function openLink(url) {
  window.open(url, '_blank');
}

function copyEmail() {
  const emailCopy = email;
  const textarea = document.createElement('textarea');
  textarea.value = emailCopy;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  const successful = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (successful) {
    showTooltip.value = true
    setTimeout(() => {
      showTooltip.value = false
    }, 1800)
  }
}


</script>

<template>

  <div class="title">Contact Information </div>
  <div class="social-media">
  <div
    class="structure"
    v-for="(item, index) in socialLinks"
    :key="index"
  >
    <div class="social-data">
      <div class="social-img">
        <img :src="item.icon" :alt="item.name" />
      </div>
      <div class="social-name">{{ item.name }}</div>
    </div>
    <div class="social-btn">
      <button class="primary-icon-btn" @click="openLink(item.link)">
        <img src="/src/components/icons/arrow-up-right-dark.svg" alt="Open" />
      </button>
    </div>
  </div>


  <div class="structure">
      <div class="social-data">
        <div class="social-img"><img src="/src/components/icons/mail.svg" alt="mail" /></div>
        <div class="social-name">Mail</div>
      </div>
      <div class="social-btn">
        <button class="primary-icon-btn" @click="copyEmail">
          <img src="/src/components/icons/copy-dark.svg" alt="Share" />
        </button>
      </div>
  </div>
  <div v-if="showTooltip" class="tooltip">Link copied</div>

</div>



</template>

<style scoped>

.title {
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/XL/Medium */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
  margin-bottom: 34px;
}

.social-media{
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}



.structure {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.social-data {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  color: var(--Text-Default-Dafault, #FDFDFD);
  /* Text/XL/Medium */
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
}

.social-img {
  width: 32px;
  height: 32px;
}

.social-btn {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.tooltip {
  position: fixed;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--Background-Default-Tertiary, #2E2E2E);
  color: #fff;
  padding: 8px 12px;
  border-radius: var(--border-radius-border-8, 8px);
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  animation: fade-in-out 1.6s ease forwards;
  z-index: 9999;
}

@keyframes fade-in-out {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}


@media (max-width: 590px) {

.tooltip {
  top: 24px;
}

}

</style>
