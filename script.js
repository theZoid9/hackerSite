// Login logic (no real security!)
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      localStorage.setItem("user", username);
      localStorage.setItem("isLoggedIn", "true");
      alert("Logged in as " + username);
      window.location.href = "index.html";
    });
  }

  // Comment form
  const commentForm = document.getElementById("commentForm");
  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const comment = document.getElementById("comment").value;
      // XSS Vulnerability: Using innerHTML
      document.getElementById("commentDisplay").innerHTML = comment;
    });
  }
});
