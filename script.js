// Toggle sidebar visibility on small screens
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function shrinkOnClick(button) {
  button.style.transform = "scale(0.95)";

  // يرجع الحجم بعد 150 ملي ثانية
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);
}