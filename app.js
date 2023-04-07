function toggleDropdown() {
    var dropdown = document.getElementById("SoftwareDropdownMenu");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  var link = document.querySelector(".nav-item .nav-link");
  link.addEventListener("click", toggleDropdown);
  