const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("show");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});


// Dark Light Theme

const themeBtns = document.querySelectorAll('.theme-toggle');
const body = document.body;

// Load Saved them

function applyTheme(them) {
    if(them === "dark"){
        body.classList.add("dark");
        themeBtns.forEach(btn => {
            btn.classList.remove("ri-moon-line")
            btn.classList.add("ri-sun-line")
        });
    } else{
        body.classList.remove("dark");
        themeBtns.forEach(btn => {
            btn.classList.remove("ri-sun-line")
            btn.classList.add("ri-moon-line")
        });
    }
}


applyTheme(localStorage.getItem("theme" || "light"));

themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});


// Brands Swiper

const swiper = new Swiper('.brands-swiper', {
    loop: true,
    spaceBetween:20,
    slidesPerView:6,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1300: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
        991: { slidesPerView: 4 },
        757: { slidesPerView: 3 },
        575: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
    }
});

document.getElementById("downloadCV").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./CV__for_UXUI.pdf";   // CV file path
  link.download = "Maisha_CV.pdf"; // Downloaded file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
