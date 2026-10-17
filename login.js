// const passInput = document.getElementById('password');
// const toggleBtn = document.getElementById('togglePass');

// toggleBtn.addEventListener('click', () => {
//     const hidden = passInput.type === 'password';
//     passInput.type = hidden ? 'text' : 'password';
//     toggleBtn.textContent = hidden ? 'Hide' : 'Show';
//     toggleBtn.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
// });
const passInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePass');

toggleBtn.addEventListener('click', () => {
    const hidden = passInput.type === 'password';
    passInput.type = hidden ? 'text' : 'password';
    toggleBtn.textContent = hidden ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
});