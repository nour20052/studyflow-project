document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;
    
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmError').style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('signupForm').reset();
        
       setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 3000);
    }
});

document.getElementById('name').addEventListener('input', function() {
    document.getElementById('nameError').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('passwordError').style.display = 'none';
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    document.getElementById('confirmError').style.display = 'none';
});