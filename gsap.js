const slides = document.querySelectorAll('.slide');
let isMobile = window.innerWidth <= 768; // Assuming mobile width is 768px or less

slides.forEach((slide, i) => {
    let angle = isMobile ? i * 10 : (i * 10) - 10;
    gsap.to(slide, {
        rotation: angle,
        transformOrigin: "0% 2300px",
    });
    // gsap.from(slide, {
    //     rotation: angle,
    // });
});

let speed = isMobile ? 30 : 30; // Faster speed on mobile
ScrollTrigger.create({
    trigger: '.scroller',
    start: 'top bottom',
    end: 'bottom bottom',
    // markers: true,
    scrub: true,  // Smoothly animate on scroll
    onUpdate: (self) => {
        gsap.to(slides, {
            rotation: (i) => {
                let baseAngle = isMobile ? i * 10 : (i * 10) - 10;
                return baseAngle - self.progress * speed;
            },
            ease: 'power1.inOut' 
        });
    }
});