// navbar
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.right = menu.style.right === "0px" ? "-250px" : "0px";
}

function tab() {
  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const serviceDescriptions = document.querySelectorAll(".serv-description");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");

      // Remove active class from all tabs and descriptions
      tabs.forEach((t) => t.classList.remove("active"));
      serviceDescriptions.forEach((desc) => desc.classList.remove("active"));

      // Add active class to clicked tab and corresponding description
      tab.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // // Sticky header
  // window.addEventListener("scroll", () => {
  //   const header = document.querySelector("header");
  //   header.classList.toggle("scrolled", window.scrollY > 0);
  // });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

tab();

const countNumbers = document.querySelectorAll(".stat-number");
const speed = 5;

countNumbers.forEach((count) => {
  const updateNumber = () => {
    const targetNumber = parseInt(count.dataset.number);
    // console.log(targetNumber);
    const initialNumber = parseInt(count.innerText);
    // console.log(initialNumber);
    const increment = Math.trunc(targetNumber / speed);
    // console.log(increment);

    if (initialNumber < targetNumber) {
      count.innerText = `${initialNumber + increment}+`;
      setTimeout(updateNumber, 50);
    }
  };

  updateNumber();
});

const stats = document.querySelector(".stats-container");
const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    const countNumbers = document.querySelectorAll(".stat-number");
    const speed = 5;

    countNumbers.forEach((count) => {
      const updateNumber = () => {
        const targetNumber = parseInt(count.dataset.number);
        const initialNumber = parseInt(count.innerText);
        const increment = Math.trunc(targetNumber / speed);

        if (initialNumber < targetNumber) {
          count.innerText = `${initialNumber + increment}+`;
          setTimeout(updateNumber, 50);
        }
      };

      updateNumber();
    });

    observer.unobserve(stats);
  },
  {
    root: null,
    threshold: 0.5,
  }
);

statsObserver.observe(stats);
