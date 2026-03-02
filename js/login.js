document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    }

    
    if (password.length < 6) {
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    }

    
    if (isValid) {

        document.getElementById('loginSuccessMessage').style.display = 'block';

        document.getElementById('loginForm').reset();

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);

    }
});




document.getElementById('loginEmail').addEventListener('input', function() {
    document.getElementById('loginEmailError').style.display = 'none';
});

document.getElementById('loginPassword').addEventListener('input', function() {
    document.getElementById('loginPasswordError').style.display = 'none';
});