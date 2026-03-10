// assets/js/faq.js
function initFaqToggles() {
  document.querySelectorAll(".faq-item .faq-question").forEach((btn) => {
    // prevent double-binding if init runs multiple times
    if (btn.dataset.faqBound === "true") return;
    btn.dataset.faqBound = "true";

    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");

      const isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open");

      if (!isOpen) {
        answer.style.height = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      } else {
        answer.style.height = "0px";
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Run once now
document.addEventListener("DOMContentLoaded", initFaqToggles);

// Run again shortly (Angular renders after load)
setTimeout(initFaqToggles, 300);
setTimeout(initFaqToggles, 1000);