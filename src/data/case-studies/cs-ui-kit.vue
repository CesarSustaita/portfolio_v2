<script setup>
const figmaLink = 'https://www.figma.com/design/a306A7eP1QKKhmHl87nHGm/CS-UI-Kit--Community-?node-id=54-997&t=hfjlRd8OiXixzUBX-1'
const community = 'https://www.figma.com/community/file/1533559101752781449/cs-ui-kit'
</script>


<template>
  <div class="data">
    <h2>CS UI Kit – A personal, accessible, and scalable user interface kit</h2>
    <div class="img"> <img src="@/components/Project/Card-Img/csuikit.svg"/></div>

    <p>
      CS UI Kit (César Sustaita UI Kit) is a user interface kit created to speed up interface design and maintain visual consistency from the start. It was born from the need to standardize my workflow and eliminate repetitive tasks like defining styles and components from scratch in every project. Originally designed for personal use, this kit is now publicly available on Figma for anyone looking to create interfaces faster and more efficiently.
    </p>
    <p><strong>My Role:</strong> Product Designer<br />
    <strong>Tools:</strong> Figma<br />
    <strong>Duration:</strong> 2 weeks, ongoing development</p>

    <h3>The Problem</h3>
    <p>
      While working on different projects, I kept running into the same problem: I had to define colors, typography, and basic components from scratch every time. This process was time-consuming and often led to visual inconsistencies across and within projects.
    </p>
    <p>
      On top of that, most UI Kits available on the market didn’t fit my needs. Some were too complex for simple projects, while others lacked the specific components I needed.
    </p>

    <h4>The Challenge</h4>
    <ul>
      <li><strong>Reduce design time:</strong> Create functional, visually consistent interfaces much faster.</li>
      <li><strong>Create a reusable standard:</strong> Build a solid personal base that could scale or adapt to future projects.</li>
      <li><strong>Ensure quality and accessibility:</strong> Build the system using principles of visual consistency, scalability, and accessibility (WCAG).</li>
      <li><strong>Enable theme design:</strong> Use color tokens to easily switch between light and dark modes efficiently.</li>
    </ul>

    <h3>My Role & Responsibilities</h3>
    <p>
      As the sole creator of this project, I was responsible for the entire product lifecycle—from concept to release. My tasks included:
    </p>
    <ul>
      <li><strong>Research & Analysis:</strong> Studying established design systems like Material Design (Google) and Apple’s HIG, as well as popular UI Kits in the Figma community.</li>
      <li><strong>System Architecture:</strong> Defining the structure of design tokens, text and color styles, and naming conventions.</li>
      <li><strong>Component Design:</strong> Building each component (buttons, inputs, avatars, etc.) with flexibility in mind—using variants and auto layout.</li>
      <li><strong>Documentation & Release:</strong> Organizing the Figma file clearly and publishing it publicly for others to use.</li>
      <li><strong>Validation:</strong> Using the UI Kit in real projects (like this portfolio) to test and improve it.</li>
    </ul>

    <h3>The Design Process</h3>

    <h4>Phase 1: Discovery & Research</h4>
    <p>
      Before designing anything, I studied existing design systems (Apple, Google) and popular Figma UI Kits. The goal was to understand best practices for structuring components, applying color tokens, and defining essential variants for a scalable system. This gave me a clear roadmap.
    </p>

    <h4>Phase 2: Ideation & Design</h4>
    <p>I built the system directly in Figma, starting with:</p>
    <ul>
      <li><strong>Design Tokens:</strong> A set of neutral and semantic colors (e.g., primary, success, error) that act as the system's brain—enabling easy switching between light and dark modes.</li>
      <li><strong>Typography & Spacing:</strong> A typographic and spacing scale based on an 8px rhythm to maintain visual harmony and structure.</li>
      <li><strong>Modular Components:</strong> Built from simple (atoms) to complex (molecules) components like buttons, inputs, cards, and modals. All components use auto layout and variants for flexibility and reuse.</li>
    </ul>

    <h4>Phase 3: Testing & Validation</h4>
    <p>
      The ultimate test for any design system is using it in a real project. I applied the CS UI Kit while designing this portfolio.
    </p>
    <p>
      This hands-on validation helped me identify areas for improvement and confirmed the system’s effectiveness. I was able to design the high-fidelity version of this website in under 30 minutes—proof that the workflow was much faster.
    </p>

    <h3>The Final Solution</h3>
    <p>
      The result is a clean, organized, ready-to-use design system that includes all the essential elements for digital products.
    </p>

    <h4>Main Components:</h4>
    <ul>
      <li><strong>Style Guide:</strong> Typography, colors, spacing, grids, and iconography.</li>
      <li><strong>Components:</strong> Avatars, Buttons, Inputs, Tags, Tabs, Accordion, Switch, Cards, Dialogs, and more.</li>
    </ul>
    <p>
      The structure is based on design token principles and inspired by Material Design to keep everything practical and easy to understand for other designers.
    </p>

    <h3>5. Results & Impact</h3>
    <ul>
      <li><strong>Proven Efficiency:</strong> The UI Kit helped me design this portfolio’s high-fidelity version in less than 30 minutes—fulfilling its goal of accelerating the design process.</li>
      <li><strong>Visual Consistency:</strong> It ensured a cohesive and professional look across projects, eliminating repetitive corrections.</li>
      <li><strong>Deep Learning:</strong> Creating my own UI Kit helped me understand key concepts like modular design, token structure, variants, and early-stage design thinking for implementation.</li>
    </ul>

    <h4>Lessons Learned</h4>
    <p>
      This project was a huge learning opportunity. I realized the value of planning and system architecture before building, and how a well-structured system benefits not just the designer—but also the developer who implements it.
    </p>

    <h3>6. Next Steps</h3>
    <p>
      CS UI Kit is a living project. I plan to keep expanding the library with more useful components for the design community, such as data tables, date pickers, and more advanced navigation components.
    </p>

    <p>
      <strong>Explore it on Figma!</strong><br />
      You can check out the full CS UI Kit, duplicate it, and freely use it in your own projects.
    </p>

    <div class="btns">
      <a :href="figmaLink" class="Primary-btn" target="link" rel="noopener noreferrer">
        <img src="/src/components/icons/Figma24.svg" alt="arrow-up-right" />
        <p>Go to Figma</p>

      </a>
      <a :href="community" class="Secondary-btn" target="link" rel="noopener noreferrer">
        <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/geography--v1.png" alt="geography--v1"/>
        <span>Visit the figma community</span>

      </a>
    </div>
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
