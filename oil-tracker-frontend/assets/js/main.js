document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    alert(`Welcome, ${name}! Redirecting to your dashboard...`);
    // later: redirect to dashboard.html
    window.location.href = "dashboard.html";
  } else {
    alert("Please fill all fields!");
  }
});