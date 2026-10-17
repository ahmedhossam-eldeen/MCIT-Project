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

/* to view the events added */

EventsStore.render(
    document.getElementById('currentContainer'),
    EventsStore.getByType('current'),
    'No current events yet'
);

EventsStore.render(
    document.getElementById('upcomingContainer'),
    EventsStore.getByType('upcoming'),
    'No upcoming events yet'
);
