document.addEventListener('DOMContentLoaded', function () {
  var menuToggleLink = document.getElementById('menuToggleLink');
  var navbarCollapse = document.getElementById('navbarSupportedContent');

  navbarCollapse.addEventListener('show.bs.collapse', function () {
      menuToggleLink.classList.add('active');
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function () {
      menuToggleLink.classList.remove('active');
  });

  navbarCollapse.addEventListener('shown.bs.collapse', function () {
      menuToggleLink.classList.add('active');
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
      menuToggleLink.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var menuToggleLink = document.getElementById('menuToggleLink');
  var navbarCollapse = document.getElementById('navbarSupportedContent');
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  // Function to update the toggle text
  function updateToggleText() {
      // Check if the menu is currently open
      var isMenuOpen = navbarCollapse.classList.contains('show');
      menuToggleLink.textContent = isMenuOpen ? 'Close' : 'Menu';
  }

  // Click event for the menu toggle
  menuToggleLink.addEventListener('click', function () {
      bsCollapse.toggle();
  });

  // Bootstrap collapse events to update text
  navbarCollapse.addEventListener('show.bs.collapse', function () {
      menuToggleLink.textContent = 'Close';
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function () {
      menuToggleLink.textContent = 'Menu';
  });

  // Initialize text based on the initial state
  updateToggleText();
});



