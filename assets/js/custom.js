document.addEventListener("DOMContentLoaded", function() {
    // 1. Target the payload: Project cards, gallery images, and article text
    const targets = document.querySelectorAll('.article-card, .gallery-grid img, .prose p, .prose h2, .prose h3, .prose img');
    
    // 2. Prime the targets with the initial hidden state
    targets.forEach(target => {
        target.classList.add('quantum-reveal');
    });

    // 3. Construct the Motion Sensor (Intersection Observer)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element enters the screen...
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Ignite the animation
                observer.unobserve(entry.target); // Detach sensor so it only happens once
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -40px 0px" // Slight buffer so it triggers perfectly
    });

    // 4. Activate the sensors on all targeted elements
    targets.forEach(target => {
        observer.observe(target);
    });
});

/* --- The Telemetry Terminal Engine --- */
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
    if (!telemetrySpan) return; // Only runs if the terminal exists

    const currentTitle = titles[titleIndex];

    // Typing or Deleting Logic
    if (isDeleting) {
        telemetrySpan.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        telemetrySpan.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    // Set pacing (deleting is faster than typing)
    let typeSpeed = isDeleting ? 40 : 100;

    // Word completion logic
    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000; // Pause to let them read the full title
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 400; // Pause before starting the next word
    }

    setTimeout(typeTelemetry, typeSpeed);
}

// BULLETPROOF IGNITION: Checks if the page is already loaded before waiting
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(typeTelemetry, 500);
    });
} else {
    setTimeout(typeTelemetry, 500);
}