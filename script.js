const testimonials = [
    {
      quote: "Finished products have been met with positive feedback from third-party users, thanks in part to VTEST’s robust assurance methods. Their thorough testing process, detailed reports, and attentive customer service continue to boost product quality.",
      name: "Technology Firm, Canada",
      position: "Co-Founder",
    },
    {
      quote: "VTEST’s involvement leads to lower bugs in each release and overall higher quality, acting as a partner in initial processes and conversations. Communication is easy and prompt, and they constantly work to improve. They also provide valuable documentation and feedback after each release.",
      name: "Flights App, USA",
      position: "CTO",
    },
    {
      quote: "We've evolved as a team. The testing has helped the development get better by identifying critical issues early, streamlining our release cycles, and boosting overall product stability and team confidence.",
      name: "Travel App, USA",
      position: "Founder",
    },
    {
      quote: "VTEST is a competent group, and I have never had an issue with them. Their consistency, responsiveness, and attention to detail have made them a reliable quality assurance partner throughout our product lifecycle.",
      name: "Mobile Apps Development Firm, Canada",
      position: "CTO",
    },
    {
      quote: "I liked that, even without me asking, they [VTEST] were able to come up with the whole test scenarios, the test cases, and so on. It showed initiative, deep understanding of the product, and a commitment to delivering thorough quality coverage.",
      name: "Staffing Firm, USA",
      position: "CO-Founder",
    },    
    {
      quote: "VTEST testers worked without an intermediary manager per the client's request. He was impressed by their ability to identify and execute testing scenarios. Their focus on objectives improved over the course of the engagement.",
      name: "HRMS Firm, USA",
      position: "CTO",
    },
    {
      quote: "VTEST’s involvement leads to lower bugs in each release and overall higher quality, acting as a partner in initial processes and conversations. Communication is easy and prompt, and they constantly work to improve. They also provide valuable documentation and feedback after each release.",
      name: "AI Application, USA",
      position: "Founder",
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