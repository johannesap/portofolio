// Tombol kembali ke atas
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.fontSize = "18px";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.backgroundColor = "#00d1b2";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
backToTopBtn.style.zIndex = "999";

// Scroll ke atas saat diklik
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tampilkan tombol saat discroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Fungsi Reveal on Scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Jalankan saat scroll
window.addEventListener("scroll", revealOnScroll);

// Jalankan saat awal load
window.addEventListener("load", revealOnScroll);
