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