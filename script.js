const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Toggle accordion content
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Close
    } else {
      // Close all open items (optional if you want only one open at a time)
      document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);

      content.style.maxHeight = content.scrollHeight + "px"; // Open
    }
  });
});



const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  $(document).ready(function(){
    $(".progress-carousel").owlCarousel({
      items: 3,
      margin: 15,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 }
      }
    });

    // Fancybox automatically works on [data-fancybox] elements
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: {
        display: ["zoom", "slideShow", "fullscreen", "download", "thumbs", "close"],
      },
      zoom: true,
    });
  });


  function toggleReadMore() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read more →";
  }
}


