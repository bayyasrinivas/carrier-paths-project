import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm');
    const signupBtn = document.querySelector('#signupBtn');
    const loginForm = document.querySelector('#loginForm');
    const errorMessage = document.querySelector('#errorMessage');

    // Toggle Forms
    document.querySelector('#showSignup')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        document.querySelector('#loginBtn').style.display = 'none';
        signupBtn.style.display = 'block';
        document.querySelector('.modal-title').textContent = 'Sign Up';
    });

    document.querySelector('#showLogin')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        document.querySelector('#loginBtn').style.display = 'block';
        signupBtn.style.display = 'none';
        document.querySelector('.modal-title').textContent = 'Login';
    });

    // Handle Signup
    signupBtn?.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const email = document.querySelector('#signupEmail').value;
        const password = document.querySelector('#signupPassword').value;
        const name = document.querySelector('#signupName').value;
        
        if (!email || !password || !name) {
            showError('Please fill in all fields');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Store additional user data
            await user.updateProfile({
                displayName: name
            });

            console.log('Signup successful:', user);
            showSuccess('Account created successfully!');
            
            // Clear form and close modal
            signupForm.reset();
            document.querySelector('#exampleModal').modal('hide');
            
        } catch (error) {
            console.error('Signup error:', error);
            showError(error.message);
        }
    });

    // Helper functions
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.textContent = message;
        signupForm.insertBefore(errorDiv, signupForm.firstChild);
        setTimeout(() => errorDiv.remove(), 3000);
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success';
        successDiv.textContent = message;
        signupForm.insertBefore(successDiv, signupForm.firstChild);
        setTimeout(() => successDiv.remove(), 3000);
    }
});







