---
layout: "profile"
---

<div style="font-size: 1.25rem; margin-bottom: 1.5rem; text-align: center;">
  <span>> Identity: </span>
  <span id="telemetry-text"></span><span class="telemetry-cursor"></span>
</div>

<script>
  const titles = [
      "Mechanical Engineering Student...", 
      "NASA Citizen Scientist...", 
      "H.O.L.M.E.S. Co-Founder...",
      "Aerospace Researcher..."
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTelemetry() {
      const telemetrySpan = document.getElementById("telemetry-text");
      if (!telemetrySpan) return; 

      const currentTitle = titles[titleIndex];

      if (isDeleting) {
          telemetrySpan.textContent = currentTitle.substring(0, charIndex - 1);
          charIndex--;
      } else {
          telemetrySpan.textContent = currentTitle.substring(0, charIndex + 1);
          charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && charIndex === currentTitle.length) {
          typeSpeed = 2000; 
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          typeSpeed = 400; 
      }

      setTimeout(typeTelemetry, typeSpeed);
  }

  // Ignite immediately
  setTimeout(typeTelemetry, 800);
</script>

### Current Focus & Research
I am currently navigating my 6th semester in **Mechanical Engineering at IUBAT**. My work is centered on the intersection of advanced manufacturing and aerospace systems.

---

### Global Recognition
* **NASA Citizen Scientist:** Officially credited by NASA JPL for the discovery of 3 provisional asteroids in 2019.
* **Presidency Gold Medalist:** Awarded in 2019 for academic and extracurricular excellence.
* **H.O.L.M.E.S. Research Group:** Co-founder and lead investigator in a multi-disciplinary engineering framework.

---

### Technical Toolkit
* **Languages:** **[English]** **[Bengali]** **[Arabic]**
* **Engineering:** **[Mechanical Design]** **[Manufacturing]** **[Electronics]**
* **Systems:** **[Arch Linux]** **[C/C++]** **[NASA JPL Data Analysis]**