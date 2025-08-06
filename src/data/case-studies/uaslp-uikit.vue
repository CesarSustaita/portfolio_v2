<script setup>
const figmaLink = 'https://www.figma.com/community/file/1516891092600893832/uaslp-ui-kit'

</script>

<template>

  <div class="data">
    <h1>UASLP UI Kit: Standardizing Design for Future Engineers</h1>
        <div class="img"> <img src="@/components/Project/Card-Img/uaslpuikit.svg"/></div>
        <div class="summary">
            <h3><strong>Summary</strong></h3>
            <p>
                The UASLP UI Kit is a thesis project created to solve a common problem at the Faculty of Engineering of the UASLP. It was noted that students, despite their strong technical skills, spent too much time on interface design for their academic projects. This resulted in visual inconsistency and frustration. This project provides a basic design guide and a component kit in Figma, which was then developed into a code library (using Lit Element). The goal is to help students create consistent and functional interfaces quickly, allowing them to focus on the logic and engineering of their systems.
            </p>
        </div>

        <div class="imgs"> <img src="@/components/Project/Card-Img/uaslpuikit/description2.svg"/></div>
        <div class="btns">
        <a :href="figmaLink" class="Primary-btn" target="link" rel="noopener noreferrer">
          <img src="/src/components/icons/Figma24.svg" alt="arrow-up-right" />
          <p>Go to Figma</p>

        </a>
        <a  class="Secondary-btn--disabled" target="link" rel="noopener noreferrer">
          <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/geography--v1.png" alt="geography--v1"/>
          <span>Go to the Documentation</span>

        </a>
      </div>

        <h2>1. The Problem: Engineering Talent vs. The Design Challenge</h2>
        <p>
            In the Faculty of Engineering, students in courses like "Computer Projects (I, II, and III)" must develop complete software systems. However, a common pain point was identified:
        </p>
        <ul>
            <li><strong>Visual Inconsistency:</strong> Each project had a completely different interface, with no standard visual style to connect them to the UASLP.</li>
            <li><strong>Process Friction:</strong> Students with a technical background but little interest in design felt frustrated. They spent too much time "fighting with CSS" instead of focusing on the software's architecture.</li>
            <li><strong>Perceived Quality:</strong> Even if a system worked well, a poor interface often lowered the final project's perceived quality.</li>
        </ul>
        <p>
            The main user is a student in their 7th to 9th semester. They are technically skilled but need a tool to be efficient in design without needing to be a design expert.
        </p>
        <div class="imgs"> <img src="@/components/Project/Card-Img/uaslpuikit/portada2.svg"/></div>

        <h3><strong>The Goals</strong></h3>
        <ol>
            <li><strong>Speed Up Development:</strong> Provide a base of ready-to-use components to drastically reduce the time spent on interface design.</li>
            <li><strong>Standardize and Improve Quality:</strong> Create a consistent visual language for the faculty's projects, improving the quality and usability of the final products.</li>
            <li><strong>Empower Students:</strong> Offer a tool that allows all students, no matter their design skills, to create professional-looking products.</li>
        </ol>

        <h2>2. Research and Strategy</h2>
        <p>To build a useful and well-founded solution, the process started with a research phase.</p>

        <h3><strong>Analysis of Existing Design Systems</strong></h3>
        <p>
            I researched leading industry design systems like <strong>Material Design (Google)</strong>, <strong>Carbon (IBM)</strong>, and other popular UI kits in the Figma community. The goal was to understand their structure, the logic behind their <strong>Design Tokens</strong> (colors, typography, spacing), and how they apply the principles of <strong>Atomic Design</strong>. This analysis was key to defining the architecture of my own system.
        </p>

        <h3><strong>Strategic Component Selection</strong></h3>
        <p>
            Instead of creating hundreds of components, the strategy was to identify the most essential ones. Based on the analysis of reference systems, I selected <strong>16 high-frequency components</strong> (buttons, inputs, cards, etc.) that cover most of the needs for creating a standard web application. This ensures the kit is useful from the start and allows students to combine these "atoms" and "molecules" to create more complex organisms.
        </p>

        <h2>3. Design and Build Process in Figma</h2>
        <p>The UI Kit was carefully built in Figma, considering both aesthetics and ease of use for others.</p>

        <h3><strong>Style Guide: The System's Foundation</strong></h3>
        <ol>
            <li><strong>Color:</strong> I extracted the official colors directly from the UASLP's visual identity to create the main palette, ensuring brand consistency.</li>
            <li><strong>Typography and Spacing:</strong> I defined a clear typographic scale and an <strong>8px grid system</strong> for all spacing and sizes. This standard guarantees visual harmony and a "pixel-perfect" result.</li>
            <li><strong>Layouts:</strong> I created basic column guides for the three main breakpoints: web, tablet, and mobile.</li>
        </ol>

        <h3><strong>Smart and Flexible Components</strong></h3>
        <p>
            The Figma file is organized with a page for the style guide and dedicated pages for each component. All 16 components were built using Figma's best practices:
        </p>
        <ul>
            <li><strong>Auto-Layout:</strong> To ensure components are fully responsive and adapt to their content.</li>
            <li><strong>Variants and Properties:</strong> Each component includes key variants (e.g., `default`, `hover`, `disabled`), controlled by easy-to-use properties. This allows anyone to customize components without "breaking" them.</li>
        </ul>
        <div class="imgs"> <img src="@/components/Project/Card-Img/uaslpuikit/componenteslist.svg"/></div>
        <p><em>List Components</em></p>

        <h2>4. From Design to Code: The Complete Solution</h2>
        <p>
            To make the UI Kit a truly useful tool, the project went beyond Figma by translating the design system into a functional code library.
        </p>

        <h3><strong>The Technology Choice: Lit Element</strong></h3>
        <p>
            <strong>Lit Element</strong> was chosen to build the component library for several strategic reasons:
        </p>
        <ul>
            <li><strong>Based on Web Standards:</strong> It uses native Web Components, which guarantees long-term compatibility.</li>
            <li><strong>Lightweight and Fast:</strong> It is not a heavy library, making it ideal for academic projects.</li>
            <li><strong>Framework-Independent:</strong> The components can be used in Vanilla JS, React, Angular, or Vue projects, offering maximum versatility for students.</li>
        </ul>

        <h3><strong>The Complete Ecosystem: NPM Package and Documentation</strong></h3>
        <p>To ensure it is easy to adopt and use, the final ecosystem includes:</p>
        <ol>
            <li><strong>A library published as an NPM package</strong>, allowing students to easily install it in any web project.</li>
            <li><strong>A detailed documentation page</strong>, inspired by sites like Bootstrap or Material Design, which explains how to install the library and use each component with code examples.</li>
        </ol>

        <h2>5. Impact and Learnings</h2>

        <h3><strong>Impact on the Student Community</strong></h3>
        <p>
            Adopting this UI Kit has the potential to transform how projects are developed at the faculty. It is expected that students can <strong>save weeks of work</strong> on design. This will lead to higher-quality, more consistent final projects with a better user experience, which will be a key differentiator in their final presentations.
        </p>

        <h3><strong>Challenges and Personal Growth</strong></h3>
        <p>
            This project has been one of the most complete and challenging of my academic career. The initial challenge was starting from scratch and making decisions to standardize something as subjective as design. This forced me to master Figma at a much deeper level. The final phase of the project, which included the implementation in Lit Element, creating the NPM package, and developing the documentation, was a technical challenge that I took on with enthusiasm. This comprehensive project not only allowed me to strengthen my design skills but also pushed me to master software architecture, library publishing, and technical documentation, completing my profile as an engineer.
        </p>
  </div>


  <div class="btns">
      <a :href="figmaLink" class="Primary-btn" target="link" rel="noopener noreferrer">
        <img src="/src/components/icons/Figma24.svg" alt="arrow-up-right" />
        <p>Go to Figma</p>

      </a>
      <a  class="Secondary-btn--disabled" target="link" rel="noopener noreferrer">
        <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/geography--v1.png" alt="geography--v1"/>
        <span>Go to the Documentation</span>

      </a>
  </div>

</template>

<style scoped>

.data {
  color: var(--Text-Default-Dafault, #e8e8e8);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 180%;
}

.data strong {
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

.imgs {
  border-radius: var(--border-radius-border-8, 8px);
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.imgs img {
  width: 100%;
  height: 100%;
  object-fit:contain;
  object-position:center;
  display: block;
}

.btns {
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
}

@media (max-width: 590px) {

.data {
  color: var(--Text-Default-Dafault, #e8e8e8);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.imgs img {
  width: 100%;
  height: 100%;
  object-fit:contain;
  object-position:center;
  display: block;
}


}

</style>
