document.addEventListener("DOMContentLoaded", () => {
  const leadForm = document.querySelector("form");

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation or data gathering could go here
      const formData = new FormData(leadForm);
      console.log("Form Submitted", Object.fromEntries(formData));

      // Feedback to user: show modal
      const modal = document.getElementById("success-modal");
      if (modal) {
        modal.classList.remove("hidden");
        // Optional: trap focus or add accessibility improvements
      }
      leadForm.reset();

      // Close modal handler
      const closeBtn = document.getElementById("close-modal-btn");
      if (closeBtn) {
        closeBtn.onclick = () => {
          modal.classList.add("hidden");
        };
      }
    });
  }
});
