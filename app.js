const dropdownMenu = document.getElementById("dropdown-menu");
const navItem = document.querySelector(".softwaresNavItem");

navItem.addEventListener("mouseover", function() {
  dropdownMenu.style.display = "block";
});

navItem.addEventListener("mouseout", function(event) {
  // Check if the mouse has moved outside of both the nav item and the dropdown menu
  if (!navItem.contains(event.relatedTarget) && !dropdownMenu.contains(event.relatedTarget)) {
    dropdownMenu.style.display = "none";
  }
});

dropdownMenu.addEventListener("mouseover", function() {
  dropdownMenu.style.display = "block";
});

dropdownMenu.addEventListener("mouseout", function(event) {
  // Check if the mouse has moved outside of both the nav item and the dropdown menu
  if (!navItem.contains(event.relatedTarget) && !dropdownMenu.contains(event.relatedTarget)) {
    dropdownMenu.style.display = "none";
  }
});
