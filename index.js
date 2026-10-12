const body = document.body;
const modeBtn = document.querySelector('.modebutton');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');

/* ---------- Theme ---------- */
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (modeBtn) {
        modeBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

function applySavedTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
        // first visit: follow the device setting
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(theme);
}

if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('theme', next);
    });
}

/* ---------- Auth (show/hide nav items) ---------- */
function setHidden(element, hide) {
    if (element) element.classList.toggle('hidden', hide);
}

function checkAuthStatus() {
    const loggedIn = Boolean(localStorage.getItem('userToken'));
    setHidden(loginBtn, loggedIn);
    setHidden(signupBtn, loggedIn);
    setHidden(logoutBtn, !loggedIn);
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        alert('You have been logged out.');
        checkAuthStatus();
    });
}

// The script is at the end of <body>, so the elements already exist
applySavedTheme();
checkAuthStatus();
// for dark mode,





// const form = document.getElementById("loginForm");
// const nameInput = document.getElementById("name");
// const passInput = document.getElementById("password");
// const nameError = document.getElementById("nameError");
// const passError = document.getElementById("passwordError");
// const toggleBtn = document.getElementById("togglePassword");
// const submitBtn = document.getElementById("submitBtn");

// // Show / hide password
// toggleBtn.addEventListener("click", () => {
//     const isHidden = passInput.type === "password";
//     passInput.type = isHidden ? "text" : "password";
//     toggleBtn.textContent = isHidden ? "Hide" : "Show";
//     toggleBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
// });

// function setError(input, box, message) {
//     box.textContent = message;
//     input.classList.toggle("invalid", Boolean(message));
// }

// // Clear the error as soon as the user starts typing again
// nameInput.addEventListener("input", () => setError(nameInput, nameError, ""));
// passInput.addEventListener("input", () => setError(passInput, passError, ""));

// form.addEventListener("submit", (e) => {
//     let valid = true;

//     if (nameInput.value.trim().length < 3) {
//         setError(nameInput, nameError, "Username must be at least 3 characters.");
//         valid = false;
//     }
//     if (passInput.value.length < 6) {
//         setError(passInput, passError, "Password must be at least 6 characters.");
//         valid = false;
//     }

//     if (!valid) {
//         e.preventDefault();
//         return;
//     }

//     // Valid: show loading state. The form then submits normally.
//     // If you send the data with fetch(), call e.preventDefault() here.
//     submitBtn.disabled = true;
//     submitBtn.textContent = "Logging in...";
// });