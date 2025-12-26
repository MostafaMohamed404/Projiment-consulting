// Accounting 
document.querySelectorAll(".accounting-service").forEach(section => {
  section.style.display = "none";
});

const params = new URLSearchParams(window.location.search);
const service = params.get("service");

if (service) {
  const active = document.getElementById(service);
  if (active) {
    active.style.display = "block";
  }
}
