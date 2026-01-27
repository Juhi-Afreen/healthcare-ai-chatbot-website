document.addEventListener("DOMContentLoaded", () => {
  const leadForm = document.querySelector("form");

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation or data gathering could go here
      const formData = new FormData(leadForm);
      console.log("Form Submitted", Object.fromEntries(formData));

      // Feedback to user
      alert("Thank you! Our team will contact you shortly.");
      leadForm.reset();
    });
  }
});
