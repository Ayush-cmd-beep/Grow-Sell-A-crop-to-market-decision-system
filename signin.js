const roles = document.querySelectorAll(".role");
let selectedRole = "Farmer";

roles.forEach(button => {
  button.addEventListener("click", () => {
    roles.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    selectedRole = button.dataset.role;
    showToast(`Signing in as ${selectedRole}`);
  });
});

const password = document.getElementById("password");
document.getElementById("togglePassword").addEventListener("click", () => {
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  document.getElementById("togglePassword").textContent = visible ? "◉̸" : "◉";
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pass = password.value.trim();

  if (!email || !pass) {
    showToast("Please enter your email/phone and password.");
    return;
  }

  const button = e.submitter;
  button.textContent = "Signing in...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Sign In";
    button.disabled = false;
    showToast(`Welcome! ${selectedRole} sign-in successful.`);
  }, 900);
});

document.querySelectorAll(".social").forEach(button => {
  button.addEventListener("click", () =>
    showToast(`Connecting with ${button.dataset.provider}...`)
  );
});

document.getElementById("forgotPassword").addEventListener("click", e => {
  e.preventDefault();
  showToast("Password recovery link would be sent to your account.");
});

document.getElementById("signupLink").addEventListener("click", e => {
  e.preventDefault();
  showToast(`Opening ${selectedRole} registration...`);
});
