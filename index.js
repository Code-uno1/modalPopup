document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const overlay = document.getElementById("overlay");
    const modal = document.querySelector(".modal");
  
    // Open modal
    openBtn.addEventListener("click", () => {
      overlay.classList.remove("hidden");
    });
  
    // Close modal via close button
    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  
    // Close modal by clicking overlay
    overlay.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  
    // Prevent modal clicks from closing overlay
    modal.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  
    // Optional: close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        overlay.classList.add("hidden");
      }
    });
  });
  