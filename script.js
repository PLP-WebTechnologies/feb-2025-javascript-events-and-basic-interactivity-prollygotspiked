// Change background color on button click
document.getElementById("colorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  // Show alert on hover
  document.getElementById("hoverBox").addEventListener("mouseenter", () => {
    alert("You hovered over the box!");
  });
  
  // Show what the user types
  document.getElementById("keypressInput").addEventListener("keyup", (e) => {
    document.getElementById("keypressOutput").textContent = `You typed: ${e.key}`;
  });
  
  // Double-click secret
  document.getElementById("colorBtn").addEventListener("dblclick", () => {
    alert("🎉 Double-click magic unlocked!");
  });
  
  // Change gallery image
  function changeImage(src) {
    document.getElementById("mainImage").src = src;
  }
  
  // Toggle accordion
  document.querySelector(".accordion-toggle").addEventListener("click", () => {
    const content = document.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
  
  // Form validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      feedback.textContent = "❌ Invalid email format.";
      feedback.style.color = "red";
    } else if (password.length < 8) {
      feedback.textContent = "❌ Password must be at least 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "✅ Form submitted successfully!";
      feedback.style.color = "green";
    }
  });
  
  // Helper function
  function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  }
  