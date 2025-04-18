const testimonials = [
    {
      quote: "VTEST knows what it means to deliver quality software testing services. Their team worked to understand our specific Australian market needs and delivered exceptional results. They communicated effectively and became a true extension of our development team.",
      name: "FinTech Company, Sydney",
      position: "Technology Director",
    },
    {
      quote: "The VTEST team's attention to detail helped us identify critical bugs before our major product launch. Their understanding of the Australian financial regulatory requirements was invaluable.",
      name: "Banking Software Provider, Melbourne",
      position: "CTO",
    },
    {
      quote: "We've been working with VTEST for over two years, and they consistently deliver high-quality testing services. Their flexible engagement model works perfectly for our agile development cycles.",
      name: "E-commerce Platform, Brisbane",
      position: "Head of Development",
    },
    {
      quote: "VTEST's mobile app testing service ensured our application performed flawlessly across all devices popular in the Australian market. Their detailed reports helped us prioritize fixes efficiently.",
      name: "Mobile App Developer, Perth",
      position: "Product Manager",
    },
    {
      quote: "As a healthcare software provider, we need meticulous testing that complies with strict Australian privacy standards. VTEST delivered beyond our expectations and helped us achieve compliance with confidence.",
      name: "Healthcare Software Company, Adelaide",
      position: "Compliance Officer",
    },    
    {
      quote: "The on-demand testing team from VTEST saved our product launch. They quickly mobilized resources to address our testing backlog and delivered comprehensive results within our tight deadline.",
      name: "SaaS Company, Gold Coast",
      position: "Project Manager",
    },
    {
      quote: "VTEST's performance testing identified critical bottlenecks that would have affected our Australian users during peak times. Their recommendations helped us optimize our infrastructure before launch",
      name: "Online Marketplace, Sydney",
      position: "IT Director",
    },
    {
      quote: "We appreciate VTEST's transparent communication and reporting. Their AI-driven analytics provided insights that helped us make informed decisions about our quality assurance strategy.",
      name: "Insurance Technology Provider, Melbourne",
      position: "COO",
    },
    
  ];

  let currentIndex = 0;

  function renderTestimonial(index) {
    const container = document.getElementById('testimonial-content');
    const testimonial = testimonials[index];
    container.innerHTML = `
      <p>${testimonial.quote}</p>
      <h1><strong>${testimonial.name}</strong></h1>
      <p>${testimonial.position}</p>
    `;

    const dots = document.getElementById('four-dots-container').children;
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
    const dotsContainer = document.getElementById('four-dots-container');
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('four-dot');
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