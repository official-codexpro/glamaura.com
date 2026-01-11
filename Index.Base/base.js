//HOME PAGE CODE START--------------------------

//NEVBAR CODE START

  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  btn.onclick = () => menu.classList.toggle('hidden');

//NEVBAR CODE ENDING


//TEAM-MEMBER SECTION SCRIPT START

  const teamSlider = document.getElementById("teamSlider");

  function smoothScroll(element, distance, duration = 600) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function easeInOut(t) {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOut(progress);

      element.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  function teamNext() {
    smoothScroll(teamSlider, 240, 700);
  }

  function teamPrev() {
    smoothScroll(teamSlider, -240, 700);
  }
//TEAM-MEMBER SECTION SCRIPT END

//REVIEW SECTION SCRIPT START

  const reviewSlider = document.getElementById("reviewSlider");

  function smoothScroll(el, distance, duration = 700) {
    const start = el.scrollLeft;
    const startTime = performance.now();

    function ease(t) {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + distance * ease(progress);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  function reviewNext() {
    smoothScroll(reviewSlider, 340);
  }

  function reviewPrev() {
    smoothScroll(reviewSlider, -340);
  }
//REVIEWS SECTION SCRIPT END

//HOME PAGE CODE START--------------------------
