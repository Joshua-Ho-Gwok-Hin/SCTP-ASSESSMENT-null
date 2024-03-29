let header = document.getElementById("appendHeader");

// Check if the user is logged in
const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

// Create a navbar template
let navbarTemplate = `
  <nav id="navbarNav" class="navbar navbar-expand-lg fixed-top pb-2" data-bs-theme="dark"
        style="background-color:#3d5a80;">
        <div class="container-fluid">
          <img id="logo" src="/images/artwork/plane_earth_logo.png" alt="logo">
          <a class="navbar-brand ps-3" href="#">Travel With Us</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link pe-3" href="/index.html"><i class="bi bi-house pe-1"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3" href="/products.html"><i class="bi bi-airplane pe-1"></i>Tour</a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3" href="/about.html"><i class="bi bi-balloon-heart pe-1"></i>About Us</a>
              </li>
              ${isLoggedIn ? `
                <li class="nav-item">
                <a href="/product_form.html" class="nav-link pe-3"><i class="bi bi-award pe-1"></i>Admin</a>
              </li>
              <li class="nav-item">
              <a class="nav-link pe-3"><i class="bi bi-person-square pe-1"></i>Hi, ${sessionStorage.getItem('username')}</a>
            </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="logout()"><i class="bi bi-box-arrow-right pe-1"></i>Logout</a>
                </li>
              ` : `
              <li class="nav-item">
                <a class="nav-link" href="/login.html">| <i class="bi bi-lock-fill ps-2"></i></a>
              </li>`}
            </ul>
          </div>
        </div>
      </nav>
`
;

// Append the navbar to the header
header.innerHTML = navbarTemplate;

function logout() {
  // Clear the session variable
  sessionStorage.removeItem('loggedIn');
  // Redirect to the login page
  window.location.href = 'login.html';
}
