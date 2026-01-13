//HOME PAGE CODE START------------------------/home/codexpro/Documents/glamaura.com-main/index.html--

//PAGE LORDER SCRIPT CODE START

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = nav && nav.type === "reload";

  if (!sessionStorage.getItem("glamaura-visited") || isReload) {
    sessionStorage.setItem("glamaura-visited", "true");

    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.transition =
          "opacity 1.2s cubic-bezier(.22,1,.36,1), transform 1.2s cubic-bezier(.22,1,.36,1), filter 1.2s ease";

        loader.style.opacity = "0";
        loader.style.transform = "scale(1.05)";
        loader.style.filter = "blur(6px)";

        setTimeout(() => loader.remove(), 1000);
      }, 4000); // 👈 loader timing (change if needed)
    });

  } else {
    loader.style.display = "none";
  }
});

//PAGE LORDER SCRIPT CODE END


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

//HOME PAGE CODE END------------------------/home/codexpro/Documents/glamaura.com-main/index.html--





//$-STORE PAGE CODE START-----------------------/home/codexpro/Documents/glamaura.com-main/products.html---

//PRODUCT GRID SECTION- CODE START--------------------------
const grid = document.getElementById("productsGrid");
const cards = Array.from(document.querySelectorAll(".product-card"));
const loadMoreBtn = document.getElementById("loadMoreBtn");

let visible = 0;
const rowsToShow = 3;

function getColumns() {
  return window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
}

function showNextRows() {
  const cols = getColumns();
  const perLoad = cols * rowsToShow;

  for (let i = visible; i < visible + perLoad; i++) {
    if (cards[i]) cards[i].classList.remove("hidden");
  }

  visible += perLoad;

  if (visible >= cards.length) {
    loadMoreBtn.classList.add("hidden");
  }
}

// Initially hide all
cards.forEach(card => card.classList.add("hidden"));

// First load (3 rows)
showNextRows();

// Button click
loadMoreBtn.addEventListener("click", showNextRows);

// On resize recalc properly
window.addEventListener("resize", () => {
  cards.forEach(card => card.classList.add("hidden"));
  visible = 0;
  showNextRows();
});
//PRODUCT GRID- SECTION CODE END--------------------------

//$-STORE PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/products.html----





//$-ABOUT PAGE CODE START---------------------/home/codexpro/Documents/glamaura.com-main/about.html-----

//$-ABOUT PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/about.html----





//$-SERVICE PAGE CODE START----------------------/home/codexpro/Documents/glamaura.com-main/services.html----

//$-SERVICE PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/services.html----






//$-REVIEWS PAGE CODE START----------------------/home/codexpro/Documents/glamaura.com-main/reviews.html----

//$-REVIEWS PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/reviews.html----






//$-TEAM PAGE CODE START----------------------/home/codexpro/Documents/glamaura.com-main/team.html----

//$-TEAM PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/team.html----






//$-CONTACT PAGE CODE START----------------------/home/codexpro/Documents/glamaura.com-main/contact.html----

//$-CONTACT PAGE CODE END----------------------/home/codexpro/Documents/glamaura.com-main/contact.html----