document.addEventListener('DOMContentLoaded', () => {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            switchBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');

            // Show/hide forms
            if (btn.dataset.form === 'signup') {
                signupForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
            } else {
                loginForm.classList.remove('hidden');
                signupForm.classList.add('hidden');
            }
        });
    });

    // Handle form submissions
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signup form submitted');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login form submitted');
    });
});
