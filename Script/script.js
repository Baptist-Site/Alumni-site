const toggle = document.getElementById('toggle');
const signupclose = document.getElementById('signup-close');
const loginclose = document.getElementById('login-close');
const opensignup = document.getElementById('open-signup');
const openlogin = document.getElementById('open-login');
const signupmodal = document.getElementById('signup-modal');
const loginmodal = document.getElementById('login-modal');
const navbar = document.getElementById('navbar');

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});

// Show modal
opensignup.addEventListener('click', () => signupmodal.classList.add('show-modal'));
openlogin.addEventListener('click', () => loginmodal.classList.add('show-modal'));

// Hide modal


signupclose.addEventListener('click', () =>signupmodal.classList.remove('show-modal'));
loginclose.addEventListener('click', () =>loginmodal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == signupmodal ? signupmodal.classList.remove('show-modal') : false
  
);
window.addEventListener('click', e =>
e.target == loginmodal ? loginmodal.classList.remove('show-modal') : false
  
);

var year = new Date().getFullYear();
document.getElementById('date').setAttribute("min", year + "-01-01");
document.getElementById('date').setAttribute("max", year + "-12-31");
