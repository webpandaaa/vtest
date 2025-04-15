const testimonials = [
    {
      quote: "We've evolved as a team. The testing has helped the development get better",
      name: "Travel App, USA",
      position: "Founder",
    },
    {
      quote: "Working with the team streamlined our workflow dramatically.",
      name: "Health Startup, UK",
      position: "CTO",
    },
    {
      quote: "Their dedication to testing has brought new confidence to our releases.",
      name: "E-Commerce, India",
      position: "Product Head",
    },
    // Add more testimonials as needed
  ];

  let currentIndex = 0;

  function renderTestimonial(index) {
    const container = document.getElementById('testimonial-content');
    const testimonial = testimonials[index];
    container.innerHTML = `
      <p>${testimonial.quote}</p>
      <p><strong>${testimonial.name}</strong></p>
      <p>${testimonial.position}</p>
    `;

    const dots = document.getElementById('dots-container').children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === index);
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
  }

  function createDots() {
    const dotsContainer = document.getElementById('dots-container');
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentIndex = i;
        renderTestimonial(currentIndex);
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Initialize
  createDots();
  renderTestimonial(currentIndex);