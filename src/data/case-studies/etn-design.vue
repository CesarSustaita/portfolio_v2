<script setup>
const figmaLink = 'https://www.figma.com/design/rQ142VDXfZcYt1whX7x0f0/ETN-APP?node-id=0-1&t=kurzEI6oK36sjz84-1'
const community = 'https://www.instagram.com/p/DCKjSiSTqiE/?igsh=b3EyNmxpZjQxZHpt'
</script>

<template>

  <div class="data">

  <h2><strong>Experience Redesign: Improving the Ticket Purchase Flow in the ETN App</strong></h2>
    <div class="img"> <img src="@/components/Project/Card-Img/etn.svg"/></div>

  <p>
    This is a conceptual case study that started from a personal need as a frequent user of the ETN bus app. Even though the app works, I noticed a big opportunity to improve the purchase process: the selected date and time were not always visible, creating confusion and risk of mistakes.
  </p>
  <p>
    This project focused on redesigning that flow to keep the key travel information always visible. The goal was to increase user confidence and make the buying process faster and more comfortable.
  </p>
  <p><strong>My Role:</strong> UX/UI Designer (Personal Project)<br>
     <strong>Tools:</strong> Figma<br>
     <strong>Duration:</strong> 2 weeks</p>

  <h2><strong>1. The Problem: Uncertainty in a Key Step</strong></h2>
  <p>
    As a regular user of the ETN app to buy bus tickets, I often noticed the same problem: when choosing a seat and confirming the trip, the selected date and time disappeared from the screen.
  </p>
  <p>
    This forced me to go back and double-check or try to remember them, which added mental effort and made me feel unsure — especially before paying. A small mistake could mean buying a ticket for the wrong date or time.
  </p>

  <h3><strong>Hypothesis and Goals</strong></h3>
  <p>
    The project started with a clear idea: if the main travel information (origin, destination, date, and time) stays visible during the whole process, users will feel more confident and make fewer mistakes.
  </p>
  <p>With this in mind, I set two main goals:</p>
  <ul>
    <li><strong>Reduce uncertainty:</strong> Let users always see what they selected, so they feel confident before paying.</li>
    <li><strong>Improve flow efficiency:</strong> Remove the need to go back or hesitate, making the process quicker and smoother.</li>
  </ul>

  <h2><strong>2. Research and Discovery</strong></h2>
  <p>To understand how to fix this, I looked at similar apps and reviewed how the ETN app works today.</p>

  <h3><strong>Competitive Analysis</strong></h3>
  <p>
    I researched how other leading travel apps (bus and airline) manage this kind of information. I checked apps like <strong>Primera Plus</strong> and <strong>Volaris</strong>, paying attention to how they show important details.
  </p>
  <p>
    I found that good apps keep a summary of the trip visible all the time — usually at the top of the screen — to confirm the key information on every step.
  </p>

  <h3><strong>Current Flow Analysis</strong></h3>
  <p>
    I documented the steps in the current ETN app to find the exact moment when the travel details disappear and how that affects the experience.
  </p>
  <p><em>[Insert here a simple diagram or screenshot showing where the issue happens in the original ETN app flow]</em></p>

  <h2><strong>3. Design Process and Solution</strong></h2>
  <p>Because the problem was clear from my experience and supported by the research, I chose a direct design approach.</p>

  <h3><strong>Visual Identity</strong></h3>
  <p>
    To keep the new design aligned with the ETN brand, I started by taking the main colors from the company logo. These gave me a base color palette to create a familiar and friendly experience for users.
  </p>

  <h3><strong>High-Fidelity Design</strong></h3>
  <p>
    Instead of starting with sketches, I moved straight to high-fidelity screens. My research had already given me a strong idea: a <strong>fixed summary card</strong> that always shows the most important info.
  </p>
  <p>Here’s how I approached the design:</p>
  <ul>
    <li><strong>Information hierarchy:</strong> I organized the summary card so the most important data (destination, date, and time) stands out immediately.</li>
    <li><strong>Visual integration:</strong> I designed the component to look natural inside the existing screens — useful but not distracting.</li>
    <li><strong>Consistent components:</strong> I used the same colors and styles throughout to keep everything cohesive and professional.</li>
  </ul>
  <p><em>[Insert your final redesign screenshots here. A “before and after” view works great.]</em></p>

  <h2><strong>4. The Proposed Solution</strong></h2>
  <p>
    The final solution is a redesigned ticket purchase flow that includes a persistent <strong>trip summary</strong>. This element keeps the most important information — origin, destination, date, and time — visible from the seat selection to the payment screen.
  </p>
  <p>
    This small but meaningful change improves the experience, going from something confusing to something that inspires confidence.
  </p>

  <h2><strong>5. Results and Learnings</strong></h2>

  <h3><strong>Expected Impact</strong></h3>
  <p>If implemented, this solution could bring important improvements:</p>
  <ul>
    <li><strong>More user confidence:</strong> The app feels safer and more trustworthy when users see clear info at all times.</li>
    <li><strong>Fewer mistakes:</strong> Users would be less likely to buy the wrong ticket, reducing support issues.</li>
    <li><strong>Faster checkouts:</strong> Confident users hesitate less and complete purchases more quickly.</li>
  </ul>

  <h3><strong>Lessons Learned</strong></h3>
  <p>
    This personal project taught me how <strong>small changes can have a big impact</strong>. It showed me the power of research and of observing everyday tools with a critical eye.
  </p>
  <p>
    Sometimes, the best improvements don’t come from adding new features, but from <strong>making existing ones more user-friendly</strong>, saving the user’s time and attention.
  </p>

  </div>

  <div class="btns">
      <a :href="figmaLink" class="Primary-btn" target="link" rel="noopener noreferrer">
        <img src="/src/components/icons/Figma24.svg" alt="arrow-up-right" />
        <p>Go to Figma</p>

      </a>
      <a :href="community" class="Secondary-btn" target="link" rel="noopener noreferrer">
        <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/geography--v1.png" alt="geography--v1"/>
        <span>Go to Instagram</span>

      </a>
  </div>

</template>

<style scoped>

.data {
  color: var(--Text-Default-Dafault, #FDFDFD);
  margin-bottom: 60px;
  font-family: Figtree;
  font-size: 15px;
}

.h2 {
  font-weight: bold;

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

.btns {
  margin-top: 48px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
}

</style>
